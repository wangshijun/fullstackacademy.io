---
title: 前端周刊第32期
layout: page
path: "/weekly/issue-32/"
---

> 哈哈，美团网长期招聘前端工程师，感兴趣的同学请猛戳《<a href="http://fe.meituan.com/jobs" target="_blank">这里</a>》查看我们的职位。

### 文章教程

#### [跨域资源共享（CORS）使用详解](http://www.html5rocks.com/en/tutorials/cors/)

浏览器的同源策略限制了不同域名之间的资源共享，于是产生了JSONP来跨域的获取数据，其实还有更简单的办法，就是跨域资源共享（CORS），按照W3C规范给被共享的资源服务器加上几个响应头，就可以实现跨域资源共享~

#### [Zakas 新书：Understanding ECMAScript 6](https://github.com/nzakas/understandinges6)

Zakas 在他的博客上坦言，他关注学习 ES6 已经两年多了，期间他做了很多的笔记，如今他把这些内容整理出来编写成书籍，免费开放给全世界的 Web 开发者阅读，不知道 Zakas 是谁？你真的是前端工程师么？

#### [Box 如何处理 Node 程序的依赖](http://tech.blog.box.com/2014/03/handling-node-js-dependencies-at-box/)

任何1家将 Node 用在企业级应用的公司都会很快碰到依赖管理的问题，云计算服务商 Box 也不例外，Node 程序的依赖应该放到 Git 仓库中么？需要搭建私有源么？私有源的维护成本如何？Node 应用的依赖会对部署产生什么样的影响？如何追踪依赖的版本变化？他们没有谈最佳实践，只是将遇到的问题以及引发的思考分享了出来~

#### [FlexBox 进阶资源汇总](http://zomigi.com/blog/leveling-up-with-flexbox/)

用 FlexBox 能够非常容易的实现各种布局需求，需要写的代码更少，也不需要使用各种浮动、定位属性。来自 Smashing Conference 的这篇文章，汇集了很多这方面的资料，虽然浏览器支持没达到100%，但在某些项目中使用还是很省事儿的。

### 开发工具

#### [Grunt Cdnify：帮你把静态资源指向CDN](https://github.com/callumlocke/grunt-cdnify)

这款 Grunt 插件，能够在代码上线时帮你把页面上的静态资源地址指向你所配置的 CDN，省去手动维护的麻烦，网站太小不需要CDN？看看高性能网站建设那两本书你就找到理由这么做了，前端周刊周末就做了这样的更新，不信？看看页面的源代码~

#### [前端工程师必备的 Atom 插件](http://www.elijahmanor.com/github-atom-packages/)

最近开始试用 Github 出品的代码编辑器 Atom，挖掘扩展的时候遇到这篇文章，推荐了几个非常不错的 Atom 插件，比如 Markdown 预览，Vim 模式，JS Lint，Emmet等，如果你还不知道 Atom 是什么，可以看看上期前端周刊。

### 代码框架

#### [基于 Bootstrap 3 的超级菜单](http://geedmo.github.io/yamm3/)

超级菜单是啥？里面包含了各种你能想到的控件：表单、表格、图片列表、项目列表，虽然在设计上不那么推荐，但是在实际系统中，这种菜单还是会非常有用的，可以收藏备用吧~

#### [Express DI：给 Express 武装上依赖注入](https://github.com/luin/express-di)

用过 Angular 的同学可能对齐依赖注入的便利性深有体会，Express DI 为你带来 Express 应用的依赖注入，厌烦了手动初始化各种实例，当参数传来传去？可以研究下这个~

### 找找灵感

#### [为你的下个项目找到更好用的 SASS 扩展](http://www.sache.in/)

这个小站集中了很多的 SASS 扩展，没事儿来逛逛，说不定遇上你能用在下1个项目中的扩展呢~

### 精彩问答

#### [为什么我的 CDN 在移动端比较慢？](http://www.igvita.com/2014/03/26/why-is-my-cdn-slow-for-mobile-clients/)

很多团队进行移动端的性能优化时，从实际采集到的数据中发现在移动端使用 CDN 效果并不明显，于是产生了 CDN 在移动端比较慢的结论，Ilya Grigorik 深入剖析了产生这种现象的原因，最后的结论是：CDN 并不慢，你尽管使用，但是需要让服务商在节点分布上多做优化~

#### [如何抽取网页所需的关键 CSS？](https://github.com/ibrennan/critical-css-casperjs)

页面下载的 CSS 非常多，可是首屏渲染会用到的 CSS 可能连 20% 都不到，为了让首屏渲染的更快，可以考虑将首屏需要的 CSS 剥离出来内联到页面中，那么如何抽取首屏渲染所需要的 CSS？这个基于 CasperJS 的脚本能帮你完成~

#### [如何基于瀑布流发现网站的性能瓶颈？](http://www.webperformancetoday.com/2014/03/18/waterfalls-101-how-to-use-a-waterfall-chart-to-diagnose-performance-pains/)

非常适合新手学习的瀑布流教程，瀑布流到底是啥？里面那些蓝的、绿的条都是啥含义？有些条比较长有些又比较短？都暗示了什么？常见的性能瓶颈在瀑布流中都会表现出来，会读瀑布流，你就能为网站把脉~
