---
title: 前端周刊第3期
layout: page
path: "/weekly/issue-3/"
---

> 前端周刊第3期

### 文章教程

#### [面向对象JS的权威指南](http://www.objectplayground.com/)

以清晰的图像和箭头解释了JS中的原型链究竟是怎么回事儿，对这个很迷糊？看完这个，相信对原型的理解更深入。

#### [你的CSS文件应该保持多大才算合理？](http://www.jonathanklein.net/2013/01/how-much-css-should-you-have.html)

根据HTTP Archive的统计，目前每个网站平均的CSS文件大小为35KB，而CSS文件的大小会影响传输的速度，进而拖慢网页的渲染。那么究竟CSS文件保持多大才算合理呢？尽可能的少？还是先按需求写，然后再优化？

#### [AirBnB的前端性能调优](http://nerds.airbnb.com/performance-tuning/)

当1个创业公司经历了野蛮生长和扩张之后，就需要在其所在的领域精耕细作，而技术团队则会话不少的精力进行应用的性能调优，看看AirBnB在这个过程中都干了些什么，应该对你有些启发。

#### [白话BigPipe](http://huoding.com/2011/06/26/88/comment-page-2)

形象的阐释了flush document early和bigpipe的原理

#### [通用 CSS 笔记、建议与指导](https://github.com/chadluo/CSS-Guidelines/blob/master/README.md)

在参与规模庞大、历时漫长且人手众多的项目时，所有团队成员遵守约定的规则非常重要，因为要保持CSS的可维护性、保持代码的清晰易懂和可扩展性，为了实现这些目标，有哪些通用的方法呢？

#### [单元测试：提高程序员效率的利器](http://www.youtube.com/watch?v=_UmmaPe8Bzc)

现在花1分钟写测试，为未来节省10小时差错，是单元测试和测试驱动开发一直以来受人追捧的原因，那么难以测试的WEB应用该如何测试呢？

#### [类型的本质和函数式实现](http://coolshell.cn/articles/10169.html)

类型本质剖析的非常透彻，改变了我以往粗陋的看法

### 开发工具

#### [NodeJs智能合并CSS精灵图工具iSpriter](http://imatlas.com/posts/nodejs-intelligent-merge-css-sprite/)

根据雅虎的网站优化准则，合并页面用到的图片，可以减少加载时发起的http请求数目，可以加速页面加载。但是怎么合并？1张1张手动拼接？我们可是程序员哦，这种机械化无趣的工作就该交给电脑来完成，iSpriter就能帮你省不少力。

#### [助你实现CSS自动化的4个工具](http://www.netmagazine.com/tutorials/4-tools-automatic-css-testing?utm_source=CSS-Weekly&utm_campaign=Issue-69&utm_medium=email)

除非每次修改CSS时你对所有的页面进行了回归测试，否则，总有1天某人修改了某处，而影响其他页面的展示，墨菲定律就是这么说的，CSS自动化测试就能帮你节省不少麻烦。

### 代码框架

#### [Inquirer.js：nodejs命令行程序的bootstrap](https://github.com/SBoudrias/Inquirer.js?utm_source=javascriptweekly&utm_medium=email)

Inquirer.js是1个包含了多个命令行应用程序会用到的UI集合，比如需要用户回答问题、做出选择、用户输入的验证、出错提示，有了Inquirer你能更加专注应用的逻辑，而节省很多重复的工作。
