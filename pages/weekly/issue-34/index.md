---
title: 前端周刊第34期
layout: page
path: "/weekly/issue-34/"
---

> 实在是抱歉，上周前端周刊运行的服务器重启了几次，导致邮件发送程序没有按期运行，所以第33期和第34期都在这周末发出来，请享用~

### 文章教程

#### [13步搞定 Angular 应用的模块化](http://blog.safaribooksonline.com/2014/03/27/13-step-guide-angularjs-modularization/)

Angular 虽然内部支持代码的模块化，但是具体的代码放到哪个文件、哪个目录还是取决于开发者，如果仅仅按照 Angular Seed 中的模式去组织文件，很快你就会发现项目膨胀的不像样了，如何把 Angular 应用的模块化做绝？看看这个13步法，趁现在~

#### [JS 中异步执行模式梳理](http://bredele.github.io/async/)

这篇文章梳理了 JS 中几种常用的异步执行模式，包括 Node 中的 EventEmitter，浏览器端的 PubSub，以及前后端通用的 Promise，如果你觉得 JS 中的回调让你非常的不爽，这些方法应该能让你清爽下来~

#### [新书《深入理解 ES6》已发布](https://leanpub.com/understandinges6/read/)

之前提到过 Zakas 计划将新书 深入理解 ES6 开源，目前已经把第1章放在 LeanPub 上供大家学习研读。

#### [淘宝：基于 Node 的全栈式开发](http://ued.taobao.org/blog/2014/04/%e4%b9%9f%e8%b0%88%e5%9f%ba%e4%ba%8enodejs%e7%9a%84%e5%85%a8%e6%a0%88%e5%bc%8f%e5%bc%80%e5%8f%91%ef%bc%88%e5%9f%ba%e4%ba%8enodejs%e7%9a%84%e5%89%8d%e7%ab%af%e5%90%8e%e7%ab%af%e5%88%86%e7%a6%bb/)

越来越多的科技公司开始拥抱 Node，异步机制让 Node 非常适合做服务层和前端应用的中间层，也非常有利于前后端的分离，淘宝的同学在这方面做了很多思考和不错的探索，如果你公司的业务在慢慢变大，这篇文章不容错过~

#### [FlexBox 和表格布局性能对比测试](http://benfrain.com/css-performance-test-flexbox-v-css-table-fight/)

这位同学仅仅就使用 Flexbox 和表格布局两种方式进行了性能对比测试，测试的方法页比较简单，结果呢，有点让人忧伤，利用表格布局在它测试的各个浏览器中都比 Flexbox 快些。当然，如果你不愿意接受这个现实，该用 Flexbox 的还是用 Flexbox。

### 开发工具

#### [Grunt Throttle：用 Grunt 模拟低速网络](https://github.com/tjgq/grunt-throttle)

Grunt Throttle 就是1个节流阀，帮你轻松实现低速网络的模拟测试，让你对应用在最糟情况下的速度表现有个理性的认识，实现原理不是很复杂，感兴趣的可以去看看源代码~

#### [Reveal.js：快速创建 HTML5 演示稿](https://github.com/slara/generator-reveal)

专门为 Yeoman 开发的 Reveal.js 演示稿初始化工具，能帮你快速搞定基于 Reveal.js 的演示文稿所需要的各种依赖，并且有很不错的组织结构，支持 Markdown，自定义样式等~

### 代码框架

#### [Chosen 的 Bootstrap 版本](https://github.com/alxlit/bootstrap-chosen/blob/master/bootstrap-chosen.scss)

有同学专门针对 Bootstrap 对下拉列表增强插件 Chosen 做了增强，不再让你的界面有割裂感~

#### [AngularHotkeys.js 类 Alfred 的快捷键](http://chieffancypants.github.io/angular-hotkeys/)

之前介绍过 Angular Palette 能让你的应用具备 Sublime 那样的命令面板，AngularHotkeys 更酷，让你的应用具备 Alfred 那样的快捷键面板，废话不多说了，感兴趣的，想装逼的拿去用吧~

#### [命令行图表：CLI Chart](https://github.com/andrewjstone/cli-chart/tree/master/test)

用 Node 在命令行也能画出美观的直方图？还记得你刚学 C 语言的时候，废了九牛二虎之力在终端里面画出来的图形么？

### 找找灵感

#### [Project Hub：项目进展时间轴](https://github.com/danielmall/project-hub)

厌倦了编写冗长的项目周报？Project Hub 能向你的客户很直观的展示项目进展，以及未来的规划，虽然还是和很糙的版本，但是对你来说应该是个不错的起点，设计上非常简洁~

### 精彩问答

#### [如何用 Dev Tools 调试异步代码？](http://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)

异步可以说是 JS 非常重要的语言特性，可以让你很容易的书写代码，但是调试异步代码却非常困难，因为你没办法查看出错代码的调用栈，Chrome Canary 在这方面做了改进，通过调试工具清晰的看到异步代码的执行过程~
