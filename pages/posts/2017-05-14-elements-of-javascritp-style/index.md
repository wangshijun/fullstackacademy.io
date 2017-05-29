---
title: "编码如作文：写出高可读 JS 的 7 条原则"
date: "2017-05-14T22:12:03.284Z"
layout: post
path: "/posts/elements-of-javascript-style/"
cover: "/posts/elements-of-javascript-style/cover.png"
category: "tooling"
description: "好的程序员写出来的代码就如同优美的诗赋，给阅读的人带来非常愉悦的享受。我们怎么能达到那样的水平？要搞清楚这个问题，先看看好的文章是怎么写出来的。"
---

![](./cover.png)

> 编译自 [Eric Elliott][0] 的[文章][7]，好的程序员写出来的代码就如同优美的诗赋，给阅读的人带来非常愉悦的享受。我们怎么能达到那样的水平？要搞清楚这个问题，先看看好的文章是怎么写出来的。

William Strunk 在 1920 年出版的[《The Elements of Style》][1] 一书中列出了写出好文章的 7 条原则，过了近一个世纪，这些原则并没有过时。对于工程师来说，代码是写一遍、修改很多遍、阅读更多遍的重要产出，可读性至关重要，我们可以用这些写作原则指导日常的编码，写出高可读的代码。

需要注意的是，这些原则并不是法律，如果违背它们能让代码可读性更高，自然是没问题的，但我们需要保持警惕和自省，因为这些久经时间考验的原则通常是对的，我们最好不要因为奇思异想或个人偏好而违背这些原则。

7 条写作原则如下：

1. 让段落成为写作的基本单位，每个段落只说 1 件事情；
2. 省略不必要的词语；
3. 使用主动式；
4. 避免连串的松散句子；
5. 把相关内容放在一起；
6. 多用肯定语句；
7. 善用平行结构；

对应的，在编码时：

1. 让函数成为编码的基本单位，每个函数只做 1 件事情；
2. 省略不必要的代码；
3. 使用主动式；
4. 避免连串的松散表达式；
5. 把相关的代码放在一起；
6. 多用肯定语句；
7. 善用平行结构；

## 1. 让函数成为编码的基本单位，每个函数只做 1 件事情

> The essence of software development is composition. We build software by composing modules, functions, and data structures together.

软件开发的本质是组合，我们通过组合模块、函数、数据结构来构造软件。理解如何编写和组合函数是软件工程师的基本技能。模块通常是一个或多个函数和数据结构的集合，而数据结构是我们表示程序状态的方法，但是在我们调用一个函数之前，通常什么也不会发生。在 JS 中，我们可以把函数分为 3 种：

* I/O 型函数 (Communicating Functions)：进行磁盘或者网络 I/O；
* 过程型函数 (Procedural Functions)：组织指令序列；
* 映射型函数 (Mapping Functions)：对输入进行计算、转换，返回输出；

虽然有用的程序都需要 I/O，大多数程序都会有过程指令，程序中的大多数函数都会是映射型函数：给定输入时，函数能返回对应的输出。

**每个函数只做一件事情**: 如果你的函数是做网络请求（I/O 型）的，就不要在其中混入数据转换的代码（映射型）。如果严格按照定义，过程型函数很明显违背了这条原则，它同时也违背了另外一条原则：避免连串的松散表达式。

理想的函数应该是简单的、确定的、纯粹的：

* 输入相同的情况下，输出始终相同；
* 没有任何副作用；

关于纯函数的更多内容可以参照[这里][3]。

## 2. 省略不必要的代码

> “Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. This requires not that the writer make all sentences short, or avoid all detail and treat subjects only in outline, but that every word tell.”

简洁的代码对软件质量至关重要，因为更多的代码等同于更多的 bug 藏身之所，换句话说：**更少的代码 = 更少的 bug 藏身之所 = 更少的 bug**。

简洁的代码读起来会更清晰，是因为它有更高的信噪比 (Signal-to-Noise Ratio)：阅读代码时更容易从较少的语法噪音中筛选出真正有意义的部分，可以说，**更少的代码 = 更少的语法噪音 = 更高的信号强度**

借用《The Elements of Style》中的原话：简洁的代码更有力，比如下面的代码：

```javascript
function secret (message) {
    return function () {
        return message;
    }
};
```

可以被简化为：

```javascript
const secret = msg => () => msg;
```

显然，对熟悉箭头函数的同学来说，简化过的代码可读性更好，因为它省略了不必要的语法元素：花括号、`function` 关键字、`return` 关键字。而简化前的代码包含的语法要素对于传达代码意义本身作用并不大。当然，如果你不熟悉 ES6 的语法，这对你来说可能显得比较怪异，但 ES6 从 2015 年之后已经成为新的语言标准，如果你还不熟悉，是时候[去升级了][2]。

### 省略不必要的变量

我们常常忍不住去给实际上不需要命名的东西强加上名字。问题在于人的[工作记忆是有限的][4]，阅读代码时，每个变量都会占用工作记忆的存储空间。因为这个原因，有经验的程序员会尽可能的消除不必要的变量命名。

比如，在大多数情况下，你可以不用给只是作为返回值的变量命名，函数名应该足够说明你要返回的是什么内容，考虑下面的例子：

```javascript
// 稍显累赘的写法
const getFullName = ({firstName, lastName}) => {
  const fullName = firstName + ' ' + lastName;
  return fullName;
};

// 更简洁的写法
const getFullName = ({firstName, lastName}) => (
  firstName + ' ' + lastName
);
```

减少变量的另外一种方法是利用 [point-free-style](http://stackoverflow.com/questions/944446/what-is-point-free-style-in-functional-programming)，这是函数式编程里面的概念。

**point-free-style** 是不引用函数所操作参数的一种函数定义方式，实现 **point-free-style** 的常见方法包括[函数组合(function composotion)](https://en.wikipedia.org/wiki/Function_composition)和[函数科里化(function currying)](https://en.wikipedia.org/wiki/Currying)。

先看函数科里化的例子：

```javascript
const add = a => b => a + b;

// Now we can define a point-free inc()
// that adds 1 to any number.
const inc = add(1);

inc(3); // 4
```

细心的同学会发现并没有使用 `function` 关键字或者箭头函数语法来定义 `inc` 函数。`add` 也没有列出所 `inc` 需要的参数，因为 `add` 函数自己内部不需要使用这些参数，只是返回了能自己处理参数的新函数。

**函数组合**是指把一个函数的输出作为另一个函数输入的过程。不管你有没有意识到，你已经在频繁的使用函数组合了，链式调用的代码基本都是这个模式，比如数组操作时使用的 `map`，`Promise` 操作时的 `then`。函数组合在函数式语言中也被称之为高阶函数，其基本形式为：`f(g(x))`。

把两个函数组合起来的时候，就消除了把中间结果存在变量中的需要，下面来看看函数组合让代码变简洁的例子：

先定义两个基本操作函数：

```javascript
const g = n => n + 1;
const f = n => n * 2;
```

我们的计算需求是：给定输入，先对其 +1，再对结果 x2，普通做法是：

```javascript
// 需要操作参数、并且存储中间结果
const incThenDoublePoints = n => {
  const incremented = g(n);
  return f(incremented);
};

incThenDoublePoints(20); // 42
```

使用函数组合的写法是：

```javascript
// 接受两个函数作为参数，直接返回组合
const compose = (f, g) => x => f(g(x));
const incThenDoublePointFree = compose(f, g);
incThenDoublePointFree(20); // 42
```

使用[仿函数 (funcot) ][5]也能实现类似的效果，在仿函数中把参数封装成可遍历的数组，然后使用 `map` 或者 Promise 的 `then` 实现链式调用，具体的代码如下：

```javascript
const compose = (f, g) => x => [x].map(g).map(f).pop();
const incThenDoublePointFree = compose(f, g);
incThenDoublePointFree(20); // 42
```

如果你选择使用 Promise 链，代码看起来也会非常的像。

基本所有提供函数式编程工具的库都提供至少 2 种函数组合模式：

* compose：从右向左执行函数；
* pipe：从左向右执行函数；

`lodash` 中的 `compose()` 和 `flow()` 分别对应这 2 种模式，下面是使用 `flow()` 的例子：

```javascript
import pipe from 'lodash/fp/flow';
pipe(g, f)(20); // 42
```

如果不用 `lodash`，用下面的代码也可以实现相同的功能：

```javascript
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
pipe(g, f)(20); // 42
```

如果上面介绍的函数组合你觉得很异类，并且你不确定你会怎么使用它们，请仔细思考下面这句话：

> The essence of software development is composition. We build applications by composing smaller modules, functions, and data structures.

从这句话，我们不难推论，理解函数和对象的组合方式对工程师的重要程度就像理解电钻和冲击钻对搞装修的人重要程度。当你使用命令式代码把函数和中间变量组合在一起的时候，就如同使用胶带把他们强行粘起来，而函数组合的方式看起来更自然流畅。

在不改变代码作用，不降低代码可读性的情况下，下面两条是永远应该谨记的：

* 使用更少的代码；
* 使用更少的变量；

## 3. 使用主动式

> “The active voice is usually more direct and vigorous than the passive.”

主动式通常比被动式更直接、有力，变量命名时要尽可能的直接，不拐弯抹角，例如：

* `myFunction.wasCalled()` 优于 `myFunction.hasBeenCalled()`；
* `createUser() 优于 `User.create()`；
* `notify()` 优于 `Notifier.doNotification()`；

命名布尔值时将其当做只有 “是” 和 “否” 两种答案的问题来命名：

* `isActive(user)` 优于 `getActiveStatus(user)`；
* `isFirstRun = false;` 优于 `firstRun = false`;

函数命名时尽可能使用动词：

* `increment()` 优于 `plusOne()`
* `unzip()` 优于 `filesFromZip()`
* `filter(fn, array)` 优于 `matchingItemsFromArray(fn, array)`

事件监听函数（Event Handlers）和生命周期函数（Licecycle Methods）比较特殊因为他们更大程度是用来说明什么时候该执行而不是应该做什么，它们的命名方式可以简化为："<时机>，<动词>"。

下面是事件监听函数的例子：

* `element.onClick(handleClick)` 优于 `element.click(handleClick)`
* `component.onDragStart(handleDragStart)` 优于 `component.startDrag(handleDragStart)`

仔细审视上面两例的后半部分，你会发现，它们读起来更像是在触发事件，而不是对事件做出响应。

至于生命周期函数，考虑 React 中组件更新之前应该调用的函数该怎么命名：

* componentWillBeUpdated(doSomething)
* componentWillUpdate(doSomething)
* beforeUpdate(doSomething)

`componentWillBeUpdated` 用了被动式，意指将要被更新，而不是将要更新，有些饶舌，明显不如后面两个好。

`componentWillUpdate` 更好点，但是这个命名更像是去调用 `doSomething`，我们的本意是：在 Component 更新之前，调用 `doSomething`，`beforeComponentUpdate` 能更清晰的表达我们的意图。

进一步简化，因为这些生命周期方法都是 Component 内置的，在方法中加上 Component 显得多余，可以脑补下直接在 Componenent 实例上调用这个方法的语法：`component.componentWillUpdate`，我们不需要把主语重复两次。显然，`component.beforeUpdate(doSomething)` 比 `component.beforeComponentUpdate(doSomething)` 更直接、简洁、准确。

还有一种函数叫 `[Functional Mixins][8]`，它们就像装配流水线给传进来的对象加上某些方法或者属性，这种函数的命名通常会使用形容词，如各种带 `"ing"` 或 `"able"` 后缀的词汇，示例：

```javascript
const duck = composeMixins(flying, quacking);   // 会像鸭子叫
const box = composeMixins(iterable, mappable);  // 可遍历的
```

## 4. 避免连串的松散表达式

> “…a series soon becomes monotonous and tedious.”

连串的松散代码常常会变的单调乏味，而把不强相关但按先后顺序执行的语句组合到过程式的函数中很容易写出[意大利面式的代码(spaghetti code)][9]。这种写法常常会重复很多次，即使不是严格意义上的重复，也只有细微的差别。

比如，界面上的不同组件之间几乎共享完全相同的逻辑结构，考虑下面的例子：

```javascript
const drawUserProfile = ({ userId }) => {
  const userData = loadUserData(userId);
  const dataToDisplay = calculateDisplayData(userData);
  renderProfileData(dataToDisplay);
};
```

`drawUserProfile` 函数实际上做了 3 件不同的事情：加载数据、根据数据计算视图状态、渲染视图。在大多数现代的前端框架里面，这 3 件事情都做了很好的分离。通过把关注点分离，每个关注点的扩展和组合方式就多了很多。

比如说，我们可以把渲染部分完全替换掉而不影响程序的其他部分，实例就是 React 家族的各种渲染引擎：ReactNative 用来在 iOS 和 Android 中渲染 APP，AFrame 来渲染 WebVR，ReactDOM/Server 来做服务端渲染。

`drawUserProfile` 函数的另一个问题是：在数据加载完成之前，没有办法计算视图状态完成渲染，如果数据已经在其他地方加载过了会怎么样，就会做很多重复和浪费的事情。

关注点分离的设计能够使每个环节能够被独立的测试，我喜欢为应用添加单元测试，并在每次修改代码时查看测试结果。试想，如果把数据获取和视图渲染代码写在一起，单元测试将会变的困难，要么需要传入伪造的数据，要么转而采用比较笨重的 E2E 测试，而后者通常比较难立即给反馈，因为它们的运行比较耗时。

在使用 React 的场景下，`drawUserProfile` 中已经有了 3 个独立的函数可以接入到 Component 生命周期方法上，数据加载可以在 Component 挂载之后触发，而数据计算和渲染则可以在视图状态发生变化时触发。结果是，程序不同部分的职责被做了清晰的划分，每个 Component 都有相同的结构和生命周期方法，这样的程序运行起来会更稳定，我们也会少很多重复的代码。

## 5. 把相关代码放在一起

很多框架和项目脚手架都规定了按代码类别来组织文件的方式，如果仅仅是开发一个简单的 TODO 应用，这样做无可厚非，但是在大型项目中，按照业务功能去组织代码通常更好。可能很多同学会忽略代码组织与代码可读性的关系，想想看是否接手过看了半天还不知道自己要修改的代码在哪里的项目呢？是什么原因造成的？

下面分别是按代码类别和业务功能来组织一个 TODO 应用代码的两种方式：

**按代码类别组织**

```
├── components
│   ├── todos
│   └── user
├── reducers
│   ├── todos
│   └── user
└── tests
    ├── todos
    └── user
```

**按业务功能组织**

```
├── todos
│   ├── component
│   ├── reducer
│   └── test
└── user
    ├── component
    ├── reducer
    └── test
```

当按业务功能组织代码的时候，我们修改某个功能的时候不用在整个文件树上跳来跳去的找代码了。关于代码组织，《The Art of Readable Code》中也有部分介绍，感兴趣的同学可以去阅读。

## 6. 多用肯定语句

> “Make definite assertions. Avoid tame, colorless, hesitating, non-committal language. Use the word _> not_>  as a means of denial or in antithesis, never as a means of evasion.”

要做出确定的断言，避免使用温顺、无色、犹豫的语句，必要时使用 `not` 来否定、拒绝或逃避。典型的：

* `isFlying` 优于 `isNotFlying`
* `late` 优于 `notOnTime`

### If 语句

先处理错误情况，而后处理正常逻辑：

```javascript
if (err) return reject(err);
// do something...
```

优于先处理正常后处理错误：（对错误取反的判断读起来确实累）

```javascript
if (!err) {
  // ... do something
} else {
  return reject(err);
}
```

### 三元表达式

把肯定的放在前面：

```javascript
{
  [Symbol.iterator]: iterator ? iterator : defaultIterator
}
```

优于把否定的放在前面（有个设计原则叫 Do not make me think，用到这里恰如其分）：

```javascript
{
  [Symbol.iterator]: (!iterator) ? defaultIterator : iterator
}
```

### 恰当的使用否定

有些时候我们只关心某个变量是否缺失，如果使用肯定的命名会强迫我们对变量取反，这种情况下使用 "not" 前缀和取反操作符不如使用否定语句直接，比如：

* `if (missingValue)` 优于 `if (!hasValue)`
* `if (anonymous)` 优于 `if (!user)`
* `if (isEmpty(thing))` 优于 `if (notDefined(thing))`

### 善用命名参数对象

不要期望函数调用者传入 undefined、null 来填补可选参数，要学会使用命名的参数对象，比如：

```javascript
const createEvent = ({
  title = 'Untitled',
  timeStamp = Date.now(),
  description = ''
}) => ({ title, description, timeStamp });

// later...
const birthdayParty = createEvent({
  title: 'Birthday Party',
  description: 'Best party ever!'
});
```

就比下面这种形式好：

```javascript
const createEvent = (
  title = 'Untitled',
  timeStamp = Date.now(),
  description = ''
) => ({ title, description, timeStamp });

// later...
const birthdayParty = createEvent(
  'Birthday Party',
  undefined, // 要尽可能避免这种情况
  'Best party ever!'
);
```

## 7. 善用平行结构

> “…parallel construction requires that expressions of similar content and function should be outwardly similar. The likeness of form enables the reader to recognize more readily the likeness of content and function.”

[平行结构][10]是语法中的概念，英语中的平行结构指：内容相似、结构相同、无先后顺序、无因果关系的并列句。不管是设计模式还是编程范式，都可以放在这个范畴中思考和理解，如果有重复，就肯定有模式，平行结构对阅读理解非常重要。

软件开发中遇到的绝大多数问题前人都遇到并解决过，如果发现在重复做同样的事情，是时候停下来做抽象了：找到相同的地方，构建一个能够很方便的添加不同的抽象层，很多库和框架的本质就是在做这类事情。

组件化是非常不错的例子：10 年前，使用 jQuery 写出把界面更新、应用逻辑和数据加载混在一起的代码是再常见不过的，随后人们意识到，我们可以把 MVC 模式应用到客户端，于是就开始从界面更新中剥离数据层。最后，我们有了组件化这个东西，有了组件化，我们就能用完全相同的方式去表达所有组件的更新逻辑、生命周期，而不用再写一堆命令式的代码。

对于熟悉组件化概念的同学，很容易理解组件是如何工作的：部分代码负责声明界面、部分负责在组件生命周期做我们期望它做的事情。当我们在重复的问题上使用相同的编码模式，熟悉这种模式的同学很快就能理解代码在干什么。

## 总结：代码应该简单而不是过于简化

> Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts. **This requires not that the writer make all sentences short, or avoid all detail and treat subjects only in outline, but that every word tell.**

简洁的代码是有力的，它不应该包含不必要的变量、语法结构，不要求程序员一定要把代码写的最短，或者省略很多细节，而是要求代码中出现的每个变量、函数都能清晰、直观的传达我们的意图和想法。

代码应该是简洁的，因为简洁的代码更容易写（通常代码量更少）、更容易读、更好维护，简洁的代码就是更难出 bug、更容易调试的代码。bug 修复通常会费时费力，而修复过程可能引发更多的 bug，修复 bug 也会影响正常的开发进度。

认为写出熟悉的代码才是可读性更高的代码的同学，实际上是大错特错，可读性高的代码必然是简洁和简单的，虽然 ES6 早在 2015 年已经成为新的标准，但到了 2017 年，还是有很多同学不会使用诸如箭头函数、隐式 return、rest 和 spread 操作符之类的简洁语法。对新语法的熟悉需要不断的练习，投入时间去学习和熟悉新语法以及函数组合的思想和技术，熟悉之后，就会发现代码原来还可以这样写。

最后需要注意的是，代码应该简洁，而不是过于简化。


[0]: https://twitter.com/_ericelliott
[1]: https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X/ref=as_li_ss_tl?ie=UTF8&qid=1493260884&sr=8-1&keywords=the+elements+of+style&linkCode=ll1&tag=eejs-20&linkId=f7eb0eacba0eab243899626551113119
[2]: https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75
[3]: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976
[4]: http://www.nature.com/neuro/journal/v17/n3/fig_tab/nn.3655_F2.html
[5]: https://medium.com/javascript-scene/functors-categories-61e031bac53f
[6]: https://ericelliottjs.com/product/lifetime-access-pass/
[7]: https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f
[8]: http://raganwald.com/2015/06/17/functional-mixins.html
[9]: https://en.wikipedia.org/wiki/Spaghetti_code
[10]: http://baike.baidu.com/link?url=49YTxXCu-zozWdvIe044c30N9MZVCixDsg9LLy4-qCMyesdRgg-UlPmRupCpkj39ZE34ekcFzd01vhJfWByfa9V_Mu-xlXWdch-pUER2EVIShApsmNCPxj00C6IyjDnJ
