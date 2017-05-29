---
title: 前端周刊第20期
layout: page
path: "/weekly/issue-20/"
---

### 文章教程

#### [用pointer-events实现60FPS的高性能滚动](http://www.thecssninja.com/javascript/pointer-events-60fps)

可能你没有觉察到，如果给页面上很多元素添加了hover样式，滚动页面的时候，这些元素会不断的被重绘，这样会加重浏览器的负担，从而可能让页面变的很卡，而实际上用户的滚动动作持续时间很短，有没有办法优化下呢？答案是肯定的，文中有人提出用pointer-events来实现，基本能解决问题，但是别忘了看文后评论哦。

#### [详解Chrome Dev Tools中的最新变化](http://www.html5rocks.com/en/tutorials/developertools/novdigest/)

Chrome依然保持了快速迭代的风格，近期又给Chrome Dev Tools做了不少优化，比如UI的改进、Workspace的新功能，如果想把这个工具用的顺手，非常值得1看~

#### [详解Angular中的Directive](http://www.ng-newsletter.com/posts/directives.html)

Angular把所有的DOM操作都封装到Directive中了，ngController和ngApp本质上都是Directive。从理念上来讲，操作DOM的代码是不能出现在Controller中的，那么如何把Directive和DOM关联起来？如何创建自己的Directive？很不错的文章~

#### [Walmart Mobile 的 Node 架构](https://gist.github.com/hueniverse/7686452)

如果你留意科技新闻，可能已经发现越来越多的公司正在把1些应用迁移到Node上面，Walmart几个月前已经这样做了，并且公开了他们的一些架构设计，以及路上遇到的问题~

### 开发工具

#### [Dropbox Uploader：通过命令行备份文件](https://github.com/andreafabrizi/Dropbox-Uploader)

如果你是Dropbox的重度使用者，这个不容错过，只需简单的配置，就能通过命令行管理Dropbox中的文件，代码是开源的，应该不用担心安全问题。对于定期远程备份的需求还是非常有用的~

#### [NPMD: 让你更快的安装NPM包](https://github.com/dominictarr/npmd?utm_source=nodeweekly&utm_medium=email)

由于用户太多，NPM不堪重负在网上发起众筹了，你捐钱了么？没有的话可以试试这个，分布式的NPM客户端，把所有的元数据和索引同步到本地，安装更快，也能能帮助减轻NPM服务器的压力。

#### [AngularJS + Express 项目种子代码生成器](https://github.com/DaftMonk/generator-angular-fullstack#service)

想基于Angular、Express、Bootstrap、Mongodb快速的开始1个项目？有这个Yeoman Generator你就有个非常不错的开始，除了生成初始代码之外，还提供了非常贴心的Grunt配置，比如LiveReload、Concurrent等。

### 代码框架

#### [Angular UI Bootstrap：Bootstrap插件的Directive版本](https://github.com/angular-ui/bootstrap)

项目中同时使用了Angular和Bootstrap？却又发现Bootstrap的风格，即jQuery的风格和Angular差别太大，已经有同学对Bootstrap中的组件移植到了Angular上，只需添加1个Class或者属性，何乐不为呢？

#### [ShellJS：为Node程序加上 Unix 常用的 Shell 命令](https://github.com/arturadib/shelljs)

ShellJS 提供了对常见的 Unix 命令做了跨平台的封装，有了这个，你可以把 Node  当Shell 用了~

### 精彩问答

#### [Git：如何列出1次提交中的所有文件？](http://stackoverflow.com/questions/424071/list-all-the-files-for-a-commit-in-git)

如何列出1次提交中的所有文件？对于统计代码贡献量或者看看哪些文件发生变化了是非常有用的~

#### [Angular中Service、Factory、Provider的区别？](https://gist.github.com/Mithrandir0x/3639232)

接触过Angular的同学可能都碰到过这几个名词，官方的文档中并没有说明什么时候该用Service，什么时候该用Factory，他们和Provider又有什么关系？看看这个文章，你能了解个大概~
