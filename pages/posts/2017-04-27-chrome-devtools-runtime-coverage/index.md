---
title: "Chrome DevTools 代码覆盖率功能详解"
date: "2017-04-27T22:12:03.284Z"
layout: post
path: "/posts/chrome-devtools-runtime-coverage/"
cover: "/posts/chrome-devtools-runtime-coverage/cover.jpg"
category: "tooling"
description: "工欲善其事必先利其器，前端周刊本周起每周会加餐 1 篇工具技巧，里面辅以动图，让大家看完就能学会，并上手使用。本文会介绍 Chrome Canary 新增的代码覆盖率功能、如何收集数据、如何基于它收集的数据来改进 WEB 应用的性能。"
---

![cover](./cover.jpg)

> 共 1812 字，读完需 3 分钟。工欲善其事必先利其器，[前端周刊][8]本周起每周会加餐 1 篇工具技巧，里面辅以动图，让大家看完就能学会，并上手使用。本文会介绍 Chrome Canary 新增的代码覆盖率功能、如何收集数据、如何基于它收集的数据来改进 WEB 应用的性能。

[Chrome Canary][1] 开发者工具中本周新增了 Coverage 功能，该功能同时适用于 JS 和 CSS，并有望很快登陆 Chrome 正式版。

Coverage 顾名思义就是代码覆盖率的意思，本文会跟大家介绍 Coverage 功能是什么、如何收集数据、及如何基于它收集的数据来改进 WEB 应用的性能。

Coverage 功能使用动态分析（Dynamic Analysis）法来收集代码运行时的覆盖率，让开发者能够窥探他的代码到底有多大比例在发光发热。动态分析是指在应用运行状态下收集代码执行数据的过程，换句话说，覆盖率数据就是在代码执行过程中通过标记收集到的。

## Coverage 工具怎么用？

在探讨 Coverage 工具带来的好处之前，先快速看下如何使用它来收集覆盖率数据：

### 1. 调起 Coverage 面板

![open coverage][open-coverage.gif]

### 2. 录制 Coverage 数据

![record coverage][record-coverage.gif]

与 Performance 面板类似，Coverage 面板左上角有 3 个按钮，点击录制的时候会开始录制，同时录制按钮变红，再次点击录制按钮会停止录制并把录制到的覆盖率数据展示出来。此外，可以点击中间的快捷按钮，“刷新并开始录制”，待页面加载完之后停止录制。

Coverage 工具要求我们手动录制的原因是：动态分析过程需要监控每行代码的执行情况，也就意味着录制过程中执行的代码要比原始的应用的代码要多，因为动态分析过程需要对你的代码进行某种变换才知道哪些行被执行了。

### 3. 查看 Coverage 数据

![read coverage][read-coverage.gif]

如上图所示，Coverage 录制结果表格展示了录制过程中加载的所有 JS 和 CSS 文件，以及每个文件的大小、运行时覆盖率，汇总数据展示在页面底部的状态栏中（上面的截图没有展示）。单击单个静态资源能将其在 Sources 面板中打开，代码行号的左边用红绿色的条来标识代码是否在录制过程中被执行到。

## Coverage 数据有啥用？

上面录制的数据中，最大的文件是 `vendor.js`，其中 55% 的代码都没有执行过，约 80 KB，这已经相当于一张典型图片的文件大小了。

如果某个文件覆盖率低（即未使用代码比例很高），通常意味着用户加载了太多不必要的代码（要么真的是无用代码，要么是当前时点还没执行到的代码），有性能常识的同学不难腿短出，这会导致页面的完全加载时间、或单页应用的启动时间变慢，在慢速网络下的性能损耗会尤其明显；此外，更多代码的解析、编译也就意味着更多的硬件资源消耗，在低端设备上也会存在明显的性能问题。

在笔者看来，Coverage 数据至少能从下面 2 个方面指导我们进行 WEB 应用的优化：

### 除移死代码

以 Coverage 数据为参考，我们能了解页面重无用代码的比例到底有多大。现实世界中，很多工程师可能是在遗留代码库上工作，并且遗留代码库存在的时间还很长，那么很可能这个代码库中存在大量的无用代码，但是谁也不敢删除他们，因为 JS 这门语言的动态性，你不能粗暴的把哪些看起来“没有被使用”的代码直接删掉，除非你很清楚所有的代码执行路径，很显然这对于大型应用或者遗留代码库来说是不现实的。

怎么移除死代码呢？我们可以依赖打包工具，比如 [UglifyJS][2] 在压缩代码时支持直接删除死代码的配置项。而 [Webpack 2][3] 中引入了 [Tree Shaking][4] 的特性，能够自动把项目中没有用到的代码从打包中去掉，但是这种优化仅限于被 `export` 的代码。总而言之，死代码要尽可能想办法去掉，Coverage 工具能提供一个判断基准。

### 懒加载代码

如果能删的死代码都删了，但是 Coverage 数据还是居高不下，那么你应该换个角度思考。就像前文所说，JS 是动态语言，可能部分代码在页面加载时并没有用到，但是用户后来的操作会触发这些代码的执行，为什么不让这些代码在需要的时候再加载呢？聪明的你可能已经想到了，这就是[懒加载][5]的技术。

使用 Webpack 打包且没有对配置做特别调优的话，它默认会把所有依赖打包成一个巨大的文件，很容易出现首次加载覆盖率很低的情况，在 Webpack 中实现懒加载可以参考 [Code Splitting][6] 和 [bundle-loader][7]，具体的配置细节这里不展开讲。使用懒加载之后可以极大的减少页面初次下载的代码，从而提高性能。需要注意的是，懒加载优化需要在模块数量和模块大小之间把握一个平衡，否则过多的模块懒加载反而对性能不利，因为每个 HTTP 请求也是有额外开销的。

[1]: https://www.google.co.uk/chrome/browser/canary.html
[2]: https://github.com/mishoo/UglifyJS2
[3]: https://webpack.js.org/
[4]: https://webpack.js.org/guides/tree-shaking/
[5]: https://friendlybit.com/js/lazy-loading-asyncronous-javascript/
[6]: https://webpack.js.org/guides/code-splitting/
[7]: https://github.com/webpack-contrib/bundle-loader
[8]: https://zhuanlan.zhihu.com/feweekly
