<template>
  <div id="app">

    <button @click="changeImage">change</button>
    <button @click="destory=!destory">destory</button>
    <br/>         
  <table>
    <template  v-for="(image,index) in images">
        <tr>
            <td> 
                <lightbox album="mm9" :src="image" :album="'wa hahahhahhah'+index " indexTmpl="${d}/${total}" v-if="image">
                    <a href="#" @click.prevent="">click</a>
                </lightbox>
            </td>
            <td>{{index}}</td>
        </tr>
    </template>
  </table>

    <br/>         

    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS314.jpg" caption="wa hahahhahhah " indexTmpl="${d}/${total}">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS314.jpg">
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS333.jpg" :click-overlay-hide="false">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS333.jpg">
      
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS333.jpg" :click-overlay-hide="false">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS333.jpg">
      
    </lightbox>
    <br>
    <lightbox album="bb" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg">
      
    </lightbox>

    <lightbox album="bb" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS352.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS352.jpg">
      
    </lightbox>
    <br>
    <lightbox album="" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS417.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS417.jpg">
      
    </lightbox>

    <div style="height:900px;"></div>
     <br>
    <lightbox album="bb" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg">
      
    </lightbox>

    <lightbox album="bb" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS352.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS352.jpg">
      
    </lightbox>
    <br>
    <lightbox album="" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS417.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS417.jpg">
      
    </lightbox>

    
  </div>
</template>

<script>
  // import Lightbox from '../dist/vue-lightbox.js'
  var Lightbox =  require('./index.js')
  console.log(Lightbox.VueLightbox)
  export default {
    name: 'app',
    components: {
      lightbox:Lightbox.VueLightbox
    },
    data(){
      return {
        images1 :[
          "http://www.tadewo.com/uploads/allimg/130607/1-13060FS314.jpg",
          "",
          "http://www.tadewo.com/uploads/allimg/130607/1-13060FS417.jpg",
          "",
          ""
        ],
        images2 :[
          "http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg",
          "http://www.tadewo.com/uploads/allimg/130607/1-13060FS346.jpg",
          "",
          "http://www.tadewo.com/uploads/allimg/130607/1-13060FS352.jpg",
          ""
        ],
        images : [],
        destory:true
      }
    },
    methods :{
      changeImage(){
        if (this.images == this.images1) {
          this.images = this.images2
        }else{
          this.images = this.images1
        }
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  input{
  width:300px;
  -moz-transition-duration:1s;
  -webkit-transition-duration:1s;
  -o-transition-duration:1s;
  transitition-duration:1s;
}
input:hover{
  width:500px;
}
input:focus{
  width:500px;
}
</style>
