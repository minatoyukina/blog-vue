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
    </article>
    <Pagination :totalPages="totalPages"
                :total="totalElements"
                @change="loadPages"></Pagination>

  </main>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

</style>
