---
title: 前端周刊第14期
layout: page
path: "/weekly/issue-14/"
---

### 文章教程

#### [讨论: 当扁平式UI遇到表单](http://alistapart.com/article/flat-ui-and-forms)

随意翻翻国内外的各大网站，似乎扁平化设计越来越流行，四处可见被拍扁的页面元素，相比各种渐变、阴影和边框，扁平化设计确实能让页面变得清爽简洁，那么是否页面上的所有元素都需要拍扁呢？恐怕不是这样~

#### [HTML5浏览器存储的前世今生和未来](http://www.sitepoint.com/html5-browser-storage-past-present-future/?utm_source=javascriptweekly&utm_medium=email)

你可能需要各种理由将数据存储在浏览器端，比如性能、离线可用等等，目前有哪些技术可能助你实现浏览器存储？各浏览器的兼容性如何？各种技术的适用场合？在可以预见的未来又会朝哪个方向发展？很不错的总结~

#### [几个Grunt的高级技巧](http://chrisawren.com/posts/Advanced-Grunt-tooling)

Grunt的出现和流行让前端开发越来越舒心，通过将重复的工作自动化，开发者只需集中精力在应用逻辑上，而不用操心各种拷贝、配置、压缩和编译。作者在这篇文章里分享了几个高级技巧，非常实用~

#### [如何避免网页中的布局垃圾（Layout Thrashing）](http://wilsonpage.co.uk/preventing-layout-thrashing/)

如果你用Javascript粗暴频繁的读写DOM，就会发生Layout Thrashing这种现象，实际上就是会造成浏览器的频繁Reflow，影响页面的性能，那么是这种现象背后的原因究竟是什么？该用什么办法解决呢？看看这篇文章，再看看FastDOM的实现~

### 开发工具

#### [HTTPie: 界面更加友好的类cURL工具](https://github.com/jkbr/httpie)

觉得cURL的纯黑白输出看起来很费劲？这个工具肯定很适合你，用Python编写，自带了各种高亮，试试你就会喜欢上~

### 代码框架

#### [UAParser: Browserscope浏览器检测的多语言版本](https://github.com/tobie/ua-parser)

非常强大的UAParser，各种主流语言的版本都有，训练数据来自HttpArchive，如果没有识别出你的UA，别担心，你可以自己添加规则~

#### [PhysicsJS: 强大的开源物理引擎](https://github.com/wellcaffeinated/PhysicsJS)

PhysicsJS是1个模块化、易扩展、易使用的Javascript物理引擎，让你很容易的在网页中实现重力、引力、碰撞效果~

### 视频教程

#### [AngularJS的60分钟入门教程](http://www.youtube.com/watch?v=i9MHigUZKEM)

非常经典的AngularJS入门视频，60分钟的视频让你迅速领会AngularJS的主要构件，也足够让你为AngularJS的方方面面感到震撼~

#### [Nicolas Gallagher: WEB应用的CSS架构](http://vimeo.com/74359951)

多人维护的WEB项目自然会有越来越多的CSS、HTML，但是市面上还没有非常好的工具来帮你有条有理的管理这些代码，没有精心设计的CSS架构，团队开发很快就会变成1个噩梦，Nicolas Gallagher为你带来：WEB应用的CSS架构。不知道他是谁，去github上看看~

### 精彩问答

#### [Javascript中深复制和浅复制的区别？](http://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy)

在各种前端库的源代码中经常会见到深复制和浅复制这样的字眼，二者究竟有何区别？

#### [如何让你的Gruntfile更加容易维护？](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html)

刚开始使用Grunt的同学可能会把所有的配置1股脑全部丢到Gruntfile里面，随着配置增加和频繁修改，这个文件会越来越乱越来越长，有没有办法让他更容易维护呢？
