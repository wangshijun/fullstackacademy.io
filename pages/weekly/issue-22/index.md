---
title: 前端周刊第22期
layout: page
path: "/weekly/issue-22/"
---

### 文章教程

#### [开始使用Javascript Source Maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

Javascript Source Maps能够让你在线上调试代码时还能看到代码压缩前的样子，他是怎么做到的？需要浏览器做什么设置？来自HTML5Rocks的文章~

#### [写给那些觉得Grunt没啥用的同学](http://24ways.org/2013/grunt-is-not-weird-and-hard/?utm_source=javascriptweekly&utm_medium=email)

Grunt的宗旨在于帮你把重复的任务自动化，不光大量的前端同学在用，很多后端同学也还是拥抱这个工具了，设计师也能用？没搞错吧，这篇文章写给那些觉得Grunt没啥用或者跟他们工作不沾边儿的同学~

#### [堆叠上下文及zIndex 深度解析](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/what-you-may-not-know-about-the-z-index-property/)

堆叠上下文在CSS中是个很重要的概念，zIndex也是个看起来简单实际却包含了很多规则的属性，堆叠上下文是啥东西？zIndex到底如何工作？很不错的文章~

#### [5大Node程序自动重启工具比较](http://strongloop.com/strongblog/comparison-tools-to-automate-restarting-node-js-server-after-code-changes-forever-nodemon-nodesupervisor-nodedev/)

对于刚接触Node的同学来说，起了Server，代码修改之后，你需要重复的手动重启服务器，时间久了你会觉得好麻烦啊，有没有工具自动化这个事情？答案是确定的，并且还有很多这样的工具，有些还适合用在生产环境，这个横向比较还是很值得1看的~

### 开发工具

#### [Grunt-Styleguide: 让样式规范更新自动化](https://github.com/indieisaconcept/grunt-styleguide?utm_source=CSS-Weekly&utm_campaign=Issue-89&utm_medium=email)

团队作业的时候，可能都会慢慢产生StyleGuide，这些规范应该来自于活的代码，比如用Styledocco从CSS源文件中生成，Grunt-Styleguide是这样1款插件，能够帮你把这部分工作自动化了，支持主流的CSS文档生成工具~

#### [Browser-Sync: 在不同设备之间同步各种动作](http://addyosmani.com/blog/browser-sync/)

Browser-Sync能够帮你在不同设备上同步各种测试动作，包括鼠标点击、滚动、表单填写、DOM变化，貌似能解放不少需要跨设备跨平台开发测试的同学~

### 代码框架

#### [Heatmap.js: 轻松绘制热度图](https://github.com/pa7/heatmap.js)

热度图能很直观的把数据投射到地图或者其他底图上，让你清楚的了解到数据的分布趋势，有了Heatmap.js绘制热度图则变得非常容易，支持动态数据，地图展示~

#### [Headroom.js: 让你的页头更加智能](http://wicky.nillia.ms/headroom.js/?utm_source=javascriptweekly&utm_medium=email)

用过Bootstrap的同学都应该熟悉其中固定在顶部的导航栏，屏幕空间本来有限，当用户往下滚动页面的时候，是不是应该隐藏掉这个呢？可惜Bootstrap没有提供这个功能，Headroom.js能帮你解决这个问题，让页头随叫随到~

### 视频教程

#### [Chrome Dev Summit 2013 精彩回放](http://zenorocha.com/chrome-dev-summit-2013/)

Chrome Dev Summit 2013 上有些很不错的内容，这篇文章精选几个，内容涵盖WebComponent，DevTools，可用性，移动设备，可以挑感兴趣的看看~

### 精彩问答

#### [如何移除JS源码中的调试代码？](http://www.elijahmanor.com/grunt-away-those-pesky-console-log-statements/?utm_source=javascriptweekly&utm_medium=email)

开发过程中为了调试，可能不时的加上几条console.log，可是这种调试代码是不应该出现在生产代码中的，如何移除这些东西呢？手工删除？SED？Grunt？封装？方法有不少，每种方法都有优缺点，很不错的梳理~

#### [如何在JS中检测类型？](http://javascript.info/tutorial/type-detection#class-to-differ-between-native-objects)

JS中如何进行对象的类型检测？操作符有typeof，instanceof，不同的值返回结果都是啥？很不错的列举~

#### [如何在多个项目间共享Grunt配置?](http://thenittygritty.co/shared-grunt-configuration)

熟悉了Grunt的同学会觉得用起来真顺手，可是当你维护的项目多了，麻烦又来了，多个项目的Grunt配置大同小异，需要频繁的复制来粘贴去，如何在多个项目之间共享Grunt配置？有洁癖的懒人必看~
