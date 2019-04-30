<template>
  <main class="col-md-8 main-content ">
    <div class="carousel">
      <a href="javascript:" target="_blank">
        <img src="./../assets/img/head-img.jpg">
      </a>
    </div>

    <article class="post">
      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <a href="/article">{{title}}</a>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              {{createTime}}
            </time>
          </div>
        </div>
        <p class="brief">
          {{summary}}
        </p>
      </div>
      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">
            <span class="categories-meta fa-wrap">
              <i class="fa fa-folder-open-o"></i>
              <a class="category-link" href="/categories/工具/">工具</a>
            </span>
            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">
              <a class="tag-link" href="/tags/Java/">Java</a> <a class="tag-link" href="/tags/自学/">自学</a>
            </span>
            </span>
          </div>
        </div>
        <div class="post-permalink">
          <a href="/2019/04/13/Java自学路线推荐/" class="btn btn-default">阅读全文</a>
        </div>
      </footer>
    </article>
    <Page/>
  </main>
</template>

<script>
  import Page from "./Page";
  export default {
    name: "List",
    components: {Page},
    data() {
      return {
        title: "test",
        createTime: "2019",
        summary: "hello",
      }
    }
  }
</script>

<style scoped>

</style>
