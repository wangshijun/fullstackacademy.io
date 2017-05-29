---
title: 前端周刊第26期
layout: page
path: "/weekly/issue-26/"
---

> 这期周刊又晚到了1天，因为发现了太多可以和大家分享的东西，整理起来花费了些时间，但是每期周刊又不能太冗长，所以很多内容直接发布到了前端周刊主页，感兴趣的童鞋们可以前去看看。最后，因为我接下来要休3个星期的长假，下期前端周刊将会在春节之后送达。很感谢创刊这半年来大家的支持~

### 文章教程

#### [神马是全栈工程师？](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)

最近知乎上有个很不错的提问，如何成为全栈工程师？搞明白这个问题，先看看怎样才叫做全栈工程师，同时也推荐去知乎看看这个问题的答案~

#### [响应式设计相关资源列表](http://bradfrost.github.io/this-is-responsive/resources.html)

想学响应式设计？不知道有哪些方法？哪些库？哪些工具可用，别人都踩到了什么坑？这里集中了很多非常不错的响应式设计资源，包括了你想了解的方方面面~

#### [实战：用Protractor进行E2E测试](http://www.ng-newsletter.com/posts/practical-protractor.html?utm_source=ng-newsletter&utm_campaign=efb11cb67c-AngularJS_Newsletter_1_14_141_14_2014&utm_medium=email&utm_term=0_fa61364f13-efb11cb67c-93455617)

传言Protractor将会替代Angular内置的Karma专门用来进行E2E集成测试，基于WebdriverJS，能驱动主流的浏览器，提供的接口也非常方便使用，如果你用过Jasmine，那就更容易上手了~

#### [手把手教你编写Grunt插件](http://javascriptplayground.com/blog/2014/01/creating-your-first-grunt-plugin/?utm_source=javascriptweekly&utm_medium=email)

有个自动化需求但是翻遍了Grunt的社区都没找到已有的解决方案？想自己写1个？从哪里开始呢？这篇很不错的文章，手把手叫你编写1个简单的Grunt插件，内容涵盖了Yoeman，Grunt基础API等~

#### [构建基于Node的Restful Web Service](https://www.openshift.com/blogs/day-27-restify-build-correct-rest-web-services-in-nodejs)

很简洁的教程教你如何基于Node构建Restful的Web Service~

### 开发工具

#### [Grasp：JS代码重构助手](http://graspjs.com/blog/2014/01/07/refactoring-javascript-with-grasp/?utm_source=javascriptweekly&utm_medium=email)

有没有过重构代码，但是改了三番五次还是改错改漏不少地方的经历？用SED，批量查找替换貌似都不靠谱，如果代码更多，就纯粹的变成体力劳动了。Grasp的作者正是基于这个痛点搞出了这个工具：基于JS源代码的语法树帮你重构JS代码，避免你漏改、错改代码，官网上给出了好几个常见的重构需求的Demo，快去试试吧~

#### [细数那些Node命令行工具包](http://shapeshed.com/command-line-utilities-with-nodejs/?utm_source=nodeweekly&utm_medium=email)

Node也可以用来编写命令行程序，如果你是个前端工程师的话，这点非常方便，但是如何很快编写出1个能接收各种参数的命令行程序呢？这篇文章细数了那些能够加速你开发的NPM包~

#### [再说 Task Runner 领域的黑马 Gulp](http://www.shaundunne.com/gulp-is-the-new-black/?utm_source=javascriptweekly&utm_medium=email)

上周期刊中有篇文章把Gulp和Grunt进行了简单的对比，本周对这个进行重复报导，内容还是很不相同的~

### 代码框架

#### [ng-table 非常强大的Angular表格插件](https://github.com/esvit/ng-table)

ng-table 是1款非常强大的Angular表格插件，提供了简单的排序、筛选和分页功能，同时支持自定义单元格和数据行的模板，还支持数据的分组，提供了很多的Demo，方便你继承。如果有用得上的场景，相信能帮你省不少力~

#### [Schema Inspector：用JS进行数据校验和清洗](http://atinux.github.io/schema-inspector/)

Schema Inspector 提供了同步或异步的方式进行数据校验和清洗，内置了主流数据类型的支持，还可以自定义校验规则。可在Node或者浏览器中使用~

### 精彩问答

#### [为什么我开始拥抱Promise？](http://spion.github.io/posts/why-i-am-switching-to-promises.html?utm_source=javascriptweekly&utm_medium=email)

使用Promise能让你的代码变得扁平易读，更接近自然语言，并且已经有浏览器开始支持这个东西了。很多同学也开始把代码写成Promise的风格，你还在摇摆不定？看看他的理由~

#### [Angular测试Controller时如何Mock Service](http://stackoverflow.com/questions/16470043/mocking-collaborators-in-angular-controller-and-service-jasmine-tests)

编写单元测试时，对代码模块进行隔离是个非常常用的手段，而Mock又是1种不破坏模块间依赖但是保证外部被依赖模块可控的1中手段。Angular中的Controller可能会依赖你的Service，Factory，那么测试Controller时如何Mock1个Service呢？
