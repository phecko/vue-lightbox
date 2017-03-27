<template>
  <span @click="open">
    <slot></slot>
  </span>
</template>

<script>

import {on,off,once,addClass,setStyle,show,hide,htmlEncode} from './utils.js'

const getUid = ()=>{
  return (""+(new Date()).getTime()+parseInt(Math.random()*1000)).toString(32)
}

const getWinWidth = ()=>{
  return window.innerWidth
}

const getWinHeight = ()=>{
  return window.innerHeight
}

const containerPadding = {
  top : 10,
  right : 10,
  bottom : 10,
  left : 10
}
const dataContainerHeight = 40
const imageBorderWidth = {
  top : 4,
  right : 4,
  bottom : 4,
  left : 4
}


class Picture {
  constructor(src,caption,showIndex,indexTmpl,clickOverlayHide){
    this.src = src
    this.uid = getUid()
    this.caption = caption
    this.showIndex = showIndex
    this.clickOverlayHide = clickOverlayHide
    this.indexTmpl = indexTmpl
  }
}

class Album {
  constructor(name){
    this.name = name
    this.pictures = []
  }

  addPicture(uid){
    this.pictures.push(uid)
  }

  getPictureIndex(uid){
    for (var i = 0; i < this.pictures.length; i++) {
      if(this.pictures[i] == uid){
        return i+1
      }
    }
    return 0
  }

  getPicture(index){
    if (this.pictures.length < index) {
      return
    }
    return this.pictures[index-1]
  }

  length(){
    return this.pictures.length
  }

}


const ModalManager = {
  zindex : 2000,
  _lightbox:false,
  _overlay : false,
  _outerContainer : false,
  _container : false,
  _nav:false,
  _image:false,
  _loader:false,

  _inited : false,


  _albums : {},
  _pictures : {},
  curAlbum:false,


  init(){
    var self = this
    if (this._inited) {

      this._image.src=""
      setStyle(this._loader,"display","block")
      self.sizeContainer(250,250)


      return
    }
    let div = document.createElement("div")
    div.innerHTML = '<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption">这是一张很大大的图片</span><span class="lb-number">1 of 5 images</span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>'
    let divs = div.childNodes
    let elements = []
    for (var i = 0; i < divs.length; i++) {
      elements.push(divs[i])
    }
    let docFrag = document.createDocumentFragment();
    for(var i = 0; i < elements.length; i++) {
      docFrag.appendChild(elements[i]); 
    }
      document.body.appendChild(docFrag)

    this._lightbox = document.getElementById("lightbox")
    this._overlay = document.getElementById("lightboxOverlay")
    this._outerContainer = this._lightbox.querySelector(".lb-outerContainer")
    this._container = this._lightbox.querySelector(".lb-container")
    this._image = this._lightbox.querySelector(".lb-image")
    this._nav = this._lightbox.querySelector(".lb-nav")
    this._loader = this._lightbox.querySelector(".lb-loader")


    // add event listener
    on(window,"resize",()=>{
        self.sizeOverlay()
        self.sizeContainer(self._image.naturalWidth,self._image.naturalHeight)
    })


    on(this._nav,'mousedown', function(event) {
      if (event.which === 3) {
        setStyle(self._nav,'pointer-events', 'none')

        once (self._lightbox,'contextmenu', function() {
          setTimeout(function() {
            setStyle(self._nav,'pointer-events', 'auto')
          }, 0);
        });
      }
    });

    on(this._lightbox.querySelector(".lb-close"),"click",(event)=>{
      self.end()
      event.stopPropagation()
    })

    on(this._nav.querySelector(".lb-prev"),"click",(event)=>{
      self.changeImage(self.curIndex-1)
      event.preventDefault()
      event.stopPropagation()
    })

    on(this._nav.querySelector(".lb-next"),"click",(event)=>{
      self.changeImage(self.curIndex+1)
      event.preventDefault()
      event.stopPropagation()
    })

    self.sizeContainer(250,250)
    this._inited = true
  },
  start(albumName,uid){
    this.init()
    var self = this
    this.sizeOverlay()
    show(this._overlay)
    show(this._lightbox)
    this.showImage(albumName,uid)
  },

  end(){
    hide(ModalManager._overlay)
    hide(ModalManager._lightbox)
  },

  showImage(albumName,uid){

    let pic = this.getPicture(uid)
    let self = this
    if (!pic) {
      return 
    }
    var $image = this._image

    //add click hide event listener
    if (pic.clickOverlayHide) {
        on(self._overlay,"click",this.end)
    }else{
        off(self._overlay,"click",this.end)
    }


    var preloader = new Image();
    let navPrev = this._nav.querySelector(".lb-prev")
    let navNext = this._nav.querySelector(".lb-next")
    setStyle(this._image,"visibility","hidden")
    show(this._loader)
    hide(this._nav)
    hide(navPrev)
    hide(navNext)
    preloader.onload = ()=>{

        let imageWidth = preloader.width,
          imageHeight = preloader.height
        self.sizeContainer(imageWidth,imageHeight)
        setStyle(self._loader,"display","none")

        $image.src = preloader.src
        setStyle(self._image,"visibility","visible")

    }

    preloader.src = pic.src

    self.updateNav(albumName,uid)
    self.updateCaption(pic.caption)


  },

  updateNav(albumName,uid){
    let pic = this.getPicture(uid)
    let navPrev = this._nav.querySelector(".lb-prev")
    let navNext = this._nav.querySelector(".lb-next")
    let album = this.getAlbum(albumName)
    if (!album) {
        this._lightbox.querySelector(".lb-number").innerHTML = ""
        return
    }
    this.curAlbum = album
    show(this._nav)

    let index = album.getPictureIndex(uid)
    if (!index) {
      return
    }
    this.curIndex = index

    // update index
    let numberDom = this._lightbox.querySelector(".lb-number")
    if (!pic.showIndex) {
        numberDom.innerHTML = ""
    }else{
        let indexStr = pic.indexTmpl.replace(/\${d}/g,index).replace(/\${total}/g,album.length())
        numberDom.innerHTML = indexStr
    }


    // set timeout ,prevent double click next/prev button
    setTimeout(()=>{
        if (index>1) {
            show(navPrev)
        }else{
            hide(navPrev)
        }

        if (index < album.length()) {
            show(navNext)
        }else{
            hide(navNext)
        }
    },800)
  },

  updateCaption(caption){
    caption = htmlEncode(caption)
    this._lightbox.querySelector(".lb-caption").innerHTML = caption
  },


  changeImage(index){
    if (!this.curAlbum) {
      return
    }

    var pp = this.curAlbum.getPicture(index)
    if (pp.len) {
      return
    }


    this.showImage(this.curAlbum.name,pp)

  },

  sizeOverlay(){
    // setStyle(this._overlay,"width",window.offsetWidth+"px")
    // setStyle(this._overlay,"height",window.scrollHeight+"px")
  },

  sizeContainer(imageWidth,imageHeight){

    if (imageWidth==0 || imageHeight==0) {
        return
    }

    var self = this
    var oldWidth = this._outerContainer.outerWidth
    var oldHeight = this._outerContainer.outerHeight

    let newWidth = containerPadding.left + imageBorderWidth.left + imageWidth + imageBorderWidth.right + containerPadding.right

    let newHeight = containerPadding.top + imageBorderWidth.top + imageHeight + imageBorderWidth.bottom + containerPadding.bottom


    let maxWidth = getWinWidth()-80,
      maxHeight = getWinHeight()-80- containerPadding.top - imageBorderWidth.top - imageBorderWidth.bottom - containerPadding.bottom - dataContainerHeight,
      ratio = imageWidth/imageHeight


    if (newWidth>maxWidth) {
      newWidth = maxWidth
      newHeight = newWidth/ratio
    }
    if (newHeight > maxHeight) {
      newHeight = maxHeight
      newWidth = ratio*newHeight
    }

    setStyle(this._outerContainer,"width",newWidth+"px")
    setStyle(this._lightbox,"width",newWidth+"px")
    setStyle(this._outerContainer,"height",newHeight+"px")

    this.positionLightbox(newWidth,newHeight)


    let newImageWidth = newWidth - (containerPadding.left + imageBorderWidth.left  + imageBorderWidth.right + containerPadding.right)
    let newImageHeight = newHeight - (containerPadding.top + imageBorderWidth.top  + imageBorderWidth.bottom + containerPadding.bottom )
    
    setStyle(this._image,"width",newImageWidth+"px")
    setStyle(this._image,"height",newImageHeight+"px")

  },

  positionLightbox(width,height){
    let ww = getWinWidth()
    let wh = getWinHeight()

    let top = (wh-height)/2
    let left = (ww-width)/2

    setStyle(this._lightbox,"top",top+"px")
    setStyle(this._lightbox,"left",left+"px")
  },

  addToAlbum(name,src,caption,showIndex,indexTmpl,clickOverlayHide){

    let pic  = new Picture(src,caption,showIndex,indexTmpl,clickOverlayHide)
    this._pictures[pic.uid] = pic
    if (!name) {
      return pic.uid
    }

    if (!this._albums[name]) {
      this._albums[name] = new Album(name)
    }
    this._albums[name].addPicture(pic.uid)
    return pic.uid
  },

  getAlbum(name){
    return this._albums[name]
  },

  getPicture(uid){
    return this._pictures[uid]
  }

}




export default {
    name: 'hello',
    props:{
        src:{
            type:String
        },
        caption:{
            type:String
        },
        album:{
            type:String,
            default: ""
        },
        showIndex:{
            type:Boolean,
            default:true
        },
        indexTmpl : {
            type:String,
            default:"${d} of ${total} images"
        },
        clickOverlayHide:{
            type:Boolean,
            default:true
        }},
    data () {
      return {
        uid:""
      }
    },
    methods:{
      open(){
        ModalManager.start(this.album,this.uid)
      }
    },
    mounted(){
      this.uid = ModalManager.addToAlbum(this.album,this.src,this.caption,this.showIndex,this.indexTmpl,this.clickOverlayHide)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Preload images */
body:after {
  content: url(../assets/images/close.png) url(../assets/images/loading.gif) url(../assets/images/prev.png) url(../assets/images/next.png);
  display: none;
}

body.lb-disable-scrolling {
  overflow: hidden;
}

.lightboxOverlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  overflow: hidden;
  z-index: 9999;
  background-color: black;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  opacity: 0.8;
  display: none;
}

.lightbox {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  line-height: 0;
  font-weight: normal;
}

.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: inherit;
  max-height: none;
  border-radius: 3px;

  /* Image border */
  border: 4px solid white;
}

.lightbox a img {
  border: none;
}

.lb-outerContainer {
  position: relative;
  *zoom: 1;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  border-radius: 4px;

  /* Background color behind image.
     This is visible during transitions. */
  background-color: white;
}

.lb-outerContainer:after {
  content: "";
  display: table;
  clear: both;
}

.lb-loader {
  position: absolute;
  top: 43%;
  left: 0;
  height: 25%;
  width: 100%;
  text-align: center;
  line-height: 0;
}

.lb-cancel {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background: url(../assets/images/loading.gif) no-repeat;
}

.lb-nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.lb-container {
  padding: 10px;
}

.lb-container > .nav {
  left: 0;
}

.lb-nav a {
  outline: none;
  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
}

.lb-prev, .lb-next {
  height: 100%;
  cursor: pointer;
  display: block;
}

.lb-nav a.lb-prev {
  width: 34%;
  left: 0;
  float: left;
  background: url(../assets/images/prev.png) left 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}

.lb-nav a.lb-prev:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.lb-nav a.lb-next {
  width: 64%;
  right: 0;
  float: right;
  background: url(../assets/images/next.png) right 48% no-repeat;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  -webkit-transition: opacity 0.6s;
  -moz-transition: opacity 0.6s;
  -o-transition: opacity 0.6s;
  transition: opacity 0.6s;
}

.lb-nav a.lb-next:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.lb-dataContainer {
  margin: 0 auto;
  padding-top: 5px;
  *zoom: 1;
  width: 100%;
  -moz-border-radius-bottomleft: 4px;
  -webkit-border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  -webkit-border-bottom-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.lb-dataContainer:after {
  content: "";
  display: table;
  clear: both;
}

.lb-data {
  padding: 0 4px;
  color: #ccc;
}

.lb-data .lb-details {
  width: 85%;
  float: left;
  text-align: left;
  line-height: 1.1em;
}

.lb-data .lb-caption {
  font-size: 13px;
  font-weight: bold;
  line-height: 1em;
}

.lb-data .lb-caption a {
  color: #4ae;
}

.lb-data .lb-number {
  display: block;
  clear: left;
  padding-bottom: 1em;
  font-size: 12px;
  color: #999999;
}

.lb-data .lb-close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  background: url(../assets/images/close.png) top right no-repeat;
  text-align: right;
  outline: none;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
  opacity: 0.7;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.lb-data .lb-close:hover {
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

</style>
