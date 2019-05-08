<template>
  <main class="col-md-12 main-content">
    <div id="timeline">
      <div v-for="(li,i) in list" :class="['item', {'isLeft':i % 2===0}, {'isRight':i % 2===1}]">
        <div class="content">
          <p>
            SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。</p>
        </div>
        <span class="corner"></span>
        <span class="point"></span>
      </div>


      <div class="line"></div>

    </div>
  </main>
</template>

<script>

  import "../assets/js/timeLine"

  export default {
    name: "Board",
    data() {
      return {
        list: new Array(20),
        test: "abcdef"
      }
    },
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
