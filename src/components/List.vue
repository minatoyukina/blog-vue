<template>
  <main class="col-md-8 main-content">
    <div class="carousel">
      <a href="javascript:" target="_blank">
        <img src="./../assets/img/head-img.jpg">
      </a>
    </div>

    <article class="post" v-for="blog in blogs">
      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <router-link :to="'/article/'+blog.id" @click.native="refresh">{{blog.title}}</router-link>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              {{blog.createTime.split("T")[0]}}
            </time>
          </div>
        </div>
        <p class="brief">
          {{blog.content.length>250 ? blog.content.substring(0,250)+"..." : blog.content}}
        </p>
      </div>
      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">
          <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" :href="'/blog?keyword='+blog.catalog.name">{{blog.catalog.name}}</a>
         </span>
            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">
              <a class="tag-link" v-for="tag in blog.tags.split(',')" @click="loadKeyWords(tag)">{{tag}}</a>
            </span>
            </span>
          </div>
        </div>
        <div class="post-permalink">
          <router-link :to="'/article/'+blog.blogId" class="btn btn-default" @click.native="refresh">阅读全文</router-link>
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
        tag: ""
      }
    },
    methods: {
      loadPages(page) {
        this.axios.get("/api/restapi?pageIndex=" + page)
          .then((response) => {
            this.blogs = response.data.list;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          });
      },
      loadKeyWords(keyword) {
        this.axios.get("/api/restapi?pageSize=999&keyword=" + keyword)
          .then((response) => {
            this.blogs = response.data.list;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          });
        window.scroll(0)
      },
      refresh: function () {
        this.$router.go(0);
      }
    },
    mounted() {
      this.loadPages(0);
    }
  }
</script>

<style scoped>
</style>
