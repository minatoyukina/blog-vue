<template>
  <div id="app">
    <Header/>
    <section class="content-wrap">
      <div class="container">
        <div class="row">
          <router-view/>
          <Widget v-if="$route.path.split('/')[1]!=='board'&& $route.path.split('/')[1]!=='article'"/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
  import Widget from "./components/Widget";
  import Footer from "./components/Footer";
  import Header from "./components/Header";

  export default {
    name: 'App',
    components: { Header, Footer, Widget}
  }
</script>

<style scoped>
  #app {
    color: #505050;
    line-height: 1.75em;
    background: #ebebeb;
    position: relative;
    overflow-x: hidden;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "WenQuanYi Micro Hei", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif;
  }
</style>
