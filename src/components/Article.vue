<template>
  <div>
    <main class="col-md-8 main-content m-post">
      <p id="process"></p>
      <article class="post">
        <div class="post-head">
          <h1>
            {{title}}
          </h1>
          <div class="post-meta">
        <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" :href="'/blog?keyword='+catalog">{{catalog}}</a>
        </span>
            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">
              <a class="tag-link" v-for="word in tag.split(',')" :href="'/blog?keyword='+word">{{word}}</a>
            </span>
        </span>
            <span class="fa-wrap">
            <i class="fa fa-clock-o"></i>
            <span class="date-meta">{{new Date(createTime).toLocaleString('chinese',{hour12:false})}}</span>
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
            转载声明：商业转载请联系作者获得授权,非商业转载请注明出处 © <a href="/">シロクマ</a>
          </div>
        </div>
      </article>

      <div class="article-nav prev-next-wrap clearfix">
        <a :href="'/article/'+(parseInt(`${this.$route.params.id}`)-1)" class="pre-post btn btn-default">
          <i class="fa fa-angle-left fa-fw"></i><span class="hidden-lg">上一篇</span>
          <span class="hidden-xs">上一篇</span>
        </a>

        <a :href="'/article/'+(parseInt(`${this.$route.params.id}`)+1)" class="next-post btn btn-default">
          <span class="hidden-lg">下一篇</span>
          <span class="hidden-xs">下一篇</span><i class="fa fa-angle-right fa-fw"></i>
        </a>
      </div>
      <Message :commentUrl="'/api/restapi/comment?blogId='+ `${this.$route.params.id}`"
               :isReply="isReply"
               :replyUrl="'/api/restapi/reply?commentId='+ commentId"
               ref="analyze"/>
      <div class="tmsg-comments" ref="listDom">
        <div class="tmsg-comments-tip">活捉 {{total}} 条</div>
        <div class="tmsg-commentshow">
          <ul class="tmsg-commentlist">
            <li class="tmsg-c-item" v-for="(item,index) in commentList" :key="'common'+index">
              <article class="">
                <header>
                  <img :src="emailToICO(item.email)">
                  <div class="i-name">
                    {{item.userName}}&ensp;
                    <span class="i-time"><time>{{new Date(item.createTime).toLocaleString()}}</time></span>
                  </div>
                </header>
                <section>
                  <p v-html="emoji(item.content)"></p>
                  <div class="tmsg-replay" @click="respondMsg(item.id,item.userName)">回复
                  </div>
                </section>
              </article>
              <ul v-show="item.restCommentReplyList" class="tmsg-commentlist" style="padding-left:60px;">
                <li class="tmsg-c-item" v-for="(cItem,cIndex) in item.restCommentReplyList" :key="'cItem'+cIndex">
                  <article class="">
                    <header>
                      <img :src="emailToICO(item.email)">
                      <div class="i-name">
                        {{cItem.userName}}&ensp;
                        <span class="i-time"><time>{{new Date(item.createTime).toLocaleString()}}</time></span>
                      </div>
                    </header>
                    <section>
                      <p v-html="emoji(cItem.content)"></p>
                      <div class="tmsg-replay" @click="respondMsg(item.id,cItem.userName)">
                        回复
                      </div>
                    </section>
                  </article>
                </li>
              </ul>
            </li>
          </ul>
          <h1 v-show='hasMore' class="tcolors-bg" @click="addMoreFun">查看更多</h1>
          <h1 v-show='!hasMore' class="tcolors-bg">没有更多</h1>
        </div>
      </div>
    </main>
    <Content :message="message"/>
  </div>
</template>

<script>
  import Content from "./Content";
  import Message from "./Message";

  export default {
    name: "Article",
    components: {Message, Content},
    data() {
      return {
        title: "",
        catalog: "",
        tag: "",
        createTime: "",
        readSize: "",
        htmlContent: "",
        message: "",

        commentList: [],//评论列表数据
        isReply: false,
        hasMore: true,
        commentId: '',
        currentPage: 1,
        total: 0,
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
      },

      respondMsg(commentId, replyTo) {//回复留言
        this.isReply = true;
        let dom = event.currentTarget;
        dom = dom.parentNode;
        this.commentId = commentId;
        dom.appendChild(this.$refs.analyze.getReplyDom(replyTo));
      },
      showCommentList(page) {//评论列表
        let _this = this;
        this.axios.get("/api/restapi/comment?pageIndex=" + page + "&blogId=" + `${this.$route.params.id}`)
          .then(response => {
            this.total = response.data.totalElements;
            response.data.list.forEach(function (item) {
              _this.commentList.push(item)
            });
            this.hasMore = response.data.totalPages > this.currentPage;
          })
      },
      addMoreFun() {//查看更多
        this.showCommentList(this.currentPage++);
      },
      emoji(content) {
        return this.$refs.analyze.analyzeEmoji(content)
      },
      emailToICO(email) {
        if (email === "1096445518@qq.com") {
          return "/static/avatar.jpg"
        }
        if (email.indexOf('@qq') !== -1) {
          return 'http://q4.qlogo.cn/g?b=qq&nk=' + email.split('@')[0] + '&s=100'
        }
        return "/static/default-ico.jpg"
      }
    },
    mounted() {
      let _this = this;
      const url = "/api/restapi/" + `${this.$route.params.id}`;
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
      }).then(_this.showCommentList(0));
    }
  }
</script>

<style scoped>
  @import "../assets/css/message.css";

  li {
    list-style-type: none;
  }

  .tcolors-bg {
    font-size: small;
  }
</style>
