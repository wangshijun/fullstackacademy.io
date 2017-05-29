---
title: 前端周刊第29期
layout: page
path: "/weekly/issue-29/"
---

### 文章教程

#### [GoodUI：你应该拥抱的UI方案](http://goodui.org/)

好的用户界面会带来更高的转化率，也会提高应用的可用性，换句话说，设计更好的用户界面对于业务和用户是双利的。这个小站列举了很多不错的UI方案，如果你在做决策可以来这里看看~

#### [常见的 Promise 反模式](http://taoofcode.net/promise-anti-patterns/)

如果你开始使用 Promise，它会变的非常简单，可是用着用着你可能会发现你的代码并没有使用了 Promise 本该具有的扁平和简洁，是因为用的不够好？这篇文章的作者总结了几个 Promise 使用不当或者不彻底的例子，可能你也有类似的问题~

#### [移动网页应用开发的性能建议](http://cubiq.org/performance-tricks-for-mobile-web-development)

iScroll 的作者在这片文章里总结了几个移动网页应用开发的性能建议：尽量简单、尽量少操作DOM、尽可能缓存、轻量级的回调，虽然主要针对移动应用开发，对PC网页开发还是有些参考意义的~

#### [再说 CSS 性能：选择符和属性](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/)

虽说优化 CSS 的性能远没有优化网站后端和静态资源分发速度见效那么明显，但是站在用户的角度，即使是再小的优化，用户也能从中受益。使用不当的 CSS 会占用用户电脑更多的资源，也可能会让页面变的卡顿，有关 CSS 性能的方方面面~

### 开发工具

#### [Atom：GitHub 出品的代码编辑器](http://code.tutsplus.com/tutorials/check-out-atom-githubs-new-development-editor--net-37030?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+nettuts+%28Tuts%2B+Web+Development%29)

GitHub 出品了代号为 Atom 的代码编辑器，据说非常的强大，很可能取代 Sublime Text，凭什么这么说？都有哪些高大上的功能，看看这篇文章，然后到官网上申请个试用先~

#### [细数 Chrome 33 开发者工具的更新](http://www.html5rocks.com/en/tutorials/developertools/chrome-33/)

Chrome 33 中对开发者工具做了大量的更新：你可以快速的跳到代码的某1行，可以使用 getEventListeners 获取某个节点上所有的事件监听函数，此外还包括网络面板的不少更新，非常值得学习~

#### [20 枚扩展 Chrome 开发者工具的扩展](https://developers.google.com/chrome-developer-tools/docs/extensions-gallery?utm_content=buffer04a01&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)

正在用 jQuery、Angular、Ember 开发网页应用，但是调试时还在用非常原始的 console？那么你应该看看这个页面，列举了20款开源社区贡献的 Chrome 开发者工具扩展，很方便的调试各种开源框架或类库所编写的应用~

#### [Grunt？Gulp？Fez？](http://flippinawesome.org/2014/02/24/using-grunt-consider-fez/)

最近 Task Runner 领域硝烟再起，刚出不久的 Gulp 被誉为黑马，Fez 又出来指出了 Grunt 和 Gulp 的不是，说自己能解决他们的缺陷，对于我们这些普通开发者来说，多1种选择是好事还是坏事呢？

### 代码框架

#### [TraceKit：给你跨浏览器的JS错误调用栈](https://github.com/occ/TraceKit)

TraceKit 能够给你提供跨浏览器的JS错误调用栈，当你想收集页面中的JS错误并上报到自己的服务器方便诊断修正时，可以看看这个，能兼容多数浏览器~

#### [Angular Once：大量数据页面的加速器](https://github.com/tadeuszwojcik/angular-once)

Angular 应用的页面上展示了太多的数据导致页面奇慢无比？慢的根本原因是你在展示数据的时候创造了大量的双向绑定，但是这些双向绑定在很多时候是不需要的，可以看看 Angular Once，帮你把双向绑定转成1次性绑定，页面会快不少~

### 精彩问答

#### [Git 如何改变上次提交的作者信息？](http://stackoverflow.com/questions/3042437/change-commit-author-at-one-specific-commit)

Git 如何改变上次提交的作者信息？

#### [VIM：如何用 argdo 执行正常模式下的命令？ ](http://stackoverflow.com/questions/1033587/in-vim-how-to-append-insert-text-with-argdo)

当用 VIM 打开多个文件时，可以用 argdo 批量的在所有文件中执行相同的命令，比如调整缩进，那么如何用 argdo 执行正常模式下的命令呢？
