<template>
  <main class="col-md-12 main-content">
    <Message url="/api/restapi/board" ref="analyze"/>
    <div id="timeline">
      <div v-for="(li,i) in list" :class="['item', {'isLeft':i % 2===0}, {'isRight':i % 2===1}]">
        <div class="content">
          <p>{{li.userName}}</p>
          <p>{{li.createTime}}</p>
          <p v-html="emoji(li.content)"></p>
        </div>
        <span class="corner"></span>
        <span class="point"></span>
      </div>
      <div class="line" style="margin-top: 20px"></div>
    </div>
  </main>
</template>

<script>

  import "../assets/js/timeLine"
  import Message from "./Message";

  export default {
    name: "Board",
    components: {Message},
    data() {
      return {
        list: [],
      }
    },
    methods:{
      emoji(content){
        return this.$refs.analyze.analyzeEmoji(content)
      }
    },
    mounted(){
      this.axios.get("/api/restapi/board")
        .then(response=>{
          this.list=response.data.list;
        })
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    width: 86%;
    max-width: 1280px;
    min-width: 480px;
    overflow: hidden;
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
