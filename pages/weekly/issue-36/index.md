---
title: 前端周刊第36期
layout: page
path: "/weekly/issue-36/"
---

### 文章教程

#### [论 head 中静态资源的最佳加载顺序](http://blogs.msdn.com/b/ieinternals/archive/2011/07/18/optimal-html-head-ordering-to-avoid-parser-restarts-redownloads-and-improve-performance.aspx)

论 head 中静态资源的最佳加载顺序，为什么顺序很重要？什么样的顺序才是最优的？根据是什么？虽然是老文，但是助你理解浏览器的工作原理~

#### [让 Angular 应用支持多国语言](http://www.ng-newsletter.com/posts/angular-translate.html)

使用 angular-translate 能让你的应用支持多国语言，支持多种语言包加载方式，还对性能和可用性做了大量的优化，如果你开发的应用需要支持多国语言，那么这个就必不可少了~

#### [Gulp 和 Browserify 终极指南](http://viget.com/extend/gulp-browserify-starter-faq)

Gulp 可以说是 Task Runner 领域的黑马，相比 Grunt 可以用更简洁的代码而不是冗长的配置来编写自动化任务，而 Browserify 则把数以万计的 NPM 模块和 CMD 规范带到了浏览器端，如果把这两者结合起来，你的项目会使啥样子？这篇文章的作者把自己学习过程中的点击总结了下来，相信能让你少走不少弯路~

#### [Angular 表达式 Cheat Sheet](http://teropa.info/blog/2014/03/23/angularjs-expressions-cheatsheet.html)

初学 Angular 的同学，可能对其中的表达式（Expression）感到非常的迷惑，看起来非常强大，但是稍有不慎，Angular 就会报错，这个表达式到底支持哪些写法？可以写的多风骚？有同学做了梳理，没事儿翻翻，还能长点姿势~

### 开发工具

#### [可视化的 Gulp 文件在线编辑工具](http://gulpfiction.divshot.io/#/4de51231-ac1f-435e-81bf-88a885f2c7df)

Gulp Fiction 提供了可视化的 Gulp 文件在线编辑功能

### 代码框架

#### [ng-fx：简单优雅的 Angular 动画库](https://github.com/Hendrixer/ng-Fx)

ng-fx：又1款简单优雅的动画库，包含了常见的过渡转场效果，视觉效果非常的优雅~

### 找找灵感

#### [扁平系方形加载中动画合集](http://tympanus.net/codrops/2014/04/25/freebie-flat-style-squared-preloaders/)

来自 Codrops 的扁平系方形加载中 CSS 动画肯定能让你眼前一亮，为啥我就是没这个创造力呢？

### 视频教程

#### [Web Components 入门](http://addyosmani.github.io/fitc-wccdt/#1)

Web Components 时下已经从概念走向实战，Addy Osmani 的这篇 Slide 详细的介绍了 Web Components 的实现方法（Templates、Shadow DOM、Custom Elements、Imports），浏览器支持的情况，以及他为推动组件化所做的努力：Polymer 项目，非常值得关注~

#### [Eric Schoffstall：Gulp 诞生记](https://www.youtube.com/watch?v=mw_xWTkMJEM)

Eric Schoffstall 在这个演讲中详细介绍了 Gulp 诞生的过程？良好的编译系统应该具有什么样的特征？并对 Gulp 仅有的几个 API 做了介绍，相比于那些上来就讲用法的教程而言，这个视频能让你知其所以然~

#### [探讨：浏览器 JS 错误堆栈的那些痛](https://www.youtube.com/watch?v=4Tys-VuBPgo)

服务端语言的错误我们可以记日志，实时修复，那么浏览器端呢？貌似也可以记日志，但是问题的关键不在这里，诡异抽象、以及各种不着边际没有调用栈的出错消息即使记下来了也让你无从下手，这里详细的探讨了 JS 错误在不同浏览器中的诡异表现，以及如何获取更有价值的错误信息~

### 精彩问答

#### [如何让自己变得更有效率？](https://medium.com/business-marketing/a988c17383a6)

对于工程师来说，效率和生产力尤其重要，如何才能提高或者保持你的高效呢？保证充足的睡眠，不要对需求来者不拒，不要重复的发明轮子。几条很不错的建议，并且都是有科学依据的哦~

#### [Vim 如何批量转换文件的换行符？](http://stackoverflow.com/questions/82726/convert-dos-line-endings-to-linux-line-endings-in-vim)

如何批量的的将多个文件中的换行符从 DOS 转成 Linux 格式？可能你能想到很多办法，但是按键最少的那个办法是什么呢？

#### ["track by" 能提高 ng-repeat 的性能？](http://www.codelord.net/2014/04/15/improving-ng-repeat-performance-with-track-by/)

当 ng-repeat 遇到超长列表时，页面就会变得很卡，有没有办法优化，肯定是有的，除了前面介绍过的 angular-once 之外，还可以使用 angular 内置的 "track by" 来提高速度，当然这对于数据的结构是有要求的~
