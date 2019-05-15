<template>
  <main class="col-md-8 main-content">
    <div class="opt-bar mb30 clearfix">
      <div class="sort">
        最近看过<span class="gray-dot">·</span>
        <a href="#">我的收藏</a>
      </div>
      <div class="mode">
        <span class="subject-num">{{page*5+1}}-{{(page+1)*5}}&nbsp;/&nbsp;{{totalElements}}</span>
      </div>
    </div>
    <br/>
    <div class="grid-view" v-for="film in films">
      <div class="item">
        <div class="pic">
          <a :title="film.title" :href="film.subject" class="nbg" target="_blank">
            <img :src="film.pic" :alt="film.title">
          </a>
        </div>
        <div class="info">
          <ul>
            <li class="title">
              <a :href="film.subject">
                <em>{{film.title}}</em>
              </a>
            </li>
            <li class="intro">{{film.desc}}</li>
            <li><span class="date">{{film.time}}&nbsp;看过</span></li>
          </ul>
        </div>
      </div>
    </div>
    <Pagination :totalPages="totalPages"
                :total="totalElements"
                @change="loadPages"/>
  </main>
</template>

<script>
  import Pagination from "@/components/Pagination";

  export default {
    name: "Film",
    components: {Pagination},
    data() {
      return {
        films: [],
        totalPages: 0,
        totalElements: 0,
        page: 0
      }
    },
    methods: {
      loadPages(page) {
        this.page = page;
        this.axios.get("/api/restapi/film?pageIndex=" + page)
          .then((response) => {
            this.films = response.data.list;
            this.totalPages = response.data.totalPages;
            this.totalElements = response.data.totalElements;
          });
      },
      refresh: function () {
        this.$router.go(0);
      }
    },
    mounted() {
      this.loadPages(0);
    }
  }
</script>

<style scoped>
  .grid-view .item {
    overflow: auto;
    display: table;
    width: 100%;
    zoom: 1
  }

  .grid-view .item > .pic, .grid-view .item > .info {
    display: table-cell;
    vertical-align: top;
    float: initial;
  }

  .grid-view .item .tabs-more span {
    color: #369;
  }

  .grid-view .item .lnk-tab-more:hover span {
    color: #fff;
  }

  .grid-view .item .tabs-more ul {
    left: 0;
    margin-left: 0
  }

  .subject-num {
    display: inline-block;
    *display: inline;
    zoom: 1;
    vertical-align: text-bottom;
    color: #999
  }

  .list-view .item {
    border-bottom: 1px dashed #ddd;
    *display: inline
  }

  .grid-view .item {
    margin: 0 0 20px;
    padding: 0 0 5px;
    border-bottom: 1px dashed #ddd;
  }

  .grid-view .item .pic {
    width: 80px;
    overflow: hidden
  }

  .grid-view .item .info {
    overflow: hidden;
  }

  img {
    width: 80px;
    height: 112px;
  }

  li {
    list-style-type: none;
  }

  .opt-bar .sort {
    float: left;
    color: #999
  }

  .opt-bar .mode {
    float: right
  }

  .gray-dot {
    font-size: 14px;
    color: #999;
    padding: 0 3px
  }

</style>
