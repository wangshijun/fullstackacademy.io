---
title: 前端周刊第30期
layout: page
path: "/weekly/issue-30/"
---

> 前端周刊第30期新鲜出炉啦，回头想想，从去年7月份到现在，能坚持下来真是不容易，感谢前进路上大家的支持，如果觉得这里的内容不错，也请推荐给你的同事、好基友，能让前端周刊造福更多的人~

### 文章教程

#### [真正理解 JS 中的 Delete](http://perfectionkills.com/understanding-delete/)

相信很多同学或多或少用过 JS 中的 Delete，可是你真的理解 Delete 的工作原理么？如果不是真的理解，使用时代码的困惑可能比方便更多：到底什么内容可以被删除？被删除的内容在底层是如何处理的？浏览器的支持又有什么差异？友情提示：这篇文章设计了不少 JS 的基础知识，如果想进阶，很值得精读~

#### [ECMAScript 6 新特性抢先看](https://github.com/lukehoban/es6features?utm_source=javascriptweekly&utm_medium=email)

ECMAScript 6 是啥就不用说啦，据说会在今年底最终定稿，这也是继 2009 年以来对 JS的第1次重大更新，目前已经有很多厂商开始在自己的产品中提供部分或全部 ES6 特性的支持，这里对这些能让你写更少、更清晰、更健壮代码的新特征进行了梳理和 DEMO，比如 Class、Generator、Template String等，有些现在就可以用了哦~

#### [BEM：见名知意的 CSS 命名规则](http://webdesign.tutsplus.com/articles/an-introduction-to-the-bem-methodology--cms-19403)

相信所有的程序员都希望自己的代码可读性高，因为这样维护交接的成本就不会太高，在 CSS 领域，已经产生诸如 OOCSS、SMACSS、BEM 等方法论帮你达到目的，这篇文章介绍了 BEM 这种选择符命名规则和思考方式，SASS 的最新版本甚至对 BEM 做了内置的支持，还不熟悉的同学可以仔细看看了~

#### [开始使用 Sass 的流程控制语法](http://flippinawesome.org/2014/03/03/getting-into-sass-control-directives/)

SASS 中的 Mixin 和 Extend  已经能够为编写 CSS 带来了非常大的遍历，更为逆天的是新版本的 SASS 中又加入了 @if, @for, @each 和 @while 这些流程控制语法，让 CSS 编写更轻松，不得不感叹，这个现在真的进化成1门编程语言了~

#### [主流 JS Promise 库横向对比 ](http://complexitymaze.com/2014/03/03/javascript-promises-a-comparison-of-libraries/)

使用 Promise 的收益在之前的周刊中介绍了不少，这里对主流的 JS Promise 库进行了对比，包括对各种特性的支持程度、代码大小、性能等方面，如果你觉得自己对 Promise 已经使用的很好了，看看 特征支持程度那块，所有的特征都知道么？

### 开发工具

#### [可用于性能优化的 Grunt、Gulp 列表](http://yeoman.io/blog/performance-optimization.html)

这篇文章中，Yeoman 的作者对常用的可用于性能优化的 Grunt、Gulp 插件进行了梳理、分类和评价，内容不仅仅涵盖你常用的文件合并、压缩，还包含响应式图片、SVG优化、FontIcon、WebP、内联样式、样式清理、CDN化，还有不少帮你做性能评估的插件，比如基于 WebPageTest、PageSpeed Insight 的。

#### [5 个提升逼格的 Chrome 调试技巧](http://berzniz.com/post/78260747646/5-javascript-debugging-tips-youll-start-using-today)

如何在代码中设置断点？如何设定特定的 Ajax 请求发起时的断点？如何设置 DOM 发生变化时的断点？如何在最新版 Chrome 中模拟各种移动设备？如果这些你都会，就不用看这篇文章啦~

### 代码框架

#### [Duplicator：流量转发复制利器](https://github.com/agnoster/duplicator)

Duplicator 是利用 Node 开发的类似于 TCPCopy 的流量转发和复制利器，如果你想把线上环境的流量导入到测试环境进行冒烟测试、压力测试等，就可以使用它，相对 TCPCopy 而言，这个更偏向应用层，不需要你懂太多的 Linux 底层知识，更好的是 Duplicator 还支持编程，因为它本身就是个 NPM 包~

#### [Fuse.js：轻量级的客户端模糊搜索](http://kiro.me/projects/fuse.html)

如果你需要非常轻量级的在浏览器中就能实现的搜索、甚至支持模糊查找，Fuse.js 应该非常适合你，抛开所有的服务端搜索逻辑，在浏览器端就能实现，小数据集上的测试速度也非常快，可能有同学会问，这个会支持大数据集么？比如200000？如果你的网页需要展示这么多条数据，那么你应该考虑考虑你这样做是否合适了，而不应该抱怨 Fuse.js 的性能，原因你懂得~

#### [InstantClick：带给你比秒开更快的体验](http://instantclick.io/3.0.html)

InstantClick 能够在用户 Hover 都网页中的链接时，对链接指向的内容进行预加载，而当点击发生时，预加载的内容瞬间就会呈现出来，让网站的感知速度大幅度提高，同时支持 PC 和移动端浏览器。

### 精彩问答

#### [如何让 Grunt 配置文件模块化加载？](https://github.com/firstandthird/load-grunt-config)

项目维护的时间越长，里面的任务配置会越来越多，打开和查找都会有些不便，特别偏爱小模块的我就找到了这个，支持 Grunt 配置文件的模块化，比如Uglify，CSSMin、ImageMin都可以单独配置，有代码洁癖的同学快收了吧~

#### [如何引用尚未发布的 Bower 模块？](https://oncletom.io/2013/live-development-bower-component/)

Bower 提供了模块化的前端资源管理，如果你正在开发1个 Bower 模块，又想在另外1个项目中测试这个模块的功能，该怎么办呢？使用 Link 命令，这篇文章就是例子~
