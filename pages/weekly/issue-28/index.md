---
title: 前端周刊第28期
layout: page
path: "/weekly/issue-28/"
---

### 文章教程

#### [已经过时的 UX 模式以及替代方案](http://sideproject.io/outdated-ux-patterns/)

随着WEB技术的进化，用户的成熟，有不少 UX 模式可以说已经过时了：业务上不能很好的满足信息展示的需求，交互上也显得有些低效生硬，这些 UX 模式都包含哪些呢？替代方案如何？很不错的文章~

#### [Node 服务器性能调优](http://blog.caustik.com/category/node-js/)

这里收录了几篇 Node 服务器性能调优的文章，如何让 Node 服务器处理百万每秒的请求？如何让 Node 服务器突破1.4GB的内存限制？都有真实的实验和数据，如果你在生产环境用 Node，可以看看这个~

#### [真正的 AngularJS 模块按需加载](http://blog.getelementsbyidea.com/load-a-module-on-demand-with-angularjs/)

Google 上能找到不少按需加载JS代码的文章，但是这些文章都聚焦于如何按需的加载1个 Controller，Directive，由于 Angular 应用生命周期的不同，如何真正做到按需加载1个 Angular 模块？作者读了源码，做了不错的分析和Hack实现~

#### [手把手教你开发 Yeoman Generator](http://rhumaric.com/2014/01/building-a-yeoman-generator/)

Yeoman 出来之后，GitHub 上有不少的种子项目被开发成了 Generator，有了 Generator，可以减少不少重复性的工作，这篇文章把 Generator 开发过程中会涉及到的内容作了讲解，如何获得参数？如何组织代码？如何操作目录和文件？

### 开发工具

#### [让你的 Gruntfile 更加给力](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)

这篇文章没有罗列那些帮你检查、合并、压缩、搜索替换的 Grunt 插件，重点在 Grunt 任务运行的整个过程，要点包括：如何保持你的 Gruntfile 干净整洁，如何知道任务运行的时间，如何收到特定事件的通知。

#### [用 Grunt 衡量页面的前端性能](http://4waisenkinder.de/blog/2013/12/22/how-to-measure-frontend-performance-with-phantomas-and-grunt/)

有想过用 Grunt 衡量页面的前端性能么？有了 Phantomas 实现这个很容易啦，每次发布之后对你的页面进行全面的诊断，非常适合与简单的 WebAPP 进行整合，对于大型网站的前端性能监控也存在不少借鉴意义~

### 代码框架

#### [Mousetrap：给网页武装上键盘快捷键](https://github.com/ccampbell/mousetrap)

如果你非常 Geek，Mousetrap 就肯定非常合你的胃口，他提供了非常简单的 API 在网页上绑定各种快捷键，甚至能兼容到IE6，不依赖任何外部脚本，压缩之后也就3KB，现在用不上也可以收藏备用~

#### [Ionic：移动开发领域的Bootstrap](https://github.com/driftyco/ionic)

Ionic 是移动应用开发领域中1个比较优秀的框架，对主流的JS MVW框架都提供支持，可以看做是移动领域的 Bootstrap，如果你正好有移动开发的需求，又熟悉诸如 Angular 之类的东西，大可以拿来试试，不过得注意它的兼容性哦~

### 视频教程

#### [编译工具之战：Grunt 和 Gulp](http://markdalgleish.github.io/presentation-build-wars-gulp-vs-grunt/)

对于那些觉得文件拷贝、代码复制粘贴、查找替换重复无趣的同学肯定对 Grunt 不陌生，作为编译工具能节省很多重复劳动，Gulp 是啥？和 Grunt 比有哪些区别？这是个不错的演讲稿，非常生动风趣~

#### [Etsy：指标驱动的工程师文化](http://www.slideshare.net/mikebrittain/metrics-driven-engineering-at-etsy)

Etsy 是美国的1家电商网站，目前的规模非常和美团网不想上下，他的工程师团队在GitHub上也非常的活跃，这个演讲介绍了他们指标驱动的工程师文化，以及这种文化诞生的背景和土壤，里面提到了很多优秀的工具哦~

### 精彩问答

#### [为什么有些工程师创造的价值更多？](http://www.quora.com/What-kind-of-jobs-do-the-software-engineers-who-earn-500k-per-year-do/answer/Amin-Ariana)

Quora 上很不错的1个问题：为什么有些工程师创造的价值更多？其实原问题是：那些年薪百万的工程师和普通工程师到底有何差别？表面上看好像是相同的，但实际上差别很大。对技术很有热情？那么这位EX-Googler的答案很值得你思考~

#### [如何解决 JSDom 的内存泄露？](http://stackoverflow.com/questions/13893163/jsdom-and-node-js-leaking-memory)

JSDom 可以用来很快的构建简单的网页抓取分析程序，但是使用不当，会很容易出现内容泄露，慢慢把你的主机拖进泥潭？如何避免或者解决他的内存泄露问题，StackOverflow 上童鞋们已经攒了几个方案了~
