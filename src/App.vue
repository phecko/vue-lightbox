<template>
  <div id="app">

    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS314.jpg" caption="wa hahahhahhah " indexTmpl="${d}/${total}">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS314.jpg">
    </lightbox>
    <lightbox album="mm" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      <img width="100px" src="http://www.tadewo.com/uploads/allimg/130607/1-13060FS327.jpg">
      
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

    
  </div>
</template>

<script>
  // import Lightbox from '../dist/vue-lightbox.js'
  import Lightbox from './index.js'
  export default {
    name: 'app',
    components: {
      lightbox:Lightbox
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
