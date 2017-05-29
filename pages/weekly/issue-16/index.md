---
title: 前端周刊第16期
layout: page
path: "/weekly/issue-16/"
---

### 文章教程

#### [设计: 如何设计更直观更贴心的过渡效果](http://uxdesign.smashingmagazine.com/2013/10/23/smart-transitions-in-user-experience-design/)

有些网站用起来就是那么舒心，除了界面的设计，还包括各种动画效果。乔布斯说：It’s not just what it looks like and feels like. Design is how it works. 作者在这篇文章总结了不少这方面的交互模式，相比而言哪些更有效，以及有效的原因，都很有说服力。文章末尾附的几篇文章也很值得阅读哦~

#### [使用AngularJS快速开发Chrome应用](http://www.ng-newsletter.com/posts/chrome-apps-on-angular.html?utm_source=javascriptweekly&utm_medium=email)

Chrome为开发者提供了用Javascript、CSS、HTML就能开发能够运行在浏览器中但是和本地应用相差无几的各种接口，但是从头开始写App可能还是需要花点时间的，有没有更快的办法？当然有，用AngularJS，1个简单的天气预报应用也是分分钟就搞定的事情~

#### [详解Javascript中的Event Loop](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)

Javascript虽然已经逐步走向Server端，但是其核心的异步机制还是没有发生改变，这种事件驱动的模型和传统语言如Java等的请求响应模型区别挺大，那么他内部是如何工作的？代码中的回调到底保存在什么地方？执行的顺序又如何？该什么时候执行？非常不错的解析~

#### [Grunt Boilerplate](http://www.integralist.co.uk/posts/grunt-boilerplate/)

对于还没有尝试过Grunt、或者刚开始用其管理任务的同学来说，这是个非常不错的教程，如何安装？如何配置？前端开发的常见任务：语法检查、CSS和JS压缩、SASS编译、替换、图片优化等等，都讲得很到位，感觉可以拿来作为1个新项目的模板。在SmashingMagazine上有个类似的文章，搜索Get Up And Running With Grunt就能找到~

### 开发工具

#### [前端工程师应该用的Alfred Workflow](https://github.com/zenorocha/alfred-workflows)

Mac中的Alfred确实是个非常强大的工具，作为前端工程师，有很多Workflow能让你的效率倍增，你甚至可以自己定制~

#### [grunt-uncss: 冗余CSS的清道夫](https://github.com/addyosmani/grunt-uncss)

使用了Bootstrap但是你的应用中只是使用了Bootstrap的很少1部分样式？想优化，但是人工识别和删除冗余的CSS貌似不是那么简单，Addy Osmani为你带来grunt-uncss，帮助你在项目的发布版本中去掉未使用的CSS，还未正式发布，但是实现思路非常值得借鉴，兴许你还能贡献代码哦~

### 代码框架

#### [Moment: 强大的日期处理库](https://github.com/moment/moment/)

在任何语言中日期和事件处理都是个很头疼的事情，Moment是能简化日期解析、验证、处理以及展示的Javascript开源代码，模块话的设计可能让你引用尽可能少得代码满足需要~

#### [trifleJS: 针对IE浏览器的PhantomJS](https://github.com/sdesalas/trifleJS)

用过PhantomJS么？那个可以用Javascript来编写前端集成测试的项目，但是它只支持Webkit内核的浏览器，trifleJS则大大的弥补了PhantomJS的不足，他针对IE内核的浏览器，并且API和PhantomJS完全相同。

### 视频教程

#### [Addy Osmani: 让你的工作流更加自动化](https://speakerdeck.com/addyosmani/automating-front-end-workflow)

开发1个现代的WEB应用需要考虑的事情还真多：需要使用各种框架和模板，管理各种依赖，还需要进行代码的预编译、压缩和优化，以及最终项目的打包上线，并且你需要做的事情还在不断的增多，如何从容应对变化，让你的开发更加自动化？Addy Osmani为你带来前端工作流中可以使用的各种工具，赶快武装起来吧~

#### [W3C Performance Working Group 的最新进展](http://www.youtube.com/watch?v=kG8tpe3IxGM)

在Velocity NY 2013上，Philippe Le Hegraret介绍了W3C Performance Working Group最新进展，NavigationTimingAPI，ResourceTiming都有新的Feature，拭目以待吧~

### 精彩问答

#### [用Javascript如何创建GUID/UUID?](http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript)

有些时候你可能需用Javascript创建UUID，可能你心中已经有很多解决办法，看看这个讨论里面的办法，思路应该会更开阔~

#### [如何实现Float Label Form Pattern?](http://webdesign.tutsplus.com/tutorials/ux-tutorials/implementing-the-float-label-form-pattern/)

在设计移动App的时候需要在窄小的屏幕上放1个表单？Matt Smith提出的Float Label Form Pattern很有用，这个一步一步的引导你如何实现类似的设计~
