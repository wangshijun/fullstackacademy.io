---
title: 前端周刊第10期
layout: page
path: "/weekly/issue-10/"
---

> 前端周刊第10期

### 文章教程

#### [Chrome中的Prerender详解](https://developers.google.com/chrome/whitepapers/prerender?csw=1)

Chrome从V13开始就支持1种新的网页提速方法：Prerender，开发者使用简单的标签就可以指使浏览器预加载某个页面，当用户真正点击的时候，瞬间就能打开，能极大的提高用户体验。那么什么场景下该使用Prerender？浏览器这边又有什么限制？随之而来的网页统计问题如何解决？

#### [Socket通信原理和实践](http://blog.csdn.net/dlutbrucezhang/article/details/8577810)

Socket通信原理和实践

#### [静态资源管理与模板框架](http://www.infoq.com/cn/articles/front-end-engineering-and-performance-optimization-part2)

从一个全新的视角来思考web性能优化与前端工程之间的关系，通过解读百度前端集成解决方案小组（F.I.S）在打造高性能前端架构并统一百度40多条前端产品线的过程中所经历的技术尝试，揭示前端性能优化在前端架构及开发工具设计层面的实现思路。

#### [Web缓存详解](http://www.mnot.net/cache_docs/)

缓存是用空间换时间的1中很有效的提高性能的办法，在日益发达的互联网中被运用到了没1个可能的角落，WEB的缓存都有哪些？如何控制这些缓存？具体的实现机制如何？

#### [用CSS实现的全文检索](http://redotheweb.com/2013/05/15/client-side-full-text-search-in-css.html)

看到这个我都惊呆了，仅仅使用data-*属性、CSS3的属性选择符和几行简单的js就能实现浏览器中的全文检索？极大的提高了应用的可用性，可能你也用得着~

#### [AppCache的工作原理](https://developer.mozilla.org/zh-CN/docs/HTML/Using_the_application_cache)

AppCache是HTML5提供的一种应用缓存机制，使得基于web的应用程序可以离线运行。开发者可以使用 Application Cache (AppCache) 接口设定浏览器缓存的数据并使得数据离线有效。在处于离线状态时，即使用户点击刷新按钮，应用也能正常加载与工作。

#### [关于新技术学习的10点建议](http://www.liyao.name/2013/05/10-tips-for-learning-a-new-technology.html)

我们生活在一个振奋人心的时代。我们可以越来越方便廉价地获得大量学习资源。这些资源的传播载体由最初的教室被变成了博客，技术论坛等。坐拥如此众多的学习资源，我们没有任何理由不去好好利用。随之而来的问题便是如何在这知识的海洋中选择自己的前进方向。希望这篇文章可以给你带来一些启发。

#### [WordPress中的Fragment Cache](http://css-tricks.com/wordpress-fragment-caching-revisited/)

Wordpress为个人站长提供了非常强大的建站功能，你只要看看手册就能随心所欲的拼出想要的网站模块，但当访问量上来了，你的烦恼就来了。如何优化Wordpress网站的性能，Fragment Cache可能是1剂良药~

### 精彩问答

#### [跨浏览器兼容的URL最大长度是多少？](http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers)

不同的浏览器对URL的长度有不同的限制么？HTTP协议中有相关的规范么？很多人做了不同的实验来验证这个问题，也有人引经据典，很不错的知识点~

#### [YUI的Combo能完胜浏览器缓存？](http://stackoverflow.com/questions/3075128/doesnt-yuis-loaders-combo-option-defeat-browser-caching)

使用YUI最为底层框架的同学可能都知道Combo的概念，Combo将1个页面中用到的多个模块打包发送给浏览器，但是如果不同页面需要的模块不完全相同，那些相同的模块就需要重新加载，这样就没法利用浏览器缓存了，两者相比性能到底有何差别？
