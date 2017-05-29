---
title: 前端周刊第39期
layout: page
path: "/weekly/issue-39/"
---

> 说起来实在是惭愧，前端周刊停刊了接近2个月，家里和工作上的事情太多，没有足够的精力保障每期周刊中内容的数量和质量，最近才渐渐理清手头的事情，趁周末整理了工作和学习过程中遇到的精彩内容，请享用~

### 文章教程

#### [GoSquared：重构统计平台所做的5项设计决策](https://medium.com/@jamesjgill/5-design-problems-we-solved-building-the-new-gosquared-66869f246d4a)

GoSquared 是米国 1 家提供网站流量监控以及电子商务转化率监控的服务商，算是非常典型的监控平台，为了打造成有人都愿意使用的产品，他们在设计上面临不小的挑战：如何排列导航栏？如何跨平台？如何让用户更容易上手？如何让高级功能的出现自然而然？相信他们所做的考量对你也有些借鉴意义~

#### [请不要污染全局作用域：真的！](http://ardalis.com/ensure-you-are-not-adding-to-global-scope-in-javascript)

刚开始学习 JS 的同学，随时随地可添加的变量用起来非常的爽，但是后来可能会发现，没有精心组织的代码是那么的脆弱：引入别人的代码或库几乎不可能，因为你们的变量可能重名？互相覆盖，这就引申出非常重要的编程原则：不要随意污染全局作用域，为什么这样不好？怎么从技术上避免？

#### [让你的代码支持 AMD 和 CMD 模块并不难](http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/)

AMD 和 CMD 是两种不太相同的 JS 模块化规范，自诞生日起，围绕 2 这的讨论就从来没有断过，到底哪种规范好？其实对于普通开发者来说，两者并不是非黑即白的关系，并且让你的代码同时支持 AMD 和 CMD 模块并不是那么困难，这篇文章就介绍了 1 种办法~

### 开发工具

#### [PrettyError：让 Node 错误更性感易读](https://github.com/AriaMinaei/pretty-error)

有没有觉得 Node 默认打印出来的错误消息难以阅读？不少同学有这个痛点，并且有人做了 PrettyError 来解决这个问题，用非常便于阅读的格式打印出来 Node 程序的错误调用栈，嵌入的方式比较灵活，即支持手动调用打印，也支持全局替换~

#### [有哪些工具可帮你分析 Node 程序 core 输出？](http://stackoverflow.com/questions/8704331/tools-to-analyze-core-dump-from-node-js)

这里列出了几个可以助你分析 Node 程序 core 输出的文章和工具，如果你有线上服务是 Node 写的，这个早晚用得上~

#### [tracking.js：基于现代浏览器的计算机视觉库](http://trackingjs.com/)

tracking.js 把各种计算机视觉算法和模型引入到了现代浏览器中，它可以帮你快速搭建起需要诸如人脸识别、颜色识别、运动物体追踪等特性的产品原型，官网还提供了大量的实例共参考~

### 代码框架

#### [Humanize：让你的数据更有可读性](https://github.com/taijinlee/humanize)

如何将页面中呈现的数据格式化成更利于用户阅读对那些希望打造非常人性的产品的工程师来说，是必不可少的，Humanize 就是这样 1 个帮你格式化常见数据类型的 JS 库，对日期时间、相对时间、文件大小、浮点数甚至长文本的格式化都提供支持，在用 Angular？基于这个搞点 Directive 对你来说也不是难事~

#### [XEditable：轻松创建可编辑的 Angular 元素](http://vitalets.github.io/angular-xeditable/)

In Place Editing 能够让你的应用变得更加易用，因为不需要切换页面，浏览模式即编辑模式，Angular XEditable 中包含了多个 Directive 让你的元素具有这种超能力，不仅仅支持单个元素，还能支持整个表单，表格行或者表格列的实时编辑~

#### [CYO：基于 Angular 的标记语言](http://danielstern.github.io/cyo/)

CYO 是基于 Angular 的标记语言，使用者不需要任何基础，即可以利用 WEB 技术创建可交互的文档，非常适合于创建游戏脚本、复杂表单的页面，帮你把简单的逻辑就放在文档中，不需要任何额外的代码，支持 Story、Page、Choice、Condition 等，推荐去看看官方的例子~

### 找找灵感

#### [Flattastic Pro：非常不错的调色板设计](http://codepen.io/rodriguesmarcos/pen/CapmI)

Flattastic Pro：非常不错的调色板设计

### 精彩问答

#### [如何实现 winston 日志按天切分？](http://stackoverflow.com/questions/11403953/winston-how-to-rotate-logs)

winston 是 Node 环境下非常不错的日志记录库，支持非常多的记录媒介，对于线上服务进行日志切分是再常见不过的需求，如何用 winston 实现日志切分，官方文档上貌似没有说明，不过它内部是支持的，看看这个问题的最后那个答案~

#### [如何解决 Bootstrap 3 下面 Sparkline 的样式问题？](http://stackoverflow.com/questions/18894820/jquery-sparklines-and-twitter-bootstrap-3-tooltip-style-overrides)

当我合用 Bootstrap3 和 jQuery Sparkline 的时候，发现 提示气泡的样式非常诡异，这个问题给了我答案：因为 Bootstrap 3 中对所有元素使用了 border-box，解决方法也非常简单~
