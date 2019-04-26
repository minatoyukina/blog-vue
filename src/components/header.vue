<template>
  <header class="main-header" :style="{backgroundImage:`url(${img})`}">
    <div class="main-header-box">
      <a class="header-avatar" href="/">
        <img src="../assets/img/avatar.jpg" class="img-responsive center-block"/>
      </a>
      <div class="branding">
        <img src="../assets/img/branding.png" class="img-responsive center-block"/>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        img: require('./../assets/img/head-img.jpg')
      }
    }
  }
</script>

<style scoped>
  /*@import "../assets/css/bootstrap.min.css";*/
  @import "../assets/css/font-awesome.min.css";
  @import "../assets/css/style.css";
</style>
