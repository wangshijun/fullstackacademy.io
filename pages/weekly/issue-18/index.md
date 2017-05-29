---
title: 前端周刊第18期
layout: page
path: "/weekly/issue-18/"
---

> 前端周刊这周又添新功能啦！增加了按标签维度查看所有收录文章的功能，新同学通过标签云就能一目了然的看到前端周刊的内容聚焦在哪些方面，也能方便的查看某个主题下的内容，不再局限于按期刊查看的方式。欢迎大家提出反馈意见~

### 文章教程

#### [实现 CSS Overlay 的6种技巧](http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/?utm_source=CSS-Weekly&utm_campaign=Issue-85&utm_medium=email)

你的网页里面肯定会有弹窗，你有自己亲手实现过弹窗么？只知道用绝对定位的元素来实现？思路还是太狭窄，这里介绍了很多方法~

#### [几种非阻塞的脚本加载模式](http://www.lognormal.com/blog/2012/12/12/the-script-loader-pattern/)

脚本会阻塞浏览器的所有活动已经是不争的事实，如何加载脚本才能不阻塞呢？有很多种很不错的实现方式，灵感也来源各异，很不错的整理和分享~

#### [You Don't Know JS 开篇: 作用域和闭包](https://github.com/getify/You-Dont-Know-JS)

You Don't Know JS 是Kickstarter上面的1个众筹项目，目的在于详尽的剖析Javascript中那些你似懂非懂的内容，不管对于菜鸟还是老手都值得阅读，想阅读后续的章节？watch那个仓库即可~

#### [如何获取页面第1次渲染的时间？](http://www.lognormal.com/blog/2013/11/11/calculating-first-paint/)

对网页性能的关注应该是全流程端到端的，当用户拿到网页之后，首次渲染时间是1个非常重要的指标，IE10中有msFirstPaint，Chrome中有loadTimes，其他浏览器怎么办？有很多的trick，有人专门做了整理~

### 开发工具

#### [细说那些开源的监控项目](https://speakerdeck.com/obfuscurity/the-state-of-open-source-monitoring)

需要监控服务器的状态和负载？网页的加载速度？用户注册、下单、付款随时间的变化？如果有这些需求，相信你已经或多或少接触过开源的监控项目，比如Nagios，Graphite，Collectd等，他们各自相比有何异同？你该如何选择？

#### [grunt-githooks: 在git的hook中执行grunt任务](https://github.com/rhumaric/grunt-githooks)

帮你生成githook的grunt插件，虽然还未正式发布，不过值得尝试~

### 代码框架

#### [30行代码实现的网页版Excel](http://jsfiddle.net/ondras/hYfN3/)

用30行代码你能做出什么事情？有人写了1个网页版的Excel？不信快去瞧瞧~

### 视频教程

#### [Velocity Europe 2013: 网络性能相关](http://velocityconf.com/velocityeu2013/public/schedule/topic/1016)

上周末举行的Velocity Europe 2013上还是有很多干货的，来自Etsy、Google、Akamai等公司的工程师做了很多分享，这里是个集中贴，非常值得看看~

#### [Etsy: 使用多家CDN服务商的那些事](http://www.slideshare.net/marcusbarczak/integrating-multiple-cdn-providers-at-etsy)

Etsy已经成为美国流量非常大的1家电商网站，并且也使用了多个CDN服务商，在选择CDN服务商时如何部署？如何测试？看看他们在前进的路上都遇到了什么~

#### [High Performance Browser Networking](https://docs.google.com/presentation/d/1f2J_HrzMNvVHhsB3f7DKJFPl2N0Q_QR2ZEECWQu6oV8/present#slide=id.p19)

Ilya Grigorik在Velocity Europe 2013上的演讲，演讲标题就是他的新书标题：High Performance Browser Networking，内容上可以说是那本书的精华版，深度剖析各种网络的性能及其影响因素，以及你所能做的优化~

### 精彩问答

#### [为什么Javascript需要编程规范?](https://github.com/airbnb/javascript/issues/102#issuecomment-28157738)

在1个团队里编程，可能都会强调编程规范，但是为什么需要有编程规范？你能列出无数的理由。AirBnB在github上公开了自己的Javascript的编程规范之后，引来了无数围观，更有人重提上面那个问题，回答者语言风趣诙谐，肯定能说服你~

#### [如何利用console.table()进行调试](http://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable)

console.log可能是最常用的调试手段了，可是当打印1个数组或者对象的时候，还需要点击多次才能看到感兴趣的信息，有了console.table，打印出来的信息更直观，更容易阅读~
