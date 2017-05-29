---
title: 前端周刊第37期
layout: page
path: "/weekly/issue-37/"
---

> 最近想换个工作环境的同学注意啦，美团网正在热招前端工程师，相信这边的技术氛围、薪资待遇都会让你满意的，感兴趣的请移步<a href="http://fe.meituan.com/jobs?source=feweekly">这里</a>查看我们的职位说明。

### 文章教程

#### [前端工程师如何与时俱进？](https://github.com/frontend-rescue/keep-up-to-date)

大约1年前，看了这个网站之后，我怀着与时俱进的目的开始运营前端周刊，并把内容分享给国内的前端开发者，现在再次推荐这个网站，如果你的英文能力很好，很推荐直接订阅这里列出的资源，当然啦，如果不是那么好，关注前端周刊就够了~

#### [全自动的阅读进度条实现思路](http://css-tricks.com/reading-position-indicator/)

最近发现不少网站武装上了“阅读进度条”这种贴心的交互，根据你当前滚动的位置，估算你已经阅读到哪个部分，在页面和用户阅读之间形成了看似不那么明显的反馈回路，这个进度条到底是如何实现的呢？这篇文章非常不错，从最小可用原型到兼容性、再到优雅降级，都考虑的非常全面~

#### [ngMessages 使用入门](http://www.yearofmoo.com/2014/05/how-to-use-ngmessages-in-angularjs.html)

Angular 1.3 版本中，新增了 ngMessage 指令，应用场景是表单验证时需要给用户的各种提示信息，之前可能你的表单验证信息都写在了 Controller 里面，有了 ngMessage，你的 Controller 就可以更简单，这篇文章详细的介绍了 ngMessage的几种用法~

#### [动手实现自己的 Source Map](http://www.phpied.com/diy-source-maps/)

任何1个现代的 WEB 项目在所有的源代码到达用户之前，肯定都会经过这样或者那样的变换或者预编译，这样就给在线调试带来了麻烦，因为没法看到真正的源代码。Source Map 的出现给这个问题带来了希望，这篇文章教你如何自己动手实现多个文件合并压缩的 Source Map，非常值得学习~

### 开发工具

#### [Z：让你的目录切换更加智能](https://github.com/rupa/z)

Z 是1个很小的 Bash 脚本，能让你的目录切换更加智能，更加迅速，使用更少的字符，因为 Z 会根据的切换历史，进行模糊匹配，然后找到匹配度最高的那个目录，光说不练还是没有说服力，按照提示安装下这个东东，很快你就会离不开它~

#### [Bashstrap：命令行中的 Bootstrap](https://github.com/barryclark/bashstrap)

如果你是个命令行爱好者，可能已经对自己的命令行进行了各种定制，包括 PS1，VIM，Git，Bashstrap 的原作者将这个项目比作是 Bash 领域的 Bootstrap，如果你很喜欢 Bootstrap，那么这个项目肯定很合你的胃口，对所有的配置文件都很方便扩展~

#### [Slush：Yeoman 的挑战者也出现了？](http://flippinawesome.org/2014/05/05/slush-a-better-web-app-scaffolding-tool/)

前面几期周刊中提到了 Task Runner 领域的黑马 Gulp 用更简洁的设计思想和 API 吸引了社区的注意力，经过几个月的发展，目前 Gulp 的插件数量已超过 600，基于 Grunt 的脚手架工具 Yeoman 现在也受到了挑战，Slush 的作者在这篇文章中列出了使用 Yeoman 的各种痛点，以及为什么要基于 Gulp 开发另外1个脚手架工具~

### 代码框架

#### [Ionicons：丰富 Ionic 项目的图标库](https://github.com/driftyco/ionicons)

Ionicons 是专门为移动开发框架 Ionic 提供的图标库，他于 Ionic 的关系，可以说是 FontAwesome 和 Bootstrap 的关系类似，如果你用 Ionic 开发过项目，但是发现内置的图标还是不够用，这就是个不错的补充~

#### [ngMin：让 Angular 代码更抗压](https://github.com/btford/ngmin)

用过 Angular 的的同学可能都知道他的 Dependency Injection 机制，全自动的依赖注入用起来是很爽，但是你的源代码就不那么抗压了，特别是启用了变量名混淆之后，你的依赖就全走样了，ngMin 就是来帮你解决这个问题的，在用 Grunt ？Gulp？都有对应的插件了~

### 视频教程

#### [Front End Ops Conf 2014 视频合集](https://www.youtube.com/user/frontendopsconf)

Front End Ops Conf 2014 早已闭幕，最近才在 Youtube 上放出了大会相关的视频，话说 Front End Ops 到底是啥？直译过来就是：前端运维工程师，跟全栈工程师有异曲同工之妙，不过这个更强调运维，关注与 WEB 项目运维过程中你所应该关心的各种问题，包括测试、性能等~

### 精彩问答

#### [如何让 Git 自动 Push 到多个远程仓库？](http://stackoverflow.com/questions/4255865/git-push-to-multiple-repositories-simultaneously)

有时候你的本地工作目录可能有多个远程仓库，Push 的时候需要同时推到这些远程该咋办？重复的执行 Push？如果你追求效率，就应该看看这个~

#### [如何优化 Angular 处理复杂数据时的性能问题？](http://tech.small-improvements.com/2013/09/10/angularjs-performance-with-large-lists/)

Angular 用来快速搭建应用原型式非常适合的，因为有 Data Binding、Dependency Injection，还有类似与 Web Components 的 Directives，可是当 Angular 遇到超长列表或者复杂的数据结构时，表现就不如人意，页面会变得很卡，有哪些办法来优化性能呢，这篇文章列出的都是实战总结出来的~
