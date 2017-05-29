---
title: 前端周刊第38期
layout: page
path: "/weekly/issue-38/"
---

> 嘿嘿，我们一如既往的期待更多优秀的前端同学加入，美团网正在热招前端工程师、高级工程师、数据工程师，这边有非常不错的技术氛围，感兴趣的请猛戳<a href="http://fe.meituan.com/jobs?utm_source=feweekly&utm_campaign=issue38&utm_medium=email">这里</a>。下面是这段时间精选的内容，请享用~ 

### 文章教程

#### [Browserify 使用手册](https://github.com/substack/browserify-handbook)

Browserify 可以帮你把数以百万计的 NPM 模块带到浏览器中，代码的写法更接近 CMD，这篇长文涵盖了使用 Browserify 的方方面面，如何合并文件？如何实时编译？如何改变 NPM 包在不同环境的行为？如果你正在使用 Browserify，不容错过~

#### [自更新JS脚本的实现机制](http://www.stevesouders.com/blog/2012/05/22/self-updating-scripts/)

对于1个针对WEB产品的统计系统，肯定需要分发给用户1个统计脚本，为了充分利用浏览器缓存减轻源站压力我们通常会把这个脚本放到 CDN 上，设置比较长的过期时间，那么这个脚本更新了怎么办？通知所有用户更新版本号？貌似不太现实，如何实现自我更新的统计脚本？非常巧妙的办法~

#### [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

这篇文章介绍了 REST API 设计的各个方面，包括域名选取、版本号、HTTP 动词等，快速的过1下，涨点知识~

#### [Front Trends 2014 大会印象](http://codetunes.com/2014/front-trends-2014-impressions/)

Front Trends 2014 是波兰的前端开发者盛会，这篇文章出自参会者之手，介绍了几个让他印象深刻的演讲，以及关于这次盛会的其他方面，对所有讲稿和视频感兴趣的同学可以去搜索相关的 Gist

#### [深入浅出 Promise 之基础篇](http://shangchun.net/promise-insight.html)

随着浏览器端异步操作的复杂程度日益增加，以及以 Evented I/O 为核心思想的 NodeJS 的火爆，Promise、Async 等异步操作封装由于解决了异步编程上面临的诸多挑战，得到了飞速发展。本文深入浅出的剖析 Promise 的内部机制，让你达到“知其然且知其所以然”，在使用 Promise 上更加熟练自如。文后引用的几篇文章也非常值得研读~

### 开发工具

#### [像调试网页那样调试 Node 程序](https://github.com/c4milo/node-webkit-agent)

JS 的调试始终是个让人头疼的问题，尤其是 Node 程序，有了 Node Webkit Agent，你就可以像调试网页那样来调试，目前支持 CPU 和内存快照对比分析，更多的分析功能还在不断加入中~

#### [使用 Chrome 进行内存调试](https://developer.chrome.com/devtools/docs/javascript-memory-profiling)

用 Chrome 的开发者工具做过网页的内存调试么？堆快照到底是啥样的？里面的各种视图都是啥意思？来自 Google 官方的干货~

#### [那些我早该学会的 Chrome 技巧](http://www.reddit.com/r/javascript/comments/268lai/a_chrome_console_trick_i_wish_id_found_a_while_ago/)

如何在 Console 中拿到刚刚审查过的那个元素？想查找元素有类似于 jQuery 的方法么？如何快速清除 Console 中的内容？不知道你使用 Chrome DevTools 的时候有没有想过这些问题，这篇文章列出的几个技巧真的能 Make Your Life Easier~

### 代码框架

#### [Sharp：迄今为止最快的图片处理库](https://github.com/lovell/sharp)

Sharp 是基于 libvips 并支持多种图片格式（PNG，JPEG，WEBP）的图片压缩、处理、变换的 Node 库，通过性能对比测试，标称自己是迄今为止最快的图片处理库，这玩意儿有啥用？如果你的网站图片很多，同1张图片的尺寸也很多，用这个东西在 CDN 后面构建1个实时的图片压缩服务还是很不错的选择~

#### [Helmet：给你的 Express 应用带上安全套](https://github.com/evilpacket/helmet)

越来越多的应用基于 Connect 或 Express 开发，安全问题自然需要引起重视，Helmet 提供了 Express 应用应对常见安全问题多个中间件，比如内容安全策略、XSS、缓存控制、服务器签名、跨域等等~

### 精彩问答

#### [学习 Node 的最好资源有哪些？](http://www.quora.com/Node-js/What-are-the-best-resources-to-learn-Node-js)

越来越多的公司开始或者正准备往大前端的方向迁移，前端工程师需要负责1部分的后端工作，你需要学好 Node 才能担得了重责，Quora 上的这个问题有很多非常精彩的答案，带你走进 Node 的世界~

#### [Stack Overflow 挂掉之后该咋办？](http://mir.aculo.us/2014/05/16/what-to-do-when-stack-overflow-is-down/)

相信很多同学对 Stack Overflow 并不陌生，可能有不少人还是重度依赖者，因为最近又出现了 SDD 这个名词，即 Stack Overflow Driven Development，如果 Stack Overflow 挂掉之后我们该咋办？很有意思的思考~
