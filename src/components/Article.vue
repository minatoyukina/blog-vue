<template>
  <div>
    <main class="col-md-8 main-content m-post">
      <p id="process"></p>
      <article class="post">
        <div class="post-head">
          <h1 id="个人代码规范">
            {{title}}
          </h1>
          <div class="post-meta">
        <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" href="/categories/后端/">{{catalog}}</a>
        </span>
            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">
              <a class="tag-link" href="/tags/coding/">{{tag}}</a>
            </span>
        </span>
            <span class="fa-wrap">
            <i class="fa fa-clock-o"></i>
            <span class="date-meta">{{createTime}}</span>
        </span>
            <span class="fa-wrap">
            <i class="fa fa-eye"></i>
            <span id="busuanzi_value_page_pv">{{readSize}}</span>
          </span>
          </div>
        </div>

        <div class="post-body post-content" v-html="htmlContent">
        </div>
        <div class="post-footer">
          <div>
            转载声明：商业转载请联系作者获得授权,非商业转载请注明出处 © <a href target="_blank">minatoyukina</a>
          </div>
        </div>
      </article>

      <div class="article-nav prev-next-wrap clearfix">
        <a :href="'/article/'+(1)" class="pre-post btn btn-default" title="Java自学路线推荐">
          <i class="fa fa-angle-left fa-fw"></i><span class="hidden-lg">上一篇</span>
          <span class="hidden-xs">Java自学路线推荐</span>
        </a>

        <a :href="'/article/'+(1)" class="next-post btn btn-default" title="Hello World">
          <span class="hidden-lg">下一篇</span>
          <span class="hidden-xs">Hello World</span><i class="fa fa-angle-right fa-fw"></i>
        </a>
      </div>
      <div id="comments">
        <div id="vcomments" class="valine"></div>
      </div>
    </main>
    <Content :message="message"/>
  </div>
</template>

<script>
  import Content from "./Content";

  export default {
    name: "Article",
    components: {Content},
    data() {
      return {
        title: "",
        catalog: "",
        tag: "",
        createTime: "",
        readSize: "",
        htmlContent: "",
        message: "",
      }
    },
    methods: {
      content() {
        let _this = this;
        let dom = this.parseDom(this.htmlContent);
        let header = dom.querySelectorAll("h1, h2, h3, h4, h5, h6");
        if (header.length === 0) {
          _this.message = "<p>暂无目录</p>";
        } else {
          header.forEach((item, i) => {
            let tag = item.localName;
            console.log(item);
            item.setAttribute("id", "wow" + i);
            _this.message += ('<li class="new' + tag + '"><a href="#wow' + i + '">' + item.innerText + '</a></li>');
          });
          this.htmlContent = this.domToString(dom);
        }
      },

      parseDom(str) {
        let objE = document.createElement("div");
        objE.innerHTML = str;
        return objE;
      },

      domToString(node) {
        let tmpNode = document.createElement('div');
        tmpNode.appendChild(node);
        let str = tmpNode.innerHTML;
        tmpNode = node = null; // 解除引用，以便于垃圾回收
        return str;
      }
    },
    mounted() {
      let _this = this;
      const url = "/api/blog/" + `${this.$route.params.id}`;
      this.axios.get(url)
        .then((response) => {
          this.title = response.data.title;
          this.catalog = response.data.catalog.name;
          this.tag = response.data.tags;
          this.createTime = response.data.createTime;
          this.readSize = response.data.readSize;
          this.htmlContent = response.data.htmlContent;
        }).then(function () {
        _this.content();
      });
    }
  }
</script>

<style scoped>

</style>
