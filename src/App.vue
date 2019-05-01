<template>
  <div id="app">
    <Header/>
    <section class="content-wrap">
      <div class="container">
        <div class="row">
          <router-view/>
          <Widget v-if="$route.path!=='/article'"/>
          <Content v-if="$route.path==='/article'"/>
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
import List from "./components/List";
import Content from "./components/Content";
export default {
  name: 'App',
  components: {Content, List, Header, Footer, Widget}
}
</script>

<style>

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
</style>
