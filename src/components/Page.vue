<template>
  <nav class="pagination" role="navigation" v-if="totalPages<7">
    <div id="page-nav">
      <span class="page-number current">1</span>
      <a class="page-number" href="/page/2/" v-for="i in (totalPages-1)">{{++i}}</a>
      <a class="extend next" rel="next" href="/page/2/">
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
  </nav>
  <nav class="pagination" role="navigation" v-else>
    <span class="page-number current">1</span>
    <span class="page-number">2</span>
    <a href=""></a>
  </nav>
</template>

<script>
  export default {
    name: "Page",
    props: ["totalPages", "totalElements"],
    data() {
      return {}
    },
  }
</script>

<style scoped>

</style>
