<template>
  <main class="col-md-8 main-content ">
    <div class="carousel">
      <a href="javascript:" target="_blank">
        <img src="./../assets/img/head-img.jpg" alt>
      </a>
    </div>

    <article class="post">
      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <a href="/article">Java自学路线推荐</a>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              2019年04月13日
            </time>
          </div>
        </div>
        <p class="brief">

          入门
          2015年Java基础视频-深入浅出精华版 by 刘意
          Intellij Idea + sublimeweb
          锋利的jQuery
          深入浅出MySQL数据库开发优化与管理维护
          spring揭秘
          淘淘商城项目提升
          深入理解Java虚拟机：JVM高级特性与最佳实践
          Effective Java
          JAVA 8实战
          数据结构与算法分析_Java语言描述
          Spring Cloud与Docker微服务架构实战扩展
          Python Cookbook
          Programming in Scala


        </p>
      </div>

      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">

        <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" href="/categories/工具/">工具</a>
        </span>


            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">

                    <a class="tag-link" href="/tags/Java/">Java</a> <a class="tag-link" href="/tags/自学/">自学</a>

            </span>
        </span>


          </div>
        </div>

        <div class="post-permalink">
          <a href="/2019/04/13/Java自学路线推荐/" class="btn btn-default">阅读全文</a>
        </div>
      </footer>

    </article>


    <article class="post">
      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <a href="/2019/04/11/个人代码规范/">个人代码规范</a>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              2019年04月11日
            </time>
          </div>
        </div>
        <p class="brief">


          流程控制body只有一行时省略大括号，review修改时先在body前后套上大括号IDE reformat之后进行编辑。例：
          while(true):
          System.out.println(“hello”);
          System.out.println(“world”);

          两个以上字符串拼接时使用printf或者string.fomart。
          禁止使用lombok等代码侵入性强的工具。
          想到再补充。


        </p>
      </div>

      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">

        <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" href="/categories/后端/">后端</a>
        </span>


            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">

                    <a class="tag-link" href="/tags/coding/">coding</a>

            </span>
        </span>


          </div>
        </div>

        <div class="post-permalink">
          <a href="/2019/04/11/个人代码规范/" class="btn btn-default">阅读全文</a>
        </div>
      </footer>

    </article>


    <article class="post">

      <div class="post-content">
        <div class="post-head home-post-head">
          <h1 class="post-title">
            <a href="/2019/04/06/hello-world/">Hello World</a>
          </h1>
          <div class="post-meta"> &bull;
            <time class="post-date" datetime title>
              2019年04月06日
            </time>
          </div>
        </div>
        <p class="brief">

          Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any
          problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.
          Quick StartCreate a new post1$ hexo new &#34;My New Post...

        </p>
      </div>

      <footer class="post-footer clearfix">
        <div class="pull-left tag-list">
          <div class="post-meta">

        <span class="categories-meta fa-wrap">
            <i class="fa fa-folder-open-o"></i>
            <a class="category-link" href="/categories/前端/">前端</a>
        </span>


            <span class="fa-wrap">
            <i class="fa fa-tags"></i>
            <span class="tags-meta">

                    <a class="tag-link" href="/tags/hexo/">hexo</a>

            </span>
        </span>


          </div>
        </div>

        <div class="post-permalink">
          <a href="/2019/04/06/hello-world/" class="btn btn-default">阅读全文</a>
        </div>
      </footer>

    </article>
  </main>
</template>

<script>
  export default {
    name: "List"
  }
</script>

<style scoped>

</style>
