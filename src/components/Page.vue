<template>
  <nav class="pagination" role="navigation" v-if="totalPage<7">
    <div id="page-nav">
      <span class="page-number current">1</span>
      <a class="page-number" href="/page/2/">2</a>
      <a class="page-number" href="/page/3/">3</a>
      <a class="extend next" rel="next" href="/page/2/">
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
  </nav>
  <nav class="pagination" role="navigation" v-else>
    <span class="page-number current">1</span>
    <a href=""></a>
  </nav>
</template>

<script>
  export default {
    name: "Page",
    data() {
      return {
        totalPage: 3,
      }
    }
  }
</script>

<style scoped>

</style>
