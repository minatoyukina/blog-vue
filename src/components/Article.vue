<template>
  <main class="col-md-8 main-content m-post">
    <p id="process"></p>
    <article class="post">
      <div class="post-head">
        <h1 id="个人代码规范">
          个人代码规范
        </h1>
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
          <span class="fa-wrap">
            <i class="fa fa-clock-o"></i>
            <span class="date-meta">2019/04/11</span>
        </span>
          <span class="fa-wrap">
            <i class="fa fa-eye"></i>
            <span id="busuanzi_value_page_pv"></span>
          </span>
        </div>
      </div>

      <div class="post-body post-content">
        <ol>
          <li>流程控制body只有一行时省略大括号，review修改时先在body前后套上大括号IDE reformat之后进行编辑。例：
            <pre>
while(true):
     System.out.println(“hello”);
System.out.println(“world”);
            </pre>
          </li>
          <li>两个以上字符串拼接时使用printf或者string.fomart。</li>
          <li>禁止使用lombok等代码侵入性强的工具。</li>
          <li>想到再补充。</li>
        </ol>

      </div>

      <div class="post-footer">
        <div>
          转载声明：商业转载请联系作者获得授权,非商业转载请注明出处 © <a href target="_blank">minatoyukina</a>
        </div>
      </div>
    </article>

    <div class="article-nav prev-next-wrap clearfix">
      <a href="/2019/04/13/Java自学路线推荐/" class="pre-post btn btn-default" title="Java自学路线推荐">
        <i class="fa fa-angle-left fa-fw"></i><span class="hidden-lg">上一篇</span>
        <span class="hidden-xs">Java自学路线推荐</span>
      </a>

      <a href="/2019/04/06/hello-world/" class="next-post btn btn-default" title="Hello World">
        <span class="hidden-lg">下一篇</span>
        <span class="hidden-xs">Hello World</span><i class="fa fa-angle-right fa-fw"></i>
      </a>
    </div>
    <div id="comments">
      <div id="vcomments" class="valine"></div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Article"
  }
</script>

<style scoped>

</style>
