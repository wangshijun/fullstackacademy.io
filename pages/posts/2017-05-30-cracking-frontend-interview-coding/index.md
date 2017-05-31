---
title: "破解前端面试系列（3）：如何搞定纸上代码环节？"
date: "2017-05-30T22:12:03.284Z"
layout: post
path: "/posts/cracking-frontend-interview-coding"
cover: "/posts/cracking-frontend-interview-coding/cover.jpeg"
category: "interview"
description: "很多重视技术的互联网公司在工程师招聘的技术面环节都会要求候选人在纸上写代码（后文用“纸上代码”代称），面试官想通过这种方式考察哪些点？候选人该注意哪些点？本文基于美团早几年常用的一道区分度比较高的面试题来做详细讲解，这道题我现在还在用，面过的人很多，但是纸上代码环节能答到满分的少之又少。"
---

![cover](./cover.jpeg)

> 很多重视技术的互联网公司在工程师招聘的技术面环节都会要求候选人在纸上写代码（后文用“纸上代码”代称），面试官想通过这种方式考察哪些点？候选人该注意哪些点？本文基于美团早几年常用的一道区分度比较高的面试题来做详细讲解，这道题我现在还在用，面过的人很多，但是纸上代码环节能答到满分的少之又少。

> 本文为《破解前端面试》系列文章的第 3 篇，前 2 篇链接在这里：[闭包篇](https://zhuanlan.zhihu.com/p/25855075)、[DOM 篇](https://zhuanlan.zhihu.com/p/26420034)。

## 为什么要纸上代码？

纸上代码（也有可能在白板上写）的做法乍看起来不够人性，但如果你是团队的 Leader，什么样的人能更好的融入团队？如果你是老板，你愿意掏钱养什么样的员工？纸上代码的基本目的就是考察候选人是否具备出活的能力，附带考察候选人是否思路灵活、知识面广。

纸上代码环节怎么考察出活的能力？首先是出活的速度，没有编码基本功的人快速出活的概率是极低的，100% 依赖百度或者 IDE 自动完成才能完成基本任务的工程师算不上合格的工程师；其次是出活的质量，通过编码过程可以了解候选人通过学习和训练积累下来的编码风格、思考方法等；此外，通过纸上代码也可以了解候选人接受和完成任务的主动性，是不是愿意接受任何团队需要完成的任务。

某种程度上说，纸上代码过程就是今后工作的缩影，既然如此，面试时排练下不是挺好的么？

## 纸上代码该怎么做？

通常来说，纸上代码都不会问特别复杂的问题，很可能只是完成非常通用的需求，解决实际遇到的业务问题，或者用某种语言实现某种算法。在提出实际业务问题的代码题之前，面试官会通过部分前置问题了解候选人对解决业务问题所需知识的掌握程度，并在必要的情况下给出知识补充。

比如，前文提到的那道美团的代码题是：不借助第三方库的条件下，用 JS 编写函数从下面的 URL 串中解析出所有的参数：

```
http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled
```

期望的返回结果格式如下：

```javascript
{
  user: 'anonymous',
  id: [123, 456],     // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京',        // 中文
  enabled: true,      // 未指定值的 key 约定值为 true
}
```

对于使用过 Node.js 中的 [`querystring`](https://github.com/nodejs/node/blob/master/lib/querystring.js) 或者社区中的 [`qs`](https://www.npmjs.com/package/qs)、[`uri.js`](https://medialize.github.io/URI.js/) 模块的同学对这个可能再熟悉不过了，而那些不熟 HTTP GET 请求参数携带方式的候选人也不用着急，因为这种情况下面试官会解释 URL 参数的构造规则，至于对网络知识的掌握程度，是另外的关注点了。实际操作中，在我拿出这个问题之前，已经跟候选人聊了比较多的 HTTP 话题了。

### 1. 开始动手前

相当比例的候选人拿到问题，会立即提笔开始写代码，这是面试官最不愿看到的，和学校考试的填空题不同，纸上代码作为综合素质环节，面试官希望看到全面的你，如果工作中也是这样拿到需求不分青红皂白就开搞，最终的结果可能常常是事倍功半。

谋定而后动，**动手前一定要搞清楚问题**。怎样才算是把问题搞清楚了？要清楚输入的特征，是否会出现各种奇怪的输入（脑子里面有这根弦的人通常不会差，但是面试官会小心求证，看看你能想到哪些）；要清楚对解决办法的其他约束条件，比如时间复杂度，空间复杂度。而搞清楚问题的方法就是追问面试官，比如，针对上面的代码，可以追问的问题：

* 未指定值的 key 是否会重复出现？如果重复出现该怎么处理？
* 数字中只包含整数？是否包含浮点数？科学计数法？
* 对代码的性能要求是怎样的？提出这个问题的时候，候选人心中可能已经有多重方法了。

就如同在实际工作中接需求的时候，需要知道需求的边界，各种可能的特殊情况，合作方对于排期的期望，需求中各个要点优先级界定，从决策论的角度来看，掌握更充分的信息，才能让你对技术复杂度、需求排期有更合理的预估，避免在做到一半或做完的时候发现与实际需求不符。

搞清楚问题之后，相信你心中已经有了基本思路，不过动手的时机还没到，你应该把思路介绍给面试官，确认自己是否自己是否忽略了某些要点，这也是展示沟通能力的好机会，知道什么是**有效沟通**的同学应该能明白接收信息后向信源确认的重要性。

需要注意的是，质疑精神强烈的同学在动手前会提很多问题，看起来是好事情，但如果只是停留在质疑层面，不愿意动手，留给面试官的印象就会是你是个挑活的人。在我的招聘经历中就曾遇到过因为觉得代码题要解决的问题没有任何意义而拒绝写代码的人，我没办法只能客气的把他送走。因为，对不认同事物的宽容程度很低的人很容易给团队带来坏味道。

确定了问题边界和解决问题的思路，接下来你可以开始动手编码。

### 2. 编码过程中

解决 QueryString 参数解析问题的思路有好多种，比如字符串线性遍历法、字符串分割法、正则表达式方法，在我面过的人中，用字符串分割法的人最多，下面的讨论我们就围绕这种方法展开。线性遍历法的实现可以参考 Node.js 内置的 querystring 模块。

编码过程中需要考虑哪些要素呢？下面用具体的例子来分析，比如我经常拿到这样的结果代码：

```javascript
function parse(str) {
  var obj = {};
  var ary = str.split('&');
  for (var i = 0; i < ary.length; i++) {
    var tmp = ary[i].split('=');
    if (!obj[tmp[0]]) {
      obj[tmp[0]] = tmp[1] || true;
    } else {
      var tmp2 = [obj[tmp[0]], tmp[1] || true];
      obj[tmp[0]] = tmp2;
    }
  }

  return obj;
}
```

看到这样的代码，相信你也已经皱起了眉头，这段代码在表层、逻辑严谨性、健壮性都存在问题，更严重的是没有满足数值型参数的需求，透过这段代码也可以推断候选人大概率是个不善于学习的人。

#### 表层问题

表层问题主要指代码可读性，评价标准是：是否看起来简洁？是否看一眼就能理解它在做什么？上面的结果有哪些具体的表层问题呢？

* 可读性方面，如果你想在循环体里面要追踪解析到的键值对，需要在大脑中保持映射 `key = tmp[0]`, `value = tmp[1]`；
* 变量命名方面，比如 tmp 的多次使用，ary 代称数组虽然也可以，社区中用 arr 比较多，变量命名多用约定俗成的会更好；

做了表层改进的参考代码如下：

```javascript
function parse(str) {
  var paramObj = {};
  var paramArr = str.split('&');
  for (var i = 0; i < paramArr.length; i++) {
    var tmp = paramArr[i].split('=');
    // 把 key 和 value 单独拆开来，会清晰很多
    var key = tmp[0];
    var value = tmp[1] || true;
    if (!paramObj[key]) {
      paramObj[key] = value;
    } else {
      var newValue = [paramObj[key], value];
      paramObj[key] = newValue;
    }
  }

  return paramObj;
}
```

#### 逻辑问题

逻辑不严谨的代码在不同输入情况下的结果是不稳定的，具体表现为：

* `obj[tmp[0]]` 不能正确判断结果中是否已经存在某个 key，因为可能出现值为 0 的情况；
* 上面的代码不能正确处理重复出现 2 次以上的 key，部分候选人到面试结束还没想明白为啥；
* 按照[规范](https://tools.ietf.org/html/rfc3986#page-14)，URL 中的的各种参数需要在 encode 之后拼接到 URL 中，对应的解析时需要 decode；

解决掉逻辑问题的参考代码如下：

```javascript
function parse(str) {
  var paramObj = {};
  var paramArr = decoeURI(str).split('&');  // 先解码
  for (var i = 0; i < paramArr.length; i++) {
    var tmp = paramArr[i].split('=');
    var key = tmp[0];
    var value = tmp[1] || true;
    if (typeof paramObj[key] === 'undefined') { // 判断 key 是否存在
      paramObj[key] = value;
    } else {
      var newValue = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];  // 正确处理数组
      newValue.push(value);
      paramObj[key] = newValue;
    }
  }

  return paramObj;
}
```

### 健壮问题

整段代码没有做任何的防御性编程，会让它很容报错，哪些地方该做防御性编程是值得拿捏的问题。QueryString 解析函数至少要要求自己的参数是字符串吧？在函数开头增加如下代码会更好：

```javascript
//...
if (typeof str !== 'string') {
  return {};
}
//...
```

#### 需求问题

代码中没有对数字做任何处理，拿到问题就埋头写代码的候选人几乎都有这个问题，这个问题的考点是怎么把能转换成数字的值转成数字。你想好怎么做了么？用 `parseInt`？还是用 `parseFloat`？

下面是能正确处理数字的参考代码：

```javascript
function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }

  var paramObj = {};
  var paramArr = decodeURI(str).split('&');
  for (var i = 0; i < paramArr.length; i++) {
    var tmp = paramArr[i].split('=');
    var key = tmp[0];
    var value = tmp[1] || true;

    // 处理数字：很多人忽略这里的类型判断，布尔值传给 Number 也会解析出数字
    if (typeof value === 'string' && isNaN(Number(value)) === false) {
      value = Number(value);
    }

    if (typeof paramObj[key] === 'undefined') {
      paramObj[key] = value;
    } else {
      var newValue = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];
      newValue.push(value);
      paramObj[key] = newValue;
    }
  }

  return paramObj;
}
```

### 不算问题的问题

下面两点不算是问题，但是如果候选人能做到，无疑是加分项。

* 在 ES6 成为新语言标准的情形下，候选人还在大量的使用 var，虽然并没有错，但是你要有没有更好的方法；
* 可以用更语义化的 JS 数组方法来组织代码，比如 map、reduce，如果你知道的化，在面试中可以大胆使用；

使用 ES6 编写的参考代码如下：

```javascript
function parse(str) {
  if (typeof str !== 'string') {
    return {};
  }

  return decodeURI(str).split('&').map(param => {
    const tmp = param.split('=');
    const key = tmp[0];
    let value = tmp[1] || true;
    if (typeof value === 'string' && isNaN(Number(value)) === false) {
      value = Number(value);
    }

    return { key, value };
  }).reduce((params, item) => {
    const { key, value } = item;
    if (typeof params[key] === 'undefined') {
      params[key] = value;
    } else {
      params[key] = Array.isArray(params[key]) ? params[key] : [params[key]];
      params[key].push(value);
    }

    return params;
  }, {});
}
```

此外，关注前端技术进展的同学可能会注意到部分现代浏览器提供了 [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 的支持，可以用这个特性 1 行代码就搞定需求。

### 3. 编码结束后

代码初版写完之后，不要着急马上展示给面试官，就像是需求开发完，你至少得自己先按需求文档走一遍，把代码原题中的输入代进自己的代码做推演和简单的边界测试，然后再对着代码和面试官讲解。不出意外的话，推演过程你自己会发现部分问题，或者明显的改进点，这些内容你都可以跟面试官提出来，因为这也是展示你的能力的机会。

## 总结

感谢你花时间读到这里，相信你已经理解了通过纸上代码的过程和结果可以深入考察候选人的基本素质、工作方式、出活能力，也知道了在解答代码题的不同环节该注意哪些要点：动手前搞清楚问题；编码时注意编码风格、逻辑严谨性、程序健壮性；编码后要先自己测试和推演。当然，如果你之前没注意到这些，需要接下来工作中多加练习。最后祝你能找到你想要的工作。
