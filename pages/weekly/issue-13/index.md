---
title: 前端周刊第13期
layout: page
path: "/weekly/issue-13/"
---

### 文章教程

#### [卡片式设计：信息展示的大势所趋](http://insideintercom.io/why-cards-are-the-future-of-the-web/)

关注过Google Glass的童鞋应该听说过卡片式设计吧？Google、Twitter、Facebook都开始重构自己的应用，大量使用卡片来向用户展示信息，这样做有什么好处？有为何会成为趋势呢？不妨看看~

#### [Zakas：Node和前端开发新时代](http://www.nczonline.net/blog/2013/10/07/node-js-and-the-new-web-front-end/)

Node.js给前端带来了什么
http://www.w3ctech.com/p/1623

#### [警告：img标签的空src属性可能会毁了你的页面](http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/)

准备对图片LazyLoad的同学可能会碰到这个问题，img标签的空src属性在很多浏览器中产生大量的无效请求，不同的浏览器有何差别？a标签的空href属性表现又如何？Zakas做了很详细的探索和总结~

#### [RequestAnimationFrame：带给你如丝绸般细腻的动画](http://creativejs.com/resources/requestanimationframe/)

传统的JS动画要么使用setTimeout，要么使用setInterval，但大家都知道这些东西还是不太靠谱的，有没有遇到过JS动画卡顿的窘境，究其原因就是动画的执行密度和效率问题，多数现代浏览器提供的RequestAnimationFrame会让你的动画如丝绸般细腻润滑？如何使用呢？

#### [一淘UED：色彩浅析](http://ux.etao.com/posts/817)

色彩是我们观察事物的第一认知，是最能触动我们感官的视觉元素。色彩可以激发我们的联想，刺激我们的情绪。在设计中，色彩的合理运用一直是个很重要的课题。相信大多数人都对色彩有所了解，在这里让我们做个复盘，一起来回忆下关于色彩的部分常识。

#### [使用Array.prototype.reduce进行搜索](http://ariya.ofilabs.com/2013/10/searching-using-array-prototype-reduce.html?utm_source=javascriptweekly&utm_medium=email)

不存在什么语言中常见的搜索都是用循环来完成，在Javascript中，有时候可以用forEach来完成，除此之外Array.prototype.reduce也可以用来搜索，看起来不可思议？看看别人的例子就明白了~

#### [探究：JavaScript中Try/Catch](http://flippinawesome.org/2013/09/30/rethinking-javascripts-trycatch/?utm_source=javascriptweekly&utm_medium=email)

Javascript中的Try/Catch是1中非常有用的结构，通常被用于在生产环境将错误捕获到发送回服务器，方便开发人员查看修复。但jsperf中的测试也表明，大量使用Try/Catch会带来性能问题，还有更好的办法？

### 代码框架

#### [Prerender：让你的Javascript应用对搜索引擎更友好](http://prerender.io/)

BackBone、AngularJS等框架的使用让页面源代码越来越瘦，也让客户端越来越重，这样有个明显的弊端就是搜索引擎爬到的内容很少了，在为这个问题发愁？看看Prerender是如何做SEO的~

#### [基于Node的Readability实现](https://github.com/arrix/node-readability)

好奇过Readability和Evernote Clearly是为网页降噪的么？算法不是太复杂，并且已经有同学写出来放到GitHub上了，可以通过命令行抽取网页内容，还不快去看看~

### 视频教程

#### [Parse：如何设计更好的API](http://blog.parse.com/2013/10/02/parse-developer-day-video-series-how-to-design-great-apis/?utm_source=statuscode&utm_medium=email)

什么样的API才算是好的API呢？好的API应该看起来直观、并且有很详细的文档？Parse的工程师为你带来这个视频~

### 精彩问答

#### [如何在Chrome DevTools中调试:before和:after](http://www.youtube.com/watch?v=AcKlJbmuxKo&feature=youtu.be)

使用过CSS中的:before和:after选择符么？通过这些选择符可以在元素前后插入各种内容，但是这些用CSS插入内容的样式如何调试？看了你就知道，需要Chrome Canary哦~

#### [如何彻底关闭浏览器表单的Autocompletion](https://developer.mozilla.org/en-US/docs/Mozilla/How_to_Turn_Off_Form_Autocompletion)

几乎目前市面上的浏览器都提供了表单自动完成功能，不需要自动填充的时候就得把他关掉，大家可能想到的办法就是在Input上设置Autocompletion为off，有些浏览器需要在Form和Input上同时设置Autocompletion为off。但有些浏览器这样设置了还是会自动填充？到底咋回事儿？看看MDN这篇文章的剖析~
