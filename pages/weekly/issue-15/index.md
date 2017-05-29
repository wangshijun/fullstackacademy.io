---
title: 前端周刊第15期
layout: page
path: "/weekly/issue-15/"
---

### 文章教程

#### [闲扯: 图片轮播 ( Carousels ) 是种有效的信息展示方式?](http://bradfrostweb.com/blog/post/carousels/)

图片轮播，也有同学叫做Carousels、Slider，在网上随处可见，并且作为前端工程师的你，可能已经自己开发了1个。虽然这个随处可见，但是关于他的有效性和交互细节还讨论甚少，轮播的适用场景有哪些？出于性能该做哪些优化？如何交互更好？

#### [package.json: npm包格式的交互式文档](http://package.json.nodejitsu.com/)

要定义1个npm的包，你需要1个package.json，这个文件究竟包含哪些字段？都是什么含义？这个交互式的文档值得收藏~

#### [探究: 浏览器的PreLoader如何为你的网页提速?](http://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/)

PreLoader可能是有史以来浏览器所做的最大改进，Google和Mozilla在实现这个功能时，发现PreLoader平均能为网页提速20%。这个并不是1个新Feature，很多同学可能以为只有Chrome有这个，到底PreLoader是如何工作的呢？

#### [使用r.js来优化你的RequireJS项目](http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project?utm_source=javascriptweekly&utm_medium=email)

如果你接触过AMD和RequireJS，并且在你的个人项目中开始适用RequireJS来加载代码，你可能有过这样的烦恼，开发时粒度越细越好，项目的Javascript模块越来越多，但是在生产环境网页动辄需要加载十数个模块，能不能做下优化？让生产环境的模块粒度粗点呢？r.js就是为干这个诞生的~

#### [imaging: 使用node在终端中绘图](https://github.com/switer/imaging?utm_source=nodeweekly&utm_medium=email)

让你用node在终端中绘图，并且还不用node-canvas，作者声称比picture-tube产出的图更清晰，虽然在实际产品中应用不会很多，不过拿来装逼还是不错的~

#### [经典: 衡量网页性能的最佳指标？](https://community.compuwareapm.com/community/display/PUB/Best+Practices+on+Web+Site+Performance+Optimization)

衡量1个网站性能的最好办法就是看那几个关键的性能指标，这些指标能告诉你网站到底有多快？那么这些指标都包括哪些？有什么依据？各指标孰轻孰重？如何综合的评价1个网站的性能？非常经典的文章~

### 代码框架

#### [30秒搞定node和npm的安装和配置](https://gist.github.com/isaacs/579814)

工作中免不了会有多个环境，前端工程师更少不了配置node和npm，每次都要重新下载、编译、配置？不感觉很麻烦么？不少同学在Github上列举了安装node和npm的方法，总有1个特别适合你的需求，无法sodu？用的是mac？都有对应的解决办法~

### 视频教程

#### [性能监控: 主动和被动该如何选择?](http://www.slideshare.net/jfox85/velocity-2013-rum-vs-synthetic)

开展性能工作肯定离不开监控，监控还分为主动监控和被动监控，被动监控指RUM（Real User Monitoring），也是很多同学正在努力的地方，来自Volecity 2013的演讲将两种方式进行了对比，并总结了实施时可能用到的各种工具，干货很多~

#### [思考: 今天的最佳性能实践明天可能成为鸡肋?](http://www.slideshare.net/AndyDavies/are-todays-good-practices-tomorrows-performance-antipatterns)

互联网瞬息万变，浏览器也在不断的进化，新的HTTP协议逐渐被采用，流量逐渐往移动端转义，前辈们总结了很多性能最佳实践，但这些在明天还会管用么？亦或是成为绊脚石？

### 精彩问答

#### [如何跟新手解释Javascript中的Bind、Call和Apply](https://variadic.me/posts/2013-10-22-bind-call-and-apply-in-javascript.html?utm_source=javascriptweekly&utm_medium=email)

如何跟新手解释Javascript中的Bind、Call和Apply？可能你觉得很明白这几个概念，但很可能你会欲言又止，因为找不到非常合适的语言~

#### [Chris Coyier: 前端工程师如何与时俱进?](https://speakerdeck.com/chriscoyier/how-to-stay-up-to-date-on-web-stuff)

时隔半年，Chris Coyier在前端工程师如何与时俱进方面有了新的领悟，很多干货。当然，搭车推荐前端周刊，嘿嘿~
