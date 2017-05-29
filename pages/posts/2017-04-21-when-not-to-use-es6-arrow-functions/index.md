---
title: "什么时候你不能使用箭头函数？"
date: "2017-04-21T22:12:03.284Z"
layout: post
path: "/posts/when-not-to-use-arrow-functions/"
cover: "/posts/when-not-to-use-arrow-functions/cover.jpeg"
category: "tooling"
description: "共 2000 字，读完需 5 分钟。编译自 Dmitri Pavlutin 的文章，对原文内容做了精简和代码风格优化。ES6 中引入的箭头函数可以让我们写出更简洁的代码，但是部分场景下使用箭头函数会带来严重的问题，有哪些场景？会导致什么问题？该怎么解决，容我慢慢道来。"
---

![cover](./cover.jpeg)

> 共 2000 字，读完需 5 分钟。编译自 [Dmitri Pavlutin][0] 的[文章][20]，对原文内容做了精简和代码风格优化。ES6 中引入的箭头函数可以让我们写出更简洁的代码，但是部分场景下使用箭头函数会带来严重的问题，有哪些场景？会导致什么问题？该怎么解决，容我慢慢道来。

能见证每天在用的编程语言不断演化是一件让人非常兴奋的事情，从错误中学习、探索更好的语言实现、创造新的语言特性是推动编程语言版本迭代的动力。JS 近几年的变化就是最好的例子， 以 [ES6][1] 引入的箭头函数（arrow functions）、class 等特性为代表，把 JS 的易用性推到了新的高度。

关于 ES6 中的箭头函数，网上有很多文章解释其作用和语法，如果你刚开始接触 ES6，可以从[这里][3]开始。任何事物都具有两面性，语言的新特性常常被误解、滥用，比如箭头函数的使用就存在很多误区。接下来，笔者会通过实例介绍该避免使用箭头函数的场景，以及在这些场景下该如何使用[函数表达式（function expressions）][4]、函数声明或者[方法简写（shorthand method）][5]来保障代码正确性和可读性。

## 1. 定义对象方法

JS 中对象方法的定义方式是在对象上定义一个指向函数的属性，当方法被调用的时候，方法内的 `this` 就会指向方法所属的对象。

### 定义字面量方法

因为箭头函数的语法很简洁，可能不少同学会忍不住用它来定义字面量方法，比如下面的例子 [JS Bin][6]：

```javascript
const calculator = {
    array: [1, 2, 3],
    sum: () => {
        console.log(this === window); // => true
        return this.array.reduce((result, item) => result + item);
    }
};

console.log(this === window); // => true

// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculator.sum();
```

`calculator.sum` 使用箭头函数来定义，但是调用的时候会抛出 `TypeError`，因为运行时 `this.array` 是未定义的，调用 `calculator.sum` 的时候，执行上下文里面的 `this` 仍然指向的是 `window`，原因是箭头函数把函数上下文绑定到了 `window` 上，`this.array` 等价于 `window.array`，显然后者是未定义的。

解决的办法是，使用[函数表达式][4]或者[方法简写（ES6 中已经支持）][5]来定义方法，这样能确保 `this` 是在运行时是由包含它的上下文决定的，修正后的代码如下 [JS Bin][7]：

```javascript
const calculator = {
    array: [1, 2, 3],
    sum() {
        console.log(this === calculator); // => true
        return this.array.reduce((result, item) => result + item);
    }
};
calculator.sum(); // => 6
```

这样 `calculator.sum` 就变成了普通函数，执行时 `this` 就指向 `calculator` 对象，自然能得到正确的计算结果。

### 定义原型方法

同样的规则适用于原型方法（prototype method）的定义，使用箭头函数会导致运行时的执行上下文错误，比如下面的例子 [JS Bin][8]：

```javascript
function Cat(name) {
    this.name = name;
}

Cat.prototype.sayCatName = () => {
    console.log(this === window); // => true
    return this.name;
};

const cat = new Cat('Mew');
cat.sayCatName(); // => undefined
```

使用传统的函数表达式就能解决问题 [JS Bin][9]：

```javascript
function Cat(name) {
    this.name = name;
}

Cat.prototype.sayCatName = function () {
    console.log(this === cat); // => true
    return this.name;
};

const cat = new Cat('Mew');
cat.sayCatName(); // => 'Mew'
```

`sayCatName` 变成普通函数之后，被调用时的执行上下文就会指向新创建的 `cat` 实例。

## 2. 定义事件回调函数

`this` 是 JS 中很强大的特性，可以通过多种方式改变函数执行上下文，JS 内部也有几种不同的默认上下文指向，但普适的规则是在谁上面调用函数 `this` 就指向谁，这样代码理解起来也很自然，阅起来就像在说，某个对象上正在发生某件事情。

但是，箭头函数在声明的时候就绑定了执行上下文，要动态改变上下文是不可能的，在需要动态上下文的时候它的弊端就凸显出来。比如在客户端编程中常见的 DOM 事件回调函数（event listenner）绑定，触发回调函数时 `this` 指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用，比如下面这段代码试图使用箭头函数来作事件回调函数 [JS Bin][10]：

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});
```

在全局上下文下定义的箭头函数执行时 `this` 会指向 `window`，当单击事件发生时，浏览器会尝试用 `button` 作为上下文来执行事件回调函数，但是箭头函数预定义的上下文是不能被修改的，这样 `this.innerHTML` 就等价于 `window.innerHTML`，而后者是没有任何意义的。

使用函数表达式就可以在运行时动态的改变 `this`，修正后的代码 [JS Bin][11]：

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log(this === button); // => true
    this.innerHTML = 'Clicked button';
});
```

当用户单击按钮时，事件回调函数中的 `this` 实际指向 `button`，这样的 `this.innerHTML = 'Clicked button'` 就能按照预期修改按钮中的文字。

## 3. 定义构造函数

构造函数中的 `this` 指向新创建的对象，当执行 `new Car()` 的时候，构造函数 `Car` 的上下文就是新创建的对象，也就是说 `this instanceof Car === true`。显然，箭头函数是不能用来做构造函数， 实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。

换句话说，箭头构造函数的执行并没有任何意义，并且是有歧义的。比如，当我们运行下面的代码 [JS Bin][12]：

```javascript
const Message = (text) => {
    this.text = text;
};
// Throws "TypeError: Message is not a constructor"
const helloMessage = new Message('Hello World!');
```

构造新的 `Message` 实例时，JS 引擎抛了错误，因为 `Message` 不是构造函数。在笔者看来，相比旧的 JS 引擎在出错时悄悄失败的设计，ES6 在出错时给出具体错误消息是非常不错的实践。可以通过使用[函数表达式][4]或者[函数声明][13] 来声明构造函数修复上面的例子 [JS Bin][14]：

```javascript
const Message = function(text) {
    this.text = text;
};
const helloMessage = new Message('Hello World!');
console.log(helloMessage.text); // => 'Hello World!'
```

## 4. 追求过短的代码

箭头函数允许你省略参数两边的括号、函数体的花括号、甚至 `return` 关键词，这对编写更简短的代码非常有帮助。这是我想起大学计算机老师给学生留过有趣的作业：看谁能使用 C 语言编写出最短的函数来计算字符串的长度，这对学习和探索新语言特性是个不错的法子。但是，在实际的软件工程中，代码写完之后会被很多工程师阅读，真正的 `write one, read many times`，在代码可读性方面，最短的代码可能并不总是最好的。一定程度上，压缩了太多逻辑的简短代码，阅读起来就没有那么直观，比如下面的例子 [JS Bin][15]：

```javascript
const multiply = (a, b) => b === undefined ? b => a * b : a * b;
const double = multiply(2);
double(3);      // => 6
multiply(2, 3); // => 6
```

`multiply` 函数会返回两个数字的乘积或者返回一个可以继续调用的固定了一个参数的函数。代码看起来很简短，但大多数人第一眼看上去可能无法立即搞清楚它干了什么，怎么让这段代码可读性更高呢？有很多办法，可以在箭头函数中加上括号、条件判断、返回语句，或者使用普通的函数 [JS Bin][16]：

```javascript
function multiply(a, b) {
    if (b === undefined) {
        return function (b) {
            return a * b;
        }
    }
    return a * b;
}

const double = multiply(2);
double(3); // => 6
multiply(2, 3); // => 6
```

为了让代码可读性更高，在简短和啰嗦之间把握好平衡是非常有必要的。

## 5. 总结

箭头函数无疑是 ES6 带来的重大改进，在正确的场合使用箭头函数能让代码变的简洁、短小，但某些方面的优势在另外一些方面可能就变成了劣势，在需要动态上下文的场景中使用箭头函数你要格外的小心，这些场景包括：定义对象方法、定义原型方法、定义构造函数、定义事件回调函数。

[0]: https://rainsoft.io:/author/dmitri-pavlutin/
[1]: http://www.ecma-international.org/ecma-262/6.0/
[2]: https://github.com/lukehoban/es6features#introduction
[3]: https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/
[4]: https://developer.mozilla.org/en/docs/web/JavaScript/Reference/Operators/function
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
[6]: http://jsbin.com/nisalub/1/edit?js,console
[7]: http://jsbin.com/nemorup/2/edit?js,console
[8]: http://jsbin.com/yumira/2/edit?js,console
[9]: http://jsbin.com/betara/3/edit?js,console
[10]: http://jsbin.com/sesoda/2/edit?html,js,console,output
[11]: http://jsbin.com/hafibi/4/edit?html,js,console,output
[12]: http://jsbin.com/dazadiw/2/edit?js,console
[13]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function
[14]: http://jsbin.com/qogemo/2/edit?js,console
[15]: http://jsbin.com/xumavu/2/edit?js,console
[16]: http://jsbin.com/huhikem/2/edit?js,console
[17]: http://rainsoft.io/gentle-explanation-of-this-in-javascript/
[18]: http://rainsoft.io/javascript-hoisting-in-details/
[19]: http://rainsoft.io/the-legend-of-javascript-equality-operator/
[20]: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/
