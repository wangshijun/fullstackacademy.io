---
title: 前端周刊第27期
layout: page
path: "/weekly/issue-27/"
---

> 嘿嘿，2014年的首期前端周刊出炉啦，祝大家新春愉快，闲话不多说，下面是这段时间我找到的不错的东西，请享用~

### 文章教程

#### [Javascript the Right Way](http://jstherightway.org/)

这里集合了非常多很不错的JS资料，原创者都是这个领域的高手，内容涵盖编码风格、设计模式、框架、测试、工具等，虽然并是百分之百的正确，但是这些在业界都是不错的实践，非常适合新手和有些经验的同学学习~

#### [NPM Registry 新架构详解](http://blog.npmjs.org/post/75707294465/new-npm-registry-architecture?utm_source=nodeweekly&utm_medium=email)

关注IT新闻的童鞋应该还隐约记得去年NPM因为使用量太大，导致服务器支撑不住，遂跑到KickStarter上众筹，用于服务器扩容，据说募捐到不少钱，现在他们已经对NPM的架构进行了优化，这篇文章就是介绍这个架构的~

#### [使用Beacon的最佳性能实践](http://www.phpied.com/beacon-performance/)

从用户端收集数据通常都采用Beacon的方式，比如GA、New Relic等服务，有时候你会需要用到自己的Beacon，来上报有价值的信息，那么使用Beacon的时候有哪些好的实践？这里做了梳理~

#### [详解Angular Diretive 中的 Isolated Scope](http://umur.io/angularjs-directives-using-isolated-scope-with-attributes/)

Angular中的Directive非常抢到，与时下的Web Component有异曲同工之妙，而每个Directive默认是没有单独的Scope的，但是你可以在需要的时候让其开辟单独的Scope，并且可以从父Scope中传递数据，传递数据时涉及到几个符号：&、=、@，新同学对这个可能很晕，都是干啥的？啥时候该用？这篇文章就是答案~

#### [详解Node模块的几种Export模式](http://bites.goodeggs.com/posts/export-this/?utm_source=nodeweekly&utm_medium=email)

搞前端的同学或多或少写过几个Node模块，模块化的好处是细粒度、可控制。通常每个模块都会导出1些内容（数据、方法）供包含了这个模块的代码使用，那么常见的几种导出模式都是哪样的？适用于哪些场景呢？这里做了很详细的梳理~

### 开发工具

#### [DevDocs：高效查阅各种语言的文档](http://devdocs.io/)

DevDocs 是用Angular开发的可让你在1个地方查看各种语言文档的开源WebAPP，还在为找文档导出搜索，切换来切换去？可以试试这个，如果有精力，你还可以去贡献文档哦~

#### [DevTools 网络面板使用详解](https://developers.google.com/chrome-developer-tools/docs/network)

Chrome的DevTools相信所有同学都不陌生，但是你能给别人解释清楚里面的所有文字是什么含义，按钮的作用么？来自Google官方的文档，仔细浏览1遍，应该又能学到不少小技巧~

### 代码框架

#### [CSS3 PIE：让不支持CSS3的IE浏览器炫起来](http://css3pie.com/)

CSS3 PIE 能够让那些不支持CSS3属性的IE浏览器达到相同的显示效果，实现的原理和PNGFix比较类似，只需要引入1个文件，想让你的网页在所有浏览器表现如1？可以考虑下这个~

#### [Fuel UX：弥补Bootstrap不足的控件库](https://github.com/ExactTarget/fuelux)

Fuel UX 提供了很多Bootstrap不提供的网页控件，样式和Bootstrap保持了高度的一致，并且源代码模块化做的非常好，觉得Bootstrap提供的控件太少？这里可能就有你需要的~

### 视频教程

#### [Angular Conf 2014 视频集中贴](http://www.youtube.com/user/ngconfvideos)

Angular Conf 2014 年前已经结束，目前已经把相关的演讲视频放到Youtube上，里面还是有很多干货的，内容也涵盖了入门级、进阶等方方面面的话题，比如20分钟入门Angular、如何编写大规模Angular应用、深入浅出Angular Directive、Angular应用的性能优化等等，每个视频都比较短（15~20min），非常便于学习~

### 精彩问答

#### [哪些CSS属性可以实现动画？](http://www.sitepoint.com/css3-transition-properties/)

理论上来说，那些有具体的属性值，并且指定了开始值和结束值的CSS属性都可以进行动画，比如布局属性、定位属性、字号、颜色等。那么哪些CSS属性又不能实现动画呢？

#### [如何向Angular Directive中传递回调函数？](http://blog-it.hypoport.de/2013/11/06/passing-functions-to-angularjs-directives/)

如何向Angular Directive中传递回调函数？
