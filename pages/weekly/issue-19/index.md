---
title: 前端周刊第19期
layout: page
path: "/weekly/issue-19/"
---

> 本周在每期周刊的页面底部新增了评论框，如果觉得哪里不好、或者对内容有什么建议，请尽管说出来。当然啦，表扬也是很受欢迎的~

### 文章教程

#### [An Introduction To Full-Stack JavaScript](http://coding.smashingmagazine.com/2013/11/21/introduction-to-full-stack-javascript/)

想为1个WEB项目做技术选型？模板引擎，测试框架，你面临的选择太多，但是所有人都想做出最正确的选择，希望能够快速开发、快速迭代、易于维护，并且高性能、可扩展。在作者的眼中，Full-Stack Javascript能满足你的所有需要，看看他的Stask中都包含哪些东西？末尾的总结又非常的中肯：Javascript不能解决所有的问题，但是它的社区应该能给你很多启发~

#### [警惕: 移动设备上的Data URI比外链资源慢6倍](http://www.mobify.com/blog/data-uris-are-slow-on-mobile/)

Data URI能帮你把需要用到的图片直接编码到CSS或者HTML文件中，减少请求数，从而提高页面性能，看似是非常合理的推断，但是有同学测试后发现：移动设备上的Data URI比外链资源慢6倍！这是咋回事儿？什么时候该用Data URI？

#### [细说GitHub上那些Top100的项目](http://www.takipiblog.com/2013/11/20/we-analyzed-30000-github-projects-here-are-the-top-100-libraries-in-java-js-and-ruby/?utm_source=statuscode&utm_medium=email)

有同学分析了GitHub上的30000个项目，对那些排名前100的项目进行了更细致的分析，有些很有意思的发现，特别是Javascript那块的分析：为什么Javascript的框架层出不穷？

#### [Intro to the React Framework](http://net.tutsplus.com/tutorials/javascript-ajax/intro-to-the-react-framework/)

类似于Angular、Ember和Knockout，React是Facebook的那帮家伙搞出来的1个框架，对DOM进行了非常好的抽象，开发者几乎不再直接操作节点，了解下框架的诞生背景和设计思想兴许能开阔你的思路~

#### [详解移动设备单击后的300ms延迟](http://www.icenium.com/blog/icenium-team-blog/2013/11/21/what-exactly-is.....-the-300ms-click-delay)

快速响应是任何UI必备的特质，用户触发操作后100ms给出响应，才会有快的感觉，可是不知道你发现没有，在移动设备上上网时，不管单击什么貌似都慢半拍，准确的说是慢了300ms，这300ms到底是怎么产生的？在需要的时候如何禁用浏览器的这种行为？

### 开发工具

#### [用Grunt清除代码中的异味](https://gist.github.com/gvn/7536832)

不少同学可能都有强迫症和洁癖，希望保持代码整洁无异味，这篇文章介绍了如何使用jshint、jsbeautifier以及travis来实现这个目的。

#### [grunt-processhtml: 对html文件进行预处理](https://github.com/dciccale/grunt-processhtml)

grunt-processhtml是1款对html文件进行预处理，比如对其中引用的外部css、js等进行合并、压缩，并替换html中的引用路径，非常适合于将项目编译为线上版本的时候使用。与之类似的插件还有：grunt-hashres，需要的自行去搜~

### 视频教程

#### [比较: AngularJS, EmberJS 和 KnockoutJS 中的双向绑定](http://www.youtube.com/watch?v=mVjpwia1YN4)

双向绑定能进1步的简化你的开发工作，你只需要关心业务逻辑，而不用担心数据变了展示如何跟着改变。AngularJS, EmberJS 和 KnockoutJS 中都用不同的方式实现了双向绑定（Two-way Binding），实现机制有何异同？性能是否有差异？非常不错的对比和Demo

#### [Etsy: DIY WebPagetest 的那些事](https://speakerdeck.com/jklein/diy-synthetic-private-webpagetest-magic)

WebPageTest是1个公开免费的测试网页性能的服务，但是用的人越多就越慢，甚至要和12306一样排队，还好WPO将这个项目开源，你可以自己搭建WebPageTest实例，Etsy的那帮家伙就这样搞了，进展还不错。如果你脑子里闪过类似的念头，这个就很值得借鉴~

### 精彩问答

#### [Linux下如何获取目录或磁盘的大小？](http://www.codecoffee.com/tipsforlinux/articles/22.html)

Linux下如何获取目录或磁盘的大小？

#### [如何用npm进行简单的任务自动化？](http://substack.net/task_automation_with_npm_run)

很多同学应该都开始在自己的项目中使用Grunt把重复的任务自动化，微型项目没有那么复杂的需求？其实还有个更加轻量级的办法，看看别人是怎么利用npm run来进行简单任务的自动化的。
