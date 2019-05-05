<template>
  <main class="col-md-8 main-content ">
    <div class="carousel">
      <a href="javascript:" target="_blank">
        <img src="./../assets/img/head-img.jpg">
      </a>
    </div>

    <article class="post" v-for="blog in blogs">
      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <router-link :to="'/article/'+blog.id">{{blog.title}}</router-link>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              {{blog.createTime.split("T")[0]}}
            </time>
          </div>
        </div>
        <p class="brief">
          {{blog.content.substring(0,250)}}
        </p>
      </div>
      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">
            <span class="categories-meta fa-wrap">
              <i class="fa fa-folder-open-o"></i>
              <a class="category-link" href="/categories/工具/">{{blog.catalog.name}}</a>
            </span>
            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">
              <a class="tag-link" href="/tags/Java/" v-for="tag in blog.tags.split(',')">{{tag}}</a>
            </span>
            </span>
          </div>
        </div>
        <div class="post-permalink">
          <router-link :to="'/article/'+blog.id" class="btn btn-default">阅读全文</router-link>
        </div>
      </footer>
    </article>
    <Pagination :totalPages="totalPages"
                :total="totalElements"
                @change="loadPages"></Pagination>

  </main>
</template>

<script>
  import Pagination from "./Pagination";

  export default {
    name: "List",
    components: {Pagination},
    data() {
      return {
        blogs: "",
        totalPages: 0,
        totalElements: 0,
      }
    },
    methods: {
      loadPages(page) {
        this.axios.get("/api/blog?pageIndex=" + page)
          .then((response) => {
            this.blogs = response.data.blogs;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          });
      },
      cut(demo, num) {
        let str = demo;
        if (str.length >= num) {
          let strN = str.substring(0, num);
          strN += "...";
          demo.html(strN);
        }
      }
    },
    mounted() {
      this.loadPages(0);
    }
  }
</script>

<style scoped>
</style>
