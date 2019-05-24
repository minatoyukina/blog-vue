<template>
  <main class="col-md-12 main-content">
    <Message url="/api/restapi/board" ref="analyze"/>
    <div id="timeline">
      <div v-for="(li,i) in list" :class="['item', {'isLeft':i % 2===0}, {'isRight':i % 2===1}]">
        <div class="content">
          <div style="margin-bottom: 5px">
            <a :href="!li.website?'javascript:':'//'+li.website">
              <img :src="emailToICO(li.email)"
                   style="width: 24px;height: 24px;border-radius: 50%">
            </a>
            <strong style="color: #70ca10;">&ensp;{{li.userName}}</strong>
            <span style="float: right">{{li.id}}楼&ensp;|&ensp;<time>{{timeAgo(new Date(li.createTime).getTime())}}</time></span>
          </div>
          <div v-html="emoji(li.content)" style="margin-left: 5px;word-break:break-all;"></div>
          <div v-if="li.replyContent" class="replyBox">
            <div style="margin-top: 15px;margin-left: 5px">
              <strong>回复:&ensp;</strong>
              <span>{{li.replyContent}}&ensp;&ensp;{{li.replyTime.split("T")[0]}}</span>
            </div>
          </div>
          <a v-show="$store.state.userInfo.nick" @click="showReplyBox(i)">回复</a>
          <div v-if="replyBox&&currentIndex===i" style="position: relative;z-index: 9999">
            <textarea title="board" v-model="replyContent"></textarea>
            <span @click="reply(li.id,replyContent)">发送</span>
          </div>
        </div>
        <span class="corner"></span>
        <span class="point"></span>
      </div>
      <div class="line" style="margin-top: 20px"></div>
    </div>
    <Pagination :totalPages="totalPages"
                :total="totalElements"
                :pageSize=pageSize
                @change="loadPages"/>
  </main>
</template>

<script>
  import "../assets/js/timeLine"
  import Message from "./Message";
  import Pagination from "./Pagination";

  export default {
    name: "Board",
    components: {Message, Pagination},
    data() {
      return {
        list: [],
        id: 0,
        totalPages: 0,
        totalElements: 0,

        replyContent: "",
        replyBox: false,
        currentIndex: 0,
        pageSize: 30
      }
    },
    methods: {
      timeAgo(dateTimeStamp) {
        let result;
        let minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
        let hour = minute * 60;
        let day = hour * 24;
        let week = day * 7;
        let month = day * 30;
        let now = new Date().getTime();   //获取当前时间毫秒
        let diffValue = now - dateTimeStamp;//时间差
        if (diffValue < 0) {
          return;
        }
        let minC = diffValue / minute;  //计算时间差的分，时，天，周，月
        let hourC = diffValue / hour;
        let dayC = diffValue / day;
        let weekC = diffValue / week;
        let monthC = diffValue / month;
        if (monthC >= 1) {
          result = " " + parseInt(monthC) + "月前"
        }
        else if (weekC >= 1) {
          result = " " + parseInt(weekC) + "周前"
        }
        else if (dayC >= 1) {
          result = " " + parseInt(dayC) + "天前"
        }
        else if (hourC >= 1) {
          result = " " + parseInt(hourC) + "小时前"
        }
        else if (minC >= 1) {
          result = " " + parseInt(minC) + "分钟前"
        }
        else {
          result = "刚刚";
        }

        return result;
      },
      emoji(content) {
        return this.$refs.analyze.analyzeEmoji(content)
      },
      respondMsg(id, replyTo) {//回复留言
        let dom = event.currentTarget;
        dom = dom.parentNode;
        dom.appendChild(this.$refs.analyze.getReplyDom(replyTo));
      },
      emailToICO(email) {
        if (email === "1096445518@qq.com") {
          return "/static/avatar.jpg"
        }
        if (email.indexOf('@qq') !== -1) {
          return 'http://q4.qlogo.cn/g?b=qq&nk=' + email.split('@')[0] + '&s=100'
        }
        return "/static/default-ico.jpg"
      },
      reply(id, content) {
        let _this = this;
        let params = new URLSearchParams();
        params.append("id", id);
        params.append("content", content);
        this.axios.put('/api/restapi/board', params).then(function () {
          _this.$router.go(0)
        })
      },
      showReplyBox(i) {
        this.currentIndex = i;
        this.replyBox = true
      },
      loadPages(page) {
        this.axios.get("/api/restapi/board?pageIndex=" + page)
          .then(response => {
            this.list = response.data.list;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          })
      },
    },
    mounted() {
      this.loadPages(0)
    }
  }
</script>

<style scoped>
  .replyBox {
    border-top: 1px solid #dededd;
    margin-top: 15px;
  }

  #timeline {
    position: relative;
    min-height: 660px;
    margin-top: 20px;
  }

  #timeline .line {
    width: 2px;
    height: 0;
    background-color: #c8c8c8;
    position: absolute;
    top: -20px;
  }

  #timeline .item {
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    min-height: 80px;
    clear: both;
    visibility: hidden;
  }

  #timeline .item .content {
    padding: 10px;
    overflow: hidden;
  }

  #timeline .item .point, #timeline .item .corner {
    display: block;
    position: absolute;
    z-index: 2;
  }

  #timeline .item .point {
    /*此处涉及CSS3，如需兼容IE6-8，请修改为图片，中间小圆点*/
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
  }

  #timeline .item .point:before {
    /*此处涉及CSS3，如需兼容IE6-8，可忽略，点上的那个绿点，可直接做图片到 point上*/
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #70ca10;
    position: absolute;
    top: 3px;
    left: 3px;
  }

  #timeline .item.isLeft .corner {
    top: 27px;
  }

  #timeline .item.isLeft .point {
    top: 30px;
  }

  #timeline .item.isRight .corner {
    top: 37px;
  }

  #timeline .item.isRight .point {
    top: 40px;
  }

  #timeline .item .corner {
    /*此处涉及CSS3，如需兼容IE6-8，请修改为图片，箭头*/
    border: 12px solid transparent;
  }

  #timeline .item.isLeft .corner {
    border-left-color: #fff;
    left: 100%;
  }

  #timeline .item.isRight .corner {
    border-right-color: #fff;
    right: 100%;
  }
</style>
