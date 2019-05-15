<template>
  <div class="tmsgBox" ref="tmsgBox">
    <div class="tmsg-respond" ref="respondBox">
      <h3>发表评论
      </h3>
      <form>
        <div class="vwrap"></div>
        <div class="vheader item2">
          <input type="text" name="nick" placeholder="昵称" v-model="username" class="vnick vinput"/>
          <input type="text" name="mail" placeholder="邮箱" v-model="email" class="vmail vinput"/>
          <input type="text" name="website" placeholder="博客或主页(可选)" v-model="website" class="vwebsite vinput"/>
        </div>
        <textarea placeholder="说点什么呢~" v-model="content" style="width: 100%"></textarea>
        <div :class="pBody?'OwO':'OwO OwO-open'">
          <div class="OwO-logo">
            <span id='toggle-btn'>OwO表情</span>
          </div>
          <button type="button" class="btn btn-default" @click="sendMsg(url)" style="float: right">{{sendTip}}</button>
          <div class="OwO-body">
            <ul class="OwO-items OwO-items-show">
              <li class="OwO-item" v-for="(oItem,index) in OwOList" :key="'oItem'+index"
                  @click="chooseEmoji(oItem.title)">
                <img :src="'/static/emoji/'+oItem.url" alt="" id="toggle-trigger">
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() { //选项 / 数据
      return {
        listDom: '',//评论列表
        tmsgBox: '',//总评论盒子
        isRespond: false,
        username: '',
        email: '',
        website: '',
        content: '',//文本框输入内容
        pBody: true,//表情打开控制
        sendTip: '发送~',
        OwOList: [//表情包和表情路径
          {'title': '微笑', 'url': 'weixiao.gif'},
          {'title': '嘻嘻', 'url': 'xixi.gif'},
          {'title': '哈哈', 'url': 'haha.gif'},
          {'title': '可爱', 'url': 'keai.gif'},
          {'title': '可怜', 'url': 'kelian.gif'},
          {'title': '挖鼻', 'url': 'wabi.gif'},
          {'title': '吃惊', 'url': 'chijing.gif'},
          {'title': '害羞', 'url': 'haixiu.gif'},
          {'title': '挤眼', 'url': 'jiyan.gif'},
          {'title': '闭嘴', 'url': 'bizui.gif'},
          {'title': '鄙视', 'url': 'bishi.gif'},
          {'title': '爱你', 'url': 'aini.gif'},
          {'title': '泪', 'url': 'lei.gif'},
          {'title': '偷笑', 'url': 'touxiao.gif'},
          {'title': '亲亲', 'url': 'qinqin.gif'},
          {'title': '生病', 'url': 'shengbing.gif'},
          {'title': '太开心', 'url': 'taikaixin.gif'},
          {'title': '白眼', 'url': 'baiyan.gif'},
          {'title': '右哼哼', 'url': 'youhengheng.gif'},
          {'title': '左哼哼', 'url': 'zuohengheng.gif'},
          {'title': '嘘', 'url': 'xu.gif'},
          {'title': '衰', 'url': 'shuai.gif'},
          {'title': '吐', 'url': 'tu.gif'},
          {'title': '哈欠', 'url': 'haqian.gif'},
          {'title': '抱抱', 'url': 'baobao.gif'},
          {'title': '怒', 'url': 'nu.gif'},
          {'title': '疑问', 'url': 'yiwen.gif'},
          {'title': '馋嘴', 'url': 'chanzui.gif'},
          {'title': '拜拜', 'url': 'baibai.gif'},
          {'title': '思考', 'url': 'sikao.gif'},
          {'title': '汗', 'url': 'han.gif'},
          {'title': '困', 'url': 'kun.gif'},
          {'title': '睡', 'url': 'shui.gif'},
          {'title': '钱', 'url': 'qian.gif'},
          {'title': '失望', 'url': 'shiwang.gif'},
          {'title': '酷', 'url': 'ku.gif'},
          {'title': '色', 'url': 'se.gif'},
          {'title': '哼', 'url': 'heng.gif'},
          {'title': '鼓掌', 'url': 'guzhang.gif'},
          {'title': '晕', 'url': 'yun.gif'},
          {'title': '悲伤', 'url': 'beishang.gif'},
          {'title': '抓狂', 'url': 'zhuakuang.gif'},
          {'title': '黑线', 'url': 'heixian.gif'},
          {'title': '阴险', 'url': 'yinxian.gif'},
          {'title': '怒骂', 'url': 'numa.gif'},
          {'title': '互粉', 'url': 'hufen.gif'},
          {'title': '书呆子', 'url': 'shudaizi.gif'},
          {'title': '愤怒', 'url': 'fennu.gif'},
          {'title': '感冒', 'url': 'ganmao.gif'},
          {'title': '心', 'url': 'xin.gif'},
          {'title': '伤心', 'url': 'shangxin.gif'},
          {'title': '猪', 'url': 'zhu.gif'},
          {'title': '熊猫', 'url': 'xiongmao.gif'},
          {'title': '兔子', 'url': 'tuzi.gif'},
          {'title': '喔克', 'url': 'ok.gif'},
          {'title': '耶', 'url': 'ye.gif'},
          {'title': '棒棒', 'url': 'good.gif'},
          {'title': '不', 'url': 'no.gif'},
          {'title': '赞', 'url': 'zan.gif'},
          {'title': '来', 'url': 'lai.gif'},
          {'title': '弱', 'url': 'ruo.gif'},
          {'title': '草泥马', 'url': 'caonima.gif'},
          {'title': '神马', 'url': 'shenma.gif'},
          {'title': '囧', 'url': 'jiong.gif'},
          {'title': '浮云', 'url': 'fuyun.gif'},
          {'title': '给力', 'url': 'geili.gif'},
          {'title': '围观', 'url': 'weiguan.gif'},
          {'title': '威武', 'url': 'weiwu.gif'},
          {'title': '话筒', 'url': 'huatong.gif'},
          {'title': '蜡烛', 'url': 'lazhu.gif'},
          {'title': '蛋糕', 'url': 'dangao.gif'},
          {'title': '发红包', 'url': 'fahongbao.gif'}
        ]
      }
    },
    props: {
      commentUrl: {
        type: String,
        default: ''
      },
      replyUrl: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      isReply: {
        type: Boolean,
        default: false
      },
    },
    methods: { //事件处理器
      //选择表情包
      chooseEmoji: function (inner) {
        this.content += '[' + inner + ']';
      },
      analyzeEmoji: function (cont) {//编译表情替换成图片展示出来
        let pattern1 = /\[[\u4e00-\u9fa5]+]/g;
        let pattern2 = /\[[\u4e00-\u9fa5]+]/;
        let content = cont.match(pattern1);
        let str = cont;
        let src;
        if (content) {
          for (let i = 0; i < content.length; i++) {
            for (let j = 0; j < this.OwOList.length; j++) {
              if ("[" + this.OwOList[j].title + "]" === content[i]) {
                src = this.OwOList[j].url;
                break;
              }
            }
            str = str.replace(pattern2, '<img src="/static/emoji/' + src + '"/>');
          }
        }
        return str;
      },
      //发送留言
      sendMsg(url) {//留言
        if (this.$route.path !== "/board") {
          this.isReply ? url = this.replyUrl : url = this.commentUrl;
        }
        let that = this;
        if (that.content) {
          that.sendTip = '咻~~';
          that.axios.post(url, {
              userName: that.username,
              email: that.email,
              website: that.website,
              content: that.content,
            }
          ).then(function () {
            that.$router.go(0)
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.sendTip = '内容不能为空~';
          let timer = setTimeout(function () {
            that.sendTip = '发送~';
            clearTimeout(timer);
          }, 3000)
        }
      },
      getReplyDom(replyTo) {
        let dom = this.$refs.respondBox;
        this.content = "回复@" + replyTo + ": ";
        return dom
      }
    },
    created() {
      let _this = this;
      let body = document.querySelector('body');
      body.addEventListener('click', (e) => {
        _this.pBody = !(e.target.id === 'toggle-btn' || e.target.id === 'toggle-trigger');
      }, false)
    },
  }
</script>

<style scoped>
  @import "../assets/css/message.css";
</style>
