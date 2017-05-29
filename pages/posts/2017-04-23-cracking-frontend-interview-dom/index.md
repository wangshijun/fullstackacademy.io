---
title: "破解前端面试（80% 应聘者不及格系列）：从 DOM 说起"
date: "2017-04-18T22:12:03.284Z"
layout: pos
path: "/posts/cracking-frontend-interview-dom"
cover: "/posts/cracking-frontend-interview-dom/cover.png"
category: "tooling"
description: "本文为《破解前端面试（80% 应聘者不及格系列）》文章的第二篇，包含 DOM、Event、浏览器端优化、数据结构和算法功底的考察。可能有同学会问 DOM 有什么好聊的，不就是节点的各种操作么？DOM 是网页构建的基石，熟练掌握各种操作、知晓可能的问题、熟悉优化手段，才能做到在工程实践中从容不迫。"
---

![cover][./cover.png]

> 本文为《破解前端面试（80% 应聘者不及格系列）》文章的第二篇，包含 DOM、Event、浏览器端优化、数据结构和算法功底的考察。可能有同学会问 DOM 有什么好聊的，不就是节点的各种操作么？DOM 是网页构建的基石，熟练掌握各种操作、知晓可能的问题、熟悉优化手段，才能做到在工程实践中从容不迫。系列文章链接：[闭包篇][21]。下面开始聊 DOM 的话题。

## 如何修改页面内容？

考察候选人对 DOM 基础知识的掌握程度时，笔者常抛出这样的问题：页面上有个空的**无序列表**节点，用 `<ul></ul>` 表示，要往列表中插入 3 个 `<li>`，每个列表项的文本内容是列表项的插入顺序，取值 `1, 2, 3`，怎么用原生的 JS 实现这个需求？同时约定，为方便获取节点引用，可以根据需要为 `<ul>` 节点加上 `id` 或者 `class` 属性。

超过 80% 的候选人能完成需求，先为 `ul` 加上选择符：

```html
<ul id="list"></ul>
```

然后给出节点创建代码：

```javascript
var container = document.getElementById('list');
for (var i = 0; i < 3; i++) {
    var item = document.createElement('li');
    item.innerText = i + 1;
    container.appendChild(item);
}
```

也有候选人给出下面的代码：

```javascript
var container = document.getElementById('list');
var html = [];
for (var i = 0; i < 3; i++) {
    html.push('<li>' + (i + 1) + '</li>');
}
container.innerHTML = html.join('');
```

这个都写不出来的同学要去面壁了（可能你能用各种库、框架能写出来，但是等你需要调试 bug，分析问题，就会捉襟见肘）。你也可能在心里嘀咕，上来就写代码，还是面试么？可以说代码是工程师最主要的产出，看着候选人编码能让你熟悉他的思考方式、编码风格、代码习惯，很容能看出来是不是“对味儿”的候选人。

坦率的说，上面的两份代码只能说满足了需求，但是如果做到了以下几点，会有加分：

1. 变量命名：节点类的变量，加上 `nd` 前缀，会更加容易辨识，当然，也有同学习惯借用 `jquery` 中的 `$`，关于变量命名的更多内容可以去阅读《可读代码的艺术》；
1. 选择符命名：给 CSS 用和 JS 用的选择符分开，给 JS 用的选择符建议加上 `js-` 或 `J-` 前缀，提高可读性，还有没有其他好处，请思考；
1. 容错能力：应该对节点的存在性做检查，这样代码才能更健壮，实际工作中，很可能你的这段代码会把其他功能搞砸，因为单个地方 JS 报错是可能导致后续代码不执行的，为啥要这样做？不理解的同学可以去看看[防御性编程][13]；
1. 最小作用域原则：应该把代码段包在[声明即执行的函数表达式（IIFE）][12]里，不产生全局变量，也避免变量名冲突的风险，这是维护遗留代码必须谨记的。

下面是综合上面四点的改良版（只针对第1份代码）：

```javascript
(() => {
    var ndContainer = document.getElementById('js-list');
    if (!ndContainer) {
        return;
    }

    for (var i = 0; i < 3; i++) {
        var ndItem = document.createElement('li');
        ndItem.innerText = i + 1;
        ndContainer.appendChild(ndItem);
    }
})();
```

在候选人给出代码之后，笔者常顺便追问：选取节点是否有其他方法？还有哪些？这个问题留给你自己。

## 追问1：如何绑定事件？

现在页面上有了内容，接下来添加交互。问题：要当每个 `<li>` 被单击的时候 `alert` 里面的内容，该怎么做？部分候选人不假思索地给出如下代码：

```javascript
//...
for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(i);
    });
    ndContainer.appendChild(ndItem);
}
//...
```

或下面的代码：

```javascript
//...
for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(ndItem.innerText);
    });
    ndContainer.appendChild(ndItem);
}
//...
```

如果你对闭包和作用域理解没问题，就很容易发现问题：`alert` 出来的内容其实都是 `3`，而不是每个 `<li>` 的文本内容。上面两段代码都不能满足需求，因为 `i` 和 `ndItem` 的作用域范围是相同的。使用 ES6 的[块级作用域][2]能把问题解决：

```javascript
//...
for (let i = 0; i < 3; i++) {
    const ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(i);
    });
    ndContainer.appendChild(ndItem);
}
//...
```

而熟悉 [`addEventListener`][3] 文档的候选人会给出下面的方法：

```javascript
//...
for (var i = 0; i < 3; i++) {
    var ndItem = document.createElement('li');
    ndItem.innerText = i + 1;
    ndItem.addEventListener('click', function () {
        alert(this.innerText);
    });
    ndContainer.appendChild(ndItem);
}
//...
```

因为 `EventListener` 里面默认的 `this` 指向当前节点，比较喜欢使用箭头函数的同学则需要格外注意，因为箭头函数会强制改变函数的执行上下文。笔者的判断标准是到这里算几个，你及格了么？

聊到这里，笔者有时候还会追问：绑定事件除了 `addEventListener` 还有其他方式么？如果使用 `onclick` 会存在什么问题？

## 追问2：数据量变大之后？

貌似上面的问题都没啥挑战，别着急，难度继续增加。如果要插入的 `<li>` 是 300 个，该怎么解决？

部分同学会粗暴的把循环终止条件修改为 `i < 300`，这样没有明显的问题，但细想你会发现，在 DOM 中注册的事件监听函数增加了 100 倍，有更好的办法么？读到这里你肯定已经想到了，对，就是[事件委托][4]（英文 Event Delegation，亦称事件代理）。

使用事件委托能有效的减少事件注册的数量，并且在子节点动态增减是无需修改代码，使用事件委托的代码如下：

```javascript
(() => {
    var ndContainer = document.getElementById('js-list');
    if (!ndContainer) {
        return;
    }

    for (let i = 0; i < 300; i++) {
        const ndItem = document.createElement('li');
        ndItem.innerText = i + 1;
        ndContainer.appendChild(ndItem);
    }

    ndContainer.addEventListener('click', function (e) {
        const target = e.target;
        if (target.tagName === 'LI') {
            alert(target.innerHTML);
        }
    });
})();
```

如果你不知道事件委托是什么、实现原理是什么、使用它有什么好处，请花点时间去研究下，能让你写出更好的代码，遇到没听过事件委托的候选人我会追问“标准 DOM 事件的发生流程”，如果熟悉，再引导他理解事件委托，直到写出代码，这个过程能看出来候选人思维是否灵活。

回到正题，相当部分的代码在数据量变大之后容易出各种问题。如果要在 `<ul>` 中插入 30000 个 `<li>`，会有什么问题？代码需要怎么改进？几乎可以肯定，页面体验不再流畅，甚至会出现明显的卡顿感，该怎么解决？

出现卡顿感的主要原因是每次循环都会修改 DOM 结构，外加大循环执行时间过长，浏览器的渲染帧率（FPS）过低。而实际上，包含 30000 个 `<li>` 的长列表，用户不会立即看到全部，大部分甚至根本都不会看，那部分都没有渲染的必要，好在现代浏览器提供了 [requestAnimationFrame][5] API 来解决非常耗时的代码段对渲染的阻塞问题，不知道 `requestAnimationFrame` 用法和原理的请研究下[这篇文章][6]，该技术在 [React][14] 和 [Angular][15] 里面都有使用，如果你理解了 `requestAnimationFrame` 的原理，就很容易理解最新的 [React Fiber 算法][17]。

综合上面的分析，可以从减少 DOM 操作次数、缩短循环时间两个方面减少主线程阻塞的时间。减少 DOM 操作次数的良方是 [DocumentFragment][7]；而缩短循环时间则需要考虑使用**分治**的思想把 30000 个 `<li>` 分批次插入到页面中，每次插入的时机是在页面重新渲染之前。由于 `requestAnimationFrame` 并不是所有的浏览器都支持，Paul Irish 给出了对应的 [polyfill][8]，这个 Gist 也非常值得你学习。

下面是完整的代码示例：

```javascript
(() => {
    const ndContainer = document.getElementById('js-list');
    if (!ndContainer) {
        return;
    }

    const total = 30000;
    const batchSize = 4; // 每批插入的节点次数，越大越卡
    const batchCount = total / batchSize; // 需要批量处理多少次
    let batchDone = 0;  // 已经完成的批处理个数

    function appendItems() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < batchSize; i++) {
            const ndItem = document.createElement('li');
            ndItem.innerText = (batchDone * batchSize) + i + 1;
            fragment.appendChild(ndItem);
        }

        // 每次批处理只修改 1 次 DOM
        ndContainer.appendChild(fragment);

        batchDone += 1;
        doBatchAppend();
    }

    function doBatchAppend() {
        if (batchDone < batchCount) {
            window.requestAnimationFrame(appendItems);
        }
    }

    // kickoff
    doBatchAppend();

    ndContainer.addEventListener('click', function (e) {
        const target = e.target;
        if (target.tagName === 'LI') {
            alert(target.innerHTML);
        }
    });
})();
```

读到这里的同学，应该已经理解这一节讨论的要点：大批量 DOM 操作对页面渲染的影响以及优化的手段，性能对用户来说是功能不可分割的部分。

## 追问3：DOM 树的遍历？

数据结构和算法在很多人前端同学看来是没啥用的东西，实际上他们掌握的也不好，但不论前端还是后端，扎实的 CS 基础是工程师必备的知识储备，有了这种储备在面临复杂的问题，才能彰显出工程师的价值。JS 中的 DOM 可以天然的跟[树][16]这种数据结构联系起来，相信大家都不陌生，比如给定下面的 HTML 片段：

```html
<div class="root">
    <div class="container">
        <section class="sidebar">
            <ul class="menu"></ul>
        </section>
        <section class="main">
            <article class="post"></article>
            <p class="copyright"></p>
        </section>
    </div>
</div>
```

对这颗 DOM 树，期望给出[广度优先遍历（BFS）][9]的代码实现，遍历到每个节点时，打印出当前节点的类型及类名，例如上面的树广度优先遍历结果为：

```bash
DIV .root
DIV .container
SECTION .sidebar
SECTION .main
UL .menu
ARTICLE .post
P .copyright
```

这要求候选人对 DOM 树中节点关系的表示方式比较清楚，关键属性是 [childNodes][10] 和 [children][11]，两者有细微的差别。如果是[深度优先的遍历（DFS）][20]，使用[递归][18]非常容易写出来，但是广度优先则需要使用[队列][19]这种数据结构来管理待遍历的节点，读到这里，请你找出纸笔，思考 1 分钟，看能不能自己写出来。

下面给出一种参考的实现，代码比较简单，就不多做解释：

```javascript
const traverse = (ndRoot) => {
    const queue = [ndRoot];

    while (queue.length) {
        const node = queue.shift();

        printInfo(node);

        if (!node.children.length) {
            continue;
        }

        Array.from(node.children).forEach(x => queue.push(x));
    }
};

const printInfo = (node) => {
    console.log(node.tagName, `.${node.className}`);
};

// kickoff
traverse(document.querySelector('.root'));
```

如果你对树和树的遍历理解不清，请仔细看上文的外链。最后，再追问一个问题，如果要在打印节点的时候输出节点在树中的层次，该怎么解决？

## 总结和思考题

本文以基本的 DOM 操作为出发点，接下来聊到事件绑定，和渲染性能优化，最后聊到工程师避不开的数据结构和算法。如果你是面试官，你会怎么跟候选人聊？如果你想学好 DOM，只看这篇文章远远不够，文中给大家留了 3 道思考题，也外链超过 10 个学习资料，希望对大家有用。

## One More Thing

本文作者王仕军，商业转载请联系作者获得授权，非商业转载请注明出处。如果你觉得本文对你有帮助，请点赞！如果对文中的内容有任何疑问，欢迎留言讨论。想知道我接下来会写些什么？欢迎订阅我的[掘金专栏][22]或知乎专栏：[《前端周刊：让你在前端领域跟上时代的脚步》][23]。

[1]:	https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
[2]:	https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
[3]:	https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[4]:	https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
[5]:	https://css-tricks.com/using-requestanimationframe/
[6]:	http://creativejs.com/resources/requestanimationframe/
[7]:	https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
[8]:	https://gist.github.com/paulirish/1579671
[9]:	https://en.wikipedia.org/wiki/Breadth-first_search
[10]:	https://developer.mozilla.org/en-US/docs/Web/API/ChildNode
[11]:	https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
[12]:	https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
[13]: https://en.wikipedia.org/wiki/Defensive_programming
[14]: https://github.com/facebook/react/search?q=requestAnimationFrame
[15]: https://github.com/angular/angular.js/search?q=requestAnimationFrame
[16]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[17]: https://www.youtube.com/watch?v=ZCuYPiUIONs
[18]: https://en.wikipedia.org/wiki/Recursion_(computer_science)
[19]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[20]: https://en.wikipedia.org/wiki/Depth-first_search
[21]: https://juejin.im/post/58f1fa6a44d904006cf25d22
[22]: https://juejin.im/user/57a7f634d342d300576b738d
[23]: https://zhuanlan.zhihu.com/feweekly
