---
title: 前端周刊第25期
layout: page
path: "/weekly/issue-25/"
---

> 很抱歉，这期的前端周刊迟到了1天，因为昨天我休假去办了1件人生大事，嘿嘿，闲话少说，下面是最近1周发现的比较好的文章和工具，请享用~

### 文章教程

#### [如何编写处理Stream的Node程序](https://github.com/substack/stream-handbook)

熟悉Linux的同学可能都感叹过管道的强大，1个程序制作1件事情，并把这件事情做到极致，但是加上管道（按我的理解，就是Stream），很多小命令就可以合力完成非常复杂的事情，Stream到底是个什么概念？如何用Node编写能够处理Stream的程序？

#### [Zakas：如何做好工程师导师](http://www.nczonline.net/blog/2014/01/07/how-to-be-a-mentor/)

随着团队的变大或者新人的加入，很多同学可能会慢慢承担起新人指导的任务，如何做好1个导师？只专注提高他的技能还是全面兼顾？应该鼓励犯错还是避免犯错？是鼓励多样性还是培养1个和你类似的工程师？看看Zakas是怎么想的~

#### [大量图片页面的性能优化之路](http://12devsofxmas.co.uk/2013/12/day-6-reducing-the-weight-of-image-heavy-pages/?utm_source=CSS-Weekly&utm_campaign=Issue-92&utm_medium=email)

相对于CSS和JS，图片本身对网页的性能影响会更大，因为他的体积通常比较大，而因为业务需要有些页面需要展示非常多的图片，导致加载速度很慢，如何对这种页面做性能优化呢？美团的优化过程和这个很类似，可能也值得你借鉴~

### 开发工具

#### [Grunt Compress：方便打包文件的Grunt插件](https://github.com/gruntjs/grunt-contrib-compress)

grunt-contrib-compress 是1款方便你进行文件打包的插件，配置和使用也都非常简单，支持zip，tar等格式，很容易集成到部署或分发过程中~

#### [是时候扔掉Grunt拥抱Gulp了?](http://travismaynard.com/writing/no-need-to-grunt-take-a-gulp-of-fresh-air)

Grunt无疑是目前社区中最受欢迎的Task Runner，有同学提出了Grunt的设计缺陷，然后推出了Gulp作为替代，Gulp中多个任务的运行借鉴了Linux中的管道思想，在他的术语中不再是配置，而是编写任务。即使不使用，多了解点别人的设计思想还挺好的~

#### [BowerCopy：帮你给Bower依赖瘦身](https://github.com/timmywil/grunt-bowercopy)

第24期周刊中提到，过多的Bower依赖会导致项目的代码急剧膨胀，产生很多没用的代码，有人提出了方案，这周就有同学搞出来1个工具，不一定非常适合你，但是那会是1个很不错的起点~

### 代码框架

#### [MathJS：扩展JS数学计算功能的NPM包](https://github.com/josdejong/mathjs)

MathJS 扩展了 JS 中的数学计算功能，支持简单数值运算、复数运算和矩阵运算，还提供了数值表达式解析器，强大且易用~

#### [GeoIP：根据IP得到地理位置的NPM包](https://github.com/bluesmoon/node-geoip)

GeoIP是基于NodeJS的根据IP查找地理位置的NPM包，使用的是Maxwind的免费版数据库，性能也非常不错~

### 视频教程

#### [Misko Hevery：AngularJS的设计初衷](http://www.youtube.com/watch?v=HCR7i5F5L8c)

Angular作者Misko Hevery在这个视频中详细介绍了，为什么他开发Angular，为什么会设计成现在这个样子？对Angular的很多方面都有Demo演示，如果有人问你为啥学习Angular，我想这个视频应该是最好的解释~

#### [Egghead.io：AngularJS视频短篇教程](http://www.youtube.com/playlist?list=PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7)

John Lindquist 在 Egghead.io 上公开了很多 AngularJS 的视频教程，内容涵盖甚广，从基础的Binding、Controller、Directive，到复杂的Scope、Filter、Service和Test都有讲解，每个视频都非常短，看别人做，学的更快~

### 精彩问答

#### [程序员如何用好VIM？](http://www.slideshare.net/slideshow/view?login=andreizm&preview=no&slideid=1&title=vim-for-php-programmers-pdf)

还在为选用Zend Studio还是Sublime作为代码编写工具而纠结么？亦或是在挣扎中使用VIM？如果是后者，看看这个分享，勤加练习，某天你也会对VIM运用的出神入化~

#### [如何离线观看Youtube上的视频？](http://nexus7.wonderhowto.com/how-to/watch-youtube-videos-offline-your-nexus-7-tablet-0147573/)

在Youtube上发现不错的视频，但是目前貌似它不支持离线观看，外出没网咋办？需要提前下载，然后连接手机到电脑，传输？有了Youtube Downloader，可直接离线缓存Youtube上的视频，前提是你需要知道怎么翻墙~
