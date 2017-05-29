---
title: 前端周刊第40期
layout: page
path: "/weekly/issue-40/"
---

> 从本周开始，前端周刊的更新将恢复正常，每周五下午发出来，欢迎监督督促，对于内容有任何建议，请直接邮件联系我~

### 文章教程

#### [号外：ES6 模块语法已定稿](http://www.2ality.com/2014/09/es6-modules-final.html)

ES6 模块语法已定稿，和之前所看到的语法没有太大的变动，如果还没有了解的同学可以看看，毕竟，你要知道你所用的技术演化的方向~

#### [使用 SASS 管理 zIndex 的最佳方案](http://www.sitepoint.com/better-solution-managing-z-index-sass/)

最近关于如何使用 SASS 管理 zIndex 的讨论和方案不少，这篇文章介绍了1种综合了各种方案，又考虑到未来可维护性的改进版，自诩为更好的，具体好不好，你来决定~

#### [论 CSS 代码审查：潜在的金矿](http://alistapart.com/article/css-audits-taking-stock-of-your-code)

不管你承认不承认，可能现状就是这样：随着功能的不断添加，团队的不断扩张，你的 CSS 代码越来越多，很少有人去问津那些不再使用的样式，如果使用了 SASS，那么编译后的 CSS 到底如何，你关心过么？其实 CSS 的代码审查还是非常有价值的，不然会有人靠给别人提供优化建议吃饭？文章里面列出来的好处可能你都能想到，那些小工具和思路还是很有借鉴意义的~

#### [PAAS：来自金融时报的 Polyfill 即服务](http://labs.ft.com/2014/09/polyfills-as-a-service/)

Polyfill 就是用简单的代码片段为提供那些开发者们希望浏览器原生提供支持的功能，相信很多人都做过类似的事情，比如让浏览器支持 ES5 里面的新方法，FT 的前端团队推出了自己的 Polyfill 服务，根据你的浏览器 UA 来按需的返回当前这个浏览器所需要的代码片段，可以指定特性，也可以自定义浏览器，很好奇？去官网看看~

#### [tabIndex 的那些事儿](http://www.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)

tab-index 属性能够决定元素是否能够被 tab 键选中，以及 tab 键过程中被选中的顺序，合理的使用 tab-index 能够极大的提高应用的易用性，到底如何使用？设置为 0 会有什么效果？设置为 -1 会有什么效果？看看这篇文章，你就懂了~

#### [GitHub前端工具整理汇总](http://blog.jobbole.com/34860/)

有同学整理了 GitHub 前端工具列表，虽然不够全面，但是涵盖了大部分，可以看看典型的 WEB 应用用到的技术他们都是如何解决的~

### 开发工具

#### [轻松管理 Node 应用的配置](https://github.com/lorenwest/node-config)

node-config 是为你提供轻量、简单、灵活但强大的配置管理机制，能够根据不同的运行环境、配置参数、运行主机名等自动合并所需的配置，并且支持 JS、YAML、JSON 等数据格式，如果你还在为应用的配置管理发愁，推荐研究下这个，非常实用~

#### [Git Pretty：有洁癖或强迫症的同学专用](http://justinhileman.info/article/git-pretty/full/)

虽然你是个非常靠谱的工程师，偶尔还是会不小心把你的 Git 工作目录弄的乱糟糟，这会让有洁癖或者强迫症的同学抓狂，如何才能让他们变得整洁，这张图里面总结了非常不错的工作流，如何优雅的撤销操作，修改提交，值得细看~

#### [FakeSMTP：再也不用为邮件测试发愁](https://github.com/Nilhcem/FakeSMTP)

应用中出现需要给用户发邮件的功能，怎么测试？真的给用户发邮件？流程太长好麻烦啊，如果仅仅是为了测试流程，那么可以用 FakeSMTP，带界面的邮件收发测试服务器，实用起来非常简单~

### 代码框架

#### [汉字拼音转换工具](https://github.com/hotoo/pinyin)

转换中文字符为拼音，可以用于汉字注音、排序、检索，支持多音字和繁体，能在 Node 和 Web 浏览器环境运行，其他的就不多废话了，感觉能用上的收藏吧~

#### [从 Angular 到 React：同构应用技术选型](http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/)

Angular 中的 Router 和 DataBinding 等特性让开发者很容易构建应用，但是遇到搜索引擎优化，就显得力不从心了，前后端同构应用简单说就是能同时在服务端和浏览器端运行的应用，能够很好的解决搜索引擎优化的问题，即使用户那端不支持浏览器，也能看到页面，就是作为走在技术前沿的那群人，如果要用 JS 技术栈编写同构应用，如何进行技术选型？内容涉及：Koa、Angular、React

### 视频教程

#### [Velocity Conference 2014 纽约场视频合集](https://www.youtube.com/playlist?list=PL055Epbe6d5YDU6sikjqcd_YM9XT4OehD)

Velocity Conference 是全球性的性能与运维大会，纽约场本月 15 到 17号，持续三天业已闭幕，目前视频已经被放到 Youtube 上， 干货不少，想看的同学速去~
