<template>
  <aside id="article-toc" role="feed" class="col-md-4">
    <div class="widget">
      <h3 class="title">文章目录</h3>
      <div v-html="message"></div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "Content",
    props: {
      message: {
        type: String,
      },
    }
  }
</script>

<style>
 .newh1 {
    margin-left: 0;
  }

  .newh2 {
    margin-left: 15px;
  }

  .newh3 {
    margin-left: 30px;
  }

  .newh4 {
    margin-left: 45px;
  }

  .newh5 {
    margin-left: 60px;
  }

  .newh6 {
    margin-left: 75px;
  }
</style>
