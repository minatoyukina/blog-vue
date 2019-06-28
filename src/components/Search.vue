<template>
  <main class="col-md-8 main-content">
    <ol class="breadcrumb">
      <li>{{decodeURI(this.$route.fullPath.split("=")[1])}}</li>
    </ol>

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
    </article>
    <Pagination :totalPages="totalPages"
                :total="totalElements"
                @change="loadKeyWords"></Pagination>

  </main>
</template>

<script>
  import Pagination from "./Pagination";

  export default {
    name: "Search",
    components: {Pagination},
    data() {
      return {
        blogs: [],
        totalPages: 0,
        totalElements: 0,
      }
    },
    methods: {
      loadKeyWords(page) {
        this.axios.get("/api/restapi" + this.$route.fullPath + "&pageIndex=" + page)
          .then((response) => {
            this.blogs = response.data.list;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          });
      }

    },
    mounted() {
      this.loadKeyWords(0)
    }

  }
</script>

<style scoped>

</style>
