<template>
  <aside class="col-md-4 sidebar">
    <div class="widget">
      <h3 class="title">搜索</h3>
      <div id="search-form">
        <div id="result-mask" class="hide"></div>
        <div class="search-area">
          <input id="search-key" type="search" v-model="input" placeholder="搜点什么呢？">
          <a :href="'/search?keyword='+input">
            <button type="button" class="search-form-submit" id="search-local">站内搜索
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="widget">
      <h3 class="title">社交</h3>
      <div class="content social">
        <a href="//github.com/minatoyukina" rel="external nofollow" title="Github" target="_blank">
          <i class="git fa fa-git"></i>
        </a>
        <a href="mailto:uzi9mm7@gmail.com" rel="external nofollow" title="邮箱" target="_blank">
          <i class="envelope-o fa fa-envelope-o"></i>
        </a>
        <a href="/" rel="external nofollow" title="联系QQ" target="_blank">
          <i class="qq fa fa-qq"></i>
        </a>
        <a href="/" rel="external nofollow" title="微信" target="_blank">
          <i class="weixin fa fa-weixin"></i>
        </a>
        <a href="/" rel="external nofollow" title="QQ群" target="_blank">
          <i class="users fa fa-users"></i>
        </a>
        <a href="/" rel="external nofollow" title="RSS" target="_blank">
          <i class="feed fa fa-feed"></i>
        </a>
      </div>
    </div>


    <div class="widget">
      <h3 class="title">最热</h3>
      <div class="notification">
        <div v-for="blog in blogs"><a :href="'/article/'+blog.blogId">{{blog.title}}</a>
        </div>
      </div>
    </div>

    <div class="widget">
      <h3 class="title">分类</h3>
      <ul class="category-list">
        <li class="category-list-item" v-for="catalog in catalogs"><a class="category-list-link" :href="'/search?keyword='+catalog.name">
          <i class="fa" aria-hidden="true">{{catalog.name}}</i></a><span
          class="category-list-count">{{catalog.count}}</span></li>
      </ul>
    </div>


    <div class="widget">
      <h3 class="title">归档</h3>
      <ul class="archive-list" v-for="archive in archives">
        <li class="archive-list-item">
          <a class="archive-list-link" href="/timeline">
            <i class="fa" aria-hidden="true">{{archive.name}}</i>
          </a><span class="archive-list-count">{{archive.count}}</span>
        </li>
      </ul>
    </div>


    <div class="widget">
      <h3 class="title">标签云</h3>
      <div class="content tag-cloud">
        <a v-for="tag in tags" :href="'/search?keyword='+tag.name" style="font-size: 10px;">{{tag.name}}</a>
      </div>
    </div>


    <div class="widget">
      <h3 class="title">友链</h3>
      <div class="content friends-link">
        <a href="http://47.102.218.113:8080" class="fa" target="_blank">后端博客</a>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    name: "Widget",
    data() {
      return {
        tags: [],
        input: "",
        blogs: [],
        catalogs: [],
        archives: []
      }
    },
    mounted() {
      let _this = this;
      this.axios.all([
          this.axios.get("/api/restapi/tag"),
          this.axios.get("/api/restapi/hottest"),
          this.axios.get("/api/restapi/catalog"),
          this.axios.get("/api/restapi/archive")
        ]
      ).then(this.axios.spread(function (tag, hottest, catalog, archive) {
        _this.tags = tag.data;
        _this.blogs = hottest.data;
        _this.catalogs = catalog.data;
        _this.archives = archive.data;
      }))
    }
  }
</script>

<style scoped>

</style>
