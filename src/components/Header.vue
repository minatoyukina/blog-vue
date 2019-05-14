<template>
  <div>
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
    <nav class="main-navigation">
      <div class="row">
        <div class="col-sm-12">
          <div class="navbar-header">
            <span class="nav-toggle-button collapsed pull-right" data-toggle="collapse" data-target="#main-menu"
                  id="mnav">
              <span class="sr-only"></span>
                <i class="fa fa-bars"></i>
            </span>
              <a href="/" class="navbar-brand">Relax-Eat-Play Loop</a>
          </div>
          <div class="collapse navbar-collapse" id="main-menu">
            <ul class="menu">
              <li role="presentation" class="text-center">
                <a href="/"><i class="fa ">首页</i> </a>
              </li>
              <li role="presentation" class="text-center">
                <a href="/timeline"><i class="fa ">时间轴</i> </a>

              </li>
              <li role="presentation" class="text-center">
                <a href="/music"><i class="fa ">最近在听</i> </a>
              </li>
              <li role="presentation" class="text-center">
                <a href="/film"><i class="fa ">电影</i> </a>
              </li>
              <li role="presentation" class="text-center">
                <a href="/board"><i class="fa ">留言板</i> </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "headerNav",
    data() {
      return {
        img: require('./../assets/img/banner.jpg')
      }
    }
  }
</script>

<style scoped>
</style>
