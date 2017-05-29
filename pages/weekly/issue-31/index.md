---
title: 前端周刊第31期
layout: page
path: "/weekly/issue-31/"
---

> 嘿嘿，跟大家透个底，我在美团工作：负责性能优化和相关数据平台的建设，为了支撑美团的业务发展，我们需要更多优秀的工程师加入我们，如果你热爱前端、认可美团或者想跟我一起工作，请移步<a href="http://fe.meituan.com/jobs" target="_blank">这里</a>看看我们的职位，投简历的时候，如果注明从前端周刊而来，会有特殊通道哦。不多说了，下面是近期发现的不错的内容，请享用~

### 文章教程

#### [AngularJS 2.0 你应该开始期待的](http://blog.angularjs.org/)

不知道你注意到没有，身边的同学慢慢开始用 Angular 写应用了，如果你对 AngularJS 还停留在听说的阶段，那得抓紧了，最近 AngularJS 团队已经着手 Angular 2 的开发，到底会变化成啥样子？会有哪些新特性？这篇文章做了概要性的介绍，感兴趣的同学推荐看看~

#### [AngularJS 应用的用户认证方法漫谈](https://medium.com/opinionated-angularjs/7bbf0346acec)

通常来说网络应用都会涉及到用户登录、权限认证等问题，用 AngularJS 开发的应用如何解决这个问题？如何登录？如何做权限验证？如何让会话过期？作者在这方面做了不少的探索和分享，今天以文章的形式分享给我们~

#### [高效 Node 程序员的 10 个习惯](https://blog.heroku.com/archives/2014/3/11/node-habits#8-keep-track-of-outdated-dependencies)

相信大家都或多或少的开发过或大或小的 Node 程序，刚开始的时候，可能都彷徨过，高效的 Node 程序员都有哪些好的实践呢？这篇文章的作者总结了 10 条，相信对你会有所启发~

#### [让 Node 程序把多核机器榨干](http://blog.carbonfive.com/2014/02/28/taking-advantage-of-multi-processor-environments-in-node-js/)

相信绝大多数同学使用的都是多核机器，就像浏览器中 JS，简单的 Node 程序是单线程的，其实有办法把多核机器的潜能发挥到极致，让 Node Server 处理更多的并发连接，美团性能数据实时收集和解析的 Server 或多或少受到了这个思想的启发，单台机器每天能处理 600W 以上的请求~

#### [三栏式布局的 FlexBox 实现](http://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)

这个 GitHub 仓库把很多经典的 CSS 问题挨个用 FlexBox 解决了1遍，从代码上来说确实简洁了很多，这篇文章就是三栏式布局的解决方案，20多行代码，不仅能满足各种栏宽需求，还让布局具备了自适应的能力~

### 开发工具

#### [Git Extras：扩展你的 Git 工具箱](https://github.com/visionmedia/git-extras)

有没有在视频里看到其他同学把 Git 完的出神入化，他们为啥有很多我没有的命令？这个 Repo 集合了非常多不错的小命令，帮你扩展你的 Git 工具箱，赶快收了吧~

#### [NewRelic：异步加载时间和 JS 错误监控尝鲜](http://blog.newrelic.com/2014/03/13/javascript-error-reporting-ajax-timing-new-relic/)

服务器端监控的服务商 NewRelic 最近推出了浏览器端的监控，目前能帮你监控 Ajax 请求的时间，和浏览器中的 JS 错误情况。没有听过 NewRelic 或者没有自己的性能监控方案的同学应该注意了，作为程序员不知道自己程序的健康状况，对的起国家对得起党么？

### 代码框架

#### [Object.observe 的跨浏览器实现](https://github.com/Polymer/observe-js)

Polymer 提供的跨浏览器的 Object.observe 实现，能监听对象、数组、复杂对象等的变化，实现思路虽然很简单，但是确实很有用，如果你需要轻量级的数据绑定，这个应该是个不错的基础~

#### [手把手教你用 CSS 制作绶带](http://thecodeblock.com/ribbon-badge-pure-css-tutorial/)

用 CSS 也能写出很漂亮的绶带，这篇文章中作者分享了详细的制作步骤、用到的技术其实并不复杂，应该会让你找到点灵感~

### 找找灵感

#### [2048：程序员游戏 1024 的翻版](http://gabrielecirulli.github.io/2048/)

Itunes 上最近有个比较火的游戏叫 1024，规则很简单，移动格子，相邻且相同的格子会自动拼合，让你拿到更大的数字，1024 这个数字对程序员来说再熟悉不过了，没有爱疯的同学可以玩玩这个翻版过把瘾，哈哈~

### 精彩问答

#### [如何利用图片往 Google Analytics 发送数据？](https://github.com/igrigorik/ga-beacon)

Beacon 是最常用的从用户端上报统计数据的方式，可是 GA 默认只支持从 JS 发送数据，咋办呢？这个仓库提供了 1 个往 Google Analytics 发送数据的服务，可以让你很方便的利用 GA 统计邮件打开情况~

#### [如何在 VIM 中显示 CSS 颜色值？](https://github.com/ap/vim-css-color)

CSS 中的颜色值，纯粹的 RGB 颜色可能你能认得过来，但是看起来随机的 16 进制 到底是啥颜色，需要刷新浏览器才能知道？有了这个插件，在 VIM 中你边写代码就能实时预览颜色~
