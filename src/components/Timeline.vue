<template>
  <main class="col-md-8 main-content">
    <div id="main">
      <div class="timebox">
        <div class="timeline">
          <ul>
            <h2>2019</h2>
            <li v-for="blog in blogs">
              <h3>
                {{blog.createTime.substring(8,10)}}<span>{{blog.createTime.split("-")[1]}}月</span>
              </h3>
              <router-link :to="'/article/'+blog.id" :title="blog.title" target="_blank">{{blog.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Timeline",
    data() {
      return {
        blogs: "",
      }
    },
    mounted() {
      this.axios.get("/api/blog/timeline")
        .then((response) => {
          this.blogs = response.data;
        });
    }
  }
</script>

<style scoped>

</style>
