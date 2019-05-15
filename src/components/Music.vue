<template>
  <main class="col-md-8 main-content">
    <div class="g-wrap p-prf">
      <div class="u-title u-tltle-1 f-cb m-record-title" id="rHeader">
        <div>
          <span style="font-size: 24px">听歌排行</span>&nbsp;
          <span>累积听歌{{songs[0].total}}首</span>
          <span>更新于{{songs[0].date}}</span>
        </div>
        <div class="nav f-cb">
          <span id="songsall" :class="{'z-sel': type==='ALL'}" @click="loadSongs('ALL')">所有时间</span>
          <i></i>
          <span id="songsweek" :class="{'z-sel': type==='WEEK'}" @click="loadSongs('WEEK')">最近一周</span>
        </div>
      </div>
      <div id="m-record" class='m-record '>
        <div id="auto-id">
          <ul>
            <li :id="index" v-for="(item,index) in songs" :class="{'even': index%2===1}">
              <div class="hd">
                <span class="num">{{++index}}.</span>
              </div>
              <div class="song">
                <div class="tt">
                  <div class="ttc">
                    <span class="txt">
                      <a :href="item.link" target="_blank">
                        <b title="">{{item.title}}</b>
                      </a>
                      <span class="ar s-fc-8">
                        <em>-</em>
                        <span title="">
                          <a href="" class="s-fc-8">{{item.author}}</a>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="tops">
                <span class="bg" :style="'width: '+(item.width.split(' ')[1].split('%')[0])*2+'px'"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Music",
    data() {
      return {
        songs: [],
        type: null
      }
    },
    methods: {
      loadSongs(type) {
        this.type = type;
        this.axios.get("/api/restapi/music?type=" + type)
          .then((response) => {
            this.songs = response.data;
          });
      },
    },
    mounted() {
      this.loadSongs("WEEK")
    }
  }
</script>

<style scoped>
  .u-title {
    padding-bottom: 5px;
    border-bottom: 2px solid #c20c0c;
  }

  .m-record li {
    height: 38px;
    line-height: 38px;
    overflow: hidden;
    padding-left: 10px;
  }

  .m-record {
    margin-bottom: 36px;
  }

  .m-record ul {
    border: 1px solid #e2e2e2;
    border-top: none;
  }

  .m-record-title {
    position: relative;
    z-index: 2;
    zoom: 1;
  }

  .m-record-title h4 {
    float: left;
    display: inline;
    margin-top: 5px;
    margin-left: 10px;
    line-height: 26px;
    font-weight: 400;
    color: #666;
  }

  .m-record-title .nav {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 5px;
  }

  .m-record-title .nav span, .m-record-title .nav i {
    float: right;
    margin-left: 8px;
  }

  .m-record-title .nav span.z-sel {
    color: #333;
    font-weight: 700;
  }

  .m-record li {
    height: 38px;
    line-height: 38px;
    overflow: hidden;
  }

  .m-record li:hover {
    background: #cc7eee;
  }

  .m-record li.even {
    background-color: #f7f7f7;
  }

  .m-record li.even:hover {
    background: #97e67d;
  }

  .m-record li .hd {
    float: left;
    width: 36px;
    height: 38px;
    overflow: hidden;
  }

  .m-record li .hd .num {
    float: left;
    display: inline;
    padding-left: 5px;
    padding-right: 8px;
    width: 45px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #666;
  }

  .m-record li .song {
    float: left;
    position: relative;
    z-index: 1;
    zoom: 1;
    padding-left: 10px;
    width: 480px;
    height: 38px;
    overflow: hidden;
  }

  .m-record li .song .tt {
    float: left;
    width: 100%;
  }

  .m-record li .song .tt .txt {
    position: relative;
    display: inline-block;
    max-width: 99%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-record li .song .tt .ar em {
    margin: 0 5px;
  }

  .m-record li .tops span.bg {
    float: right;
    width: 200px;
    height: 38px;
    line-height: 38px;
    background-color: #4eb4f5;
    opacity: 0.3;
    filter: Alpha(opacity=10);
  }

  .m-record li {
    *zoom: 1;
  }

  .m-record li:hover .song .ttc {
    margin-right: 90px;
  }

  ul {
    padding: 0
  }

</style>
