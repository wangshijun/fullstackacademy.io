---
title: 前端周刊第35期
layout: page
path: "/weekly/issue-35/"
---

### 文章教程

#### [基于 Angular 开发游戏 2048](http://www.ng-newsletter.com/posts/building-2048-in-angularjs.html)

这篇长文详细的讲解了如何基于 Angular 开发当下非常火的游戏 2048，内容非常的详实，如果你能坚持看完，可能会有不错的体会，对游戏的实现也会有自己的思路吧~

#### [助你排查 Node 程序内存泄露的工具](https://hacks.mozilla.org/2012/11/tracking-down-memory-leaks-in-node-js-a-node-js-holiday-season/)

有没有遇到过 Node 程序越跑越慢，仔细排查发现占用的内存已经接近默认的内存限制1.4G？这篇文章介绍了几个不错的工具用来排查 Node 程序的内存泄露问题~

#### [深入浅出 Node 应用的用户认证](http://scotch.io/series/easy-node-authentication)

通常的 WEB 应用都会有用户和认证授权的流程，并且随着互联网的发展，越来越多的服务开始使用OAuth登录，用 Node 编写的应用如何轻松的实现用户的登录和认证？这个系列的文章值得学习~

#### [我们需要什么样的错误监控系统？](http://blog.qbaka.com/post/81596992555/getting-maximum-from-javascript-error-tracking)

JS 错误监控可能是困扰很多工程师的问题，因为错误的噪音太多，如果打开邮件报警，你可能瞬间被错误淹没。那么，设计良好的 JS 错误监控系统应该是啥样的呢？出自 Qbaka 工程团队的文章，值得细细品味~

### 开发工具

#### [用 Grunt 来合并 Bower 依赖](https://github.com/sapegin/grunt-bower-concat)

Grunt Bower Concat 是1款帮你合并所有 Bower 依赖为1个文件的 Grunt 插件，在代码管理和性能上都能给你带来收益。

#### [样式规范生成工具的现状](http://welchcanavan.com/styleguide-roundup/)

随着团队和业务的发展，前端应该会积累起不少可重用的样式模块，如何将这些模块固化形成规范和文档？很多人做了尝试，并产出了不少工具，这篇文章对这些工具进行了整理，如果有1款能满足你的需要，那就不要重复造轮子啦~

### 代码框架

#### [Chosen 的 Angular 版本](https://github.com/localytics/angular-chosen)

前几期周刊中介绍了下拉增强插件 Chosen，以及为 Bootstrap 开发的主题，今天又找到了 Chosen 的 Angular 版本，如果你正在用 Angular 开发应用，那把这个收到工具箱，肯定会用上的~

#### [阿里巴巴矢量图标库](http://iconfont.cn/)

这里收录了大量阿里巴巴的矢量图标，可以说是目前最适合国内前端的电商图标库了，比起 FontAwesome 拥有更多本土化的元素~

#### [MeanJS：适合大型应用的代码组织方式](http://meanjs.org/docs.html#angularjs-modules)

MeanJS 是针对 MEAN 技术栈整理的种子项目，让我比较欣赏的是他的模块化组织方式，如果你的 Codebase 会变化很快，项目会变大，MeanJS 的代码组织方式非常值得借鉴~

### 视频教程

#### [Protractor：端到端测试框架入门](http://ramonvictor.github.io/protractor/slides/#/)

Protractor 是 Angular 团队负责维护的端到端测试框架，基于 WebDriver，但是做了很不错的封装，API 也非常简洁，很容易和 Jasmine 混合使用。这个讲稿算是 Protractor 的入门吧，感兴趣的可以看看~

### 精彩问答

#### [Git 文件重命名的大小写不敏感问题？](http://stackoverflow.com/questions/3921153/git-file-rename)

使用 Git 进行文件重命名时，默认是不区分大小写的，如果你指定了拼写相同，但是大小写不同的，Git 还会报错，如何让他大小写敏感呢？熟悉 Linux 的同学可能已经想到怎么做了~

#### [如何配置项目级别的代码格式？](http://davidwalsh.name/editor-config)

有强迫症的同学，可能在阅读非自己开发的代码时，会因为代码格式和自己的风格不同而非常痛苦，使用 EditorConfig 可以为不同的项目或者文件夹设置不同的代码格式，Vim、Sublime、Atom 都对它提供支持。

#### [JS 对象的结构和性能的关系？](http://ariya.ofilabs.com/2012/02/javascript-object-structure-speed-matters.html)

JS 对象的结构和程序的运行速度还有很大的关系，到底是什么原因呢？如何书写才能保证高效率？这篇短文为你解惑~
