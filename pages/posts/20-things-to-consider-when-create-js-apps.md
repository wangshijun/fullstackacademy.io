# 开发 JS 全栈应用你需要考虑的 20 件事

Node.js 的出现和蓬勃发展让使用 JS 开发一个完整的 WEB 应用成为可能，国内外的很多大的互联网公司都已经在使用 JS 做全栈开发，比如阿里巴巴、PayPal、Nextflix。如果你已经很熟悉 JS，那么使用 JS 来开发一个完整的 WEB 应用就成了自然而然的事情，这里说的完整简单来说就是包含了前后端。本文根据笔者多年来的工程经验来跟你分享开发 JS 全栈应用过程中你需要考虑的 20 件事，期望能对入门的同学有帮助。

![A laptop on a workshop table][2]

## 开始编码之前需要考虑的 5 件事

在正式开始编码之前，花点时间做好框架和技术选型是非常有必要的，这个步骤也就是大家常见到的技术栈选择，技术栈就是你用来构建你的 WEB 应用的工具、技术的集合。

### 1. 选择服务端框架

首先要决定的是该使用哪个 Node.js 服务端框架，如同在 Ruby 环境下选择 Rails 或者在 Python 环境下选择 Django，在 Node.js 环境下，可供你选择的服务端框架不下 30 种，其中比较常用的包括 [Express][4], [Koa][5] and [Hapi][6]，如果你从来没听说过这些框架，在做选型的时候可能会很受挫，因为你不知道哪个是最好的、最合适的，适用的场景如何。很多新入门的同学都会面临这个问题，我的建议是你直接选择一个把他学好，很快你就能知道类似框架需要解决的问题是什么，以及他们是如何解决的。

当然，如果你是完全的新手，我建议直接选择 Express。

### 2. 是否需要创建单页应用？

单页应用（Single Page Application），亦简称为 SPA，是那种只提供一个静态静态 HTML 页面，而用户加载完这个页面之后，在浏览器端跟随用户的浏览情况完全使用 JS 来加载数据、切换页面的应用。单页应用的典型例子如： [Facebook][8] and [Redmart][9]。

非单页应用，即大家常说的网站，传统意义上的 WEB 应用，在用户跳转到不同页面时后端提供完全不同的页面，典型的示例包括： [Twitter][10] and [Delicious][11]。

如果你是第一次尝试创建 JS 全栈应用，建议你选择非单页应用，因为传统 WEB 应用更容易掌握，如果你的基础已经非常牢固，就可以开始尝试单页应用了。

### 3. 选择模板引擎

Template engines are tools that let you feed variables into your HTML code. When creating applications, mastering the use of template engines is a must.

If you decided to create a traditional app, you can choose from (again) [many template engines][12], including [EJS][13], [Nunjucks][14] and [Mustache][15]. As with selecting frameworks, just pick one and go. I recommend Nunjucks if you can’t decide.

If you chose to create a SPA, your choice is pretty much limited to the framework you go with. For instance, React uses JSX and Angular uses HTML with its own syntax. What you can do is learn that engine to its fullest.

Let’s move on.

### 4. 选择路由

Every application comes with a need for a router. It lets you determine what to show users when they navigate to a specified URL. It also lets you determine what your app does if the HTTP request method changes from GET to POST, PUT or DEL.

If you build a SPA, the routing takes place in the browser instead of the server (which is why there’s no need to load new HTML).

Most frameworks, such as Express and Angular, have a built-in router you can use. Some frameworks, like React and Koa, allow you to select a router you prefer.

### 5. 选择数据库

Once you’re done selecting the server framework, router and template engine, the next big decision you have to make concerns your database.

Selecting a database language is almost like deciding whether to use Node as your server language. It’s a huge one.

When it comes to databases, you have two types to choose from – relational databases or non-relational databases. Relational databases are commonly called SQL databases; the most popular ones include [MySQL][16] and [Postgres][17]. On the other hand, non-relational databases are commonly called NoSQL databases; the most popular ones include [MongoDB][18] and [Redis][19].

Like selecting a server framework, there’s no right or wrong in going with either choice. If you’re new, I highly recommend going with MongoDB since I find it much easier to learn.

If you want more help to decide between SQL vs NoSQL databases, consider reading [this piece][20] by James Serra.

![A mobile phone on a workshop table][21]

## 配置开发环境时需要考虑的 4 件事

Have you chosen your stack? Great! Next you need to set up your development environment to take away the pain while developing your app. I’ll share what pain you’ll encounter and the solutions you can use.

### 1. 选择包管理器

If you have chosen any of the tools mentioned above instead of writing vanilla JS all the way, you already have libraries to work with. The first thing you need while setting up your dev environment is to choose your dependency manager(s), also called package managers.

Package managers are great at helping you download libraries into your app. For example, you can download Express just with one line of code instead of downloading it through GitHub.

```bash
npm install express --save
```

They’re also great at helping you update packages whenever you need to.

Since you’re already using Node, you can use npm as your package manager for your backend.

For the frontend, it’s not so simple. You can still use npm, but you need to set up some tooling (see the next point) because browsers don’t support npm packages out of the box.

If you want a simple, painless solution, consider using [Bower][22], which is the old-school package manager of choice. Here’s an [intro article to Bower][23].

### 2. 选择构建工具

Earlier I mentioned npm packages aren’t supported by browsers natively. You need to go through some tooling before you can use npm for the frontend. Here, you need tools like [Browserify][24], [Webpack][25] or [Rollup][26].

If you want to use better technologies like [ES6][27], [Sass][28] or [PostCSS][29] to help you write your app, you also want to think about how to compile these assets into CSS and ES5 (which is the JavaScript browsers use today).

Here, you have two tools to choose from – [Gulp][30] and [Webpack][25]. Gulp is an all-purpose build tool that helps you run all kinds of tasks like the ones I mentioned above. Webpack also does it in its unique way.

If you’re starting out, I highly recommend Gulp. Here’s a [handy tutorial for you to start with][31].

### 3. 服务端自动重启

One of the most painful things about Node is that your server doesn’t automatically update when you save a file. So, you often have to restart your server in the command line whenever you make a change. It’s a lot of keystrokes…

There are two methods (why are there always so many ways?!) to restart your server when you save a file. The first is to use [Nodemon][32] to restart the entire app. The second is to use [chokidar][33] to refresh your require cache.

If you’re just starting out, I highly recommend Nodemon because it’s much simpler to use. You just need to start your app with nodemon instead of node.

    bash
    nodemon server.js

### 4. 浏览器端自动刷新

Last but not least, consider refreshing your browser automatically whenever you make a change to your templates, HTML or CSS. This way, you save a few keystrokes from hitting alt+tab and CTRL + R. (Tabbing to refresh the browser anyone?).

The best way to do it so far is through the use of a package called [Browsersync][34]. I’ve written extensively about using Browersync in my book Automating Your Workflow. Just [download the sample chapters][35] and set it up.

Another way to do this is through Webpack. But that’s a topic for another day since it’s much more complicated to set up a Webpack build.

![A tablet on a workshop bench][36]

## 编码时需要考虑的 4 件事

Once your development environment is set up, you’re ready to dive into coding! Here, there are four considerations you probably want to make.

### 1. 选择 API 架构

There are two main API methods out there right now – REST and GraphQL. REST stands for representational state transfer. It has been the de facto standard for a long time. GraphQL is a method Facebook came up with that allows you to get multiple sources of data with one request.

If you’re new to building applications, I recommend going with REST since it’s still the standard way of doing this. [Here’s a tutorial][37] to help you get started.

### 2. 编写良好的 REST API

There’s a lot to learn when you write your first piece of server code. One of them is designing your API. If you don’t learn to create a good API, your code might end up very messy.

Here’s [an article to help you learn the best practices for a RESTful API][38].

### 3. 考虑使用 async/await 来管理异步操作

Node is a single threaded language. To cope with multiple asynchronous operations needed in a server, Node defaults to using callbacks (functions that are called whenever an operation is done).

Sometimes, you need to wait for multiple things to be done, which leads to a phenomenon known as the callback hell.

```javascript
// Look at three layers of callback in this code!
app.get('/', function (req, res) {
    Users.findOne({ /* params to query for user */ }, function (err, user) {
        if (err) {
            return res.status(400).send({ err: e });
        }

        user.update({ /* params to update */ }, function (err, raw) {
            if (err) {
                return res.status(400).send({ err: e });
            }
            // Do something with raw
            res.send({ data: raw });
        });
    });
});
```

Node has progressed a lot since the days of callback hell. The most recent improvements are asynchronous functions that let you write asynchronous code as if it was synchronous.

```javascript
// Callback reduced with async/await
app.get('/', async function (req, res) {
    try {
        let user = await Users.findOne({ /* params to query for user */ });
        let raw = user.update({ /* params to update */ });
        res.send({ data: raw });
    } catch (e) {
        res.status(400).send({ err: e });
    }
});
```

It’s so much cleaner. I [recommend learning async and await][39], but if you can’t do so, try to [learn Promise][40] at least.

### 4. 考虑如何进行用户认证

Authentication is likely the part that trips most beginners up. It’s not simple. There are two main ways you can use to authenticate your users.

The first way is to ask for a username and password. This is probably the easiest, and the solution you should go for when you’re starting out.

The second way is to log users in with a third-party account (like Facebook, GitHub or Twitter). This method requires you to use [OAuth2][41], an authentication protocol which is incredibly hard to understand.

Because it’s so difficult, many people accidentally leave security holes when they implement OAuth2 on their own. So, unless you’re a master with OAuth2, I recommend you use a service called [Auth0][42] to help you create login credentials with Oauth2.

After you’ve verified your users credentials (either with username and password or oauth), you need to determine how to let them stay logged in while they’re using your app. There are two main ways – sessions and token.

Sessions is an older, tried-and-tested way of authenticating a user. JSON web tokens are a newer method that seeks to overcome some scalability issues posed by session-based authentication. Session vs token-based authentication is a huge debate, and I won’t be able to cover them in detail in this post. If you like more information, check out [this guide][43] by the guys from Auth0.

Personally, I’d recommend learning to use token-based authentication.

![A mobile phone and a pair of earphones on a workshop table][44]

## 应用部署时需要考虑的 7 件事

Phew. Now that you’re done building your first application, it’s time to put it up for all to see (and use)! Here are seven things you want to consider before doing so:

### 1. 选择主机服务商

Needless to say, you need to select a web hosting service to serve your website (unless you build one yourself). When you use Node, you need root access to your server so you can install your node packages and run necessary commands.

This means you need [a virtual private server][45] or [a dedicated server][46]. Or, if you prefer to keep things simple, you can choose to host with [Heroku][47].

I recommend you start with Heroku if this is your first application. It’s much easier than learning to configure your server options.

### 2. 选择 HTTP 还是 HTTPS

If you need to authenticate your users, there’s not much room for negotiation. You should always use HTTPS to keep your users secure.

If you use Heroku, you can ignore this step. HTTPS is turned on by default.

If you use hosting providers that require you to configure your servers, you’ll need to [buy an SSL certificate][48] and [configure your server][49] to serve up the HTTPS version.

### 3. 是否需要使用 CDN？

A content delivery network (CDN) is a collection of global servers that caches and delivers web content. These servers reduce the time it takes for your visitors to request a file. So you should always use a CDN.

But what CDN should you use? There are multiple options for you to choose from, like [Amazon Cloudfront][50], [Cloudflare][51] and [MaxCDN][52].

I recommend going with Cloudflare because it’s fast and free!

### 4. 学会存储敏感信息

One of the worst mistakes I ever made as a developer is to check an Amazon API key into a git repo. Although this repo was private, a friend of mind forked it as a public repo.

The result? I incurred a bill of $60,000 out of the blue.

Thankfully, Amazon was willing to let the case slide, but this taught me a very important lesson – never commit any credentials directly in your code.

There are two ways to store your credentials safely.

The first way is to use [environment variables][53]. In node, you can get your environment variables simply with the following code:

```javascript
const secret = process.env.secret;
```

The second way is to gitignore your secrets/ folder or secrets.json file. You can then push these secrets into your server with [scp][54], [rsync][55] or ever plain ol’ [FTP][56] if you wish to.

### 5. 让你的应用永远在线

Right now, you should be running node server.js or something equivalent to start your application. This isn’t ideal because your app would crash if it runs into an error.

In production environments, apps should be able to restart themselves even when they crash so they can remain functioning. To do this, you’ll need to use a process management tool like [pm2][57] or [forever][58] to start your app. Here’s how starting a process with PM2 looks like:

```bash
pm2 start server.js --name name-of-app
```

If you use Heroku, you’ll have to alter your package.json file to use pm2 instead:

```json
"scripts": {
    "start": "pm2 start server.js --name name-of-app"
}
```

As you can tell, I recommend you go with pm2.

### 6. 通过日志来追踪错误

If your app automatically restarts itself, how would you be able to debug errors it encountered before it crashed?

The answer is to view the logs that PM2 creates for you automatically. You can view your logs by running the following command:

```bash
pm2 logs name-of-app
```

Optionally, instead of viewing the log through the command line, you may want to save the logs in a file with the following command:

```bash
pm2 start server.js --name name-of-app --log name-of-app.log
```

Once created, this log can be found in /root/.pm2/logs.

Note: If you use Heroku, you might want to use [Paper trail][59] to create a log.

### 7. 创建部署脚本

Finally, deployment is a stressful activity. You’d want to minimise this stress to a minimum by creating a deployment script.

This script (ideally) does things like:

1. Compile, minify and and deploy your assets.
1. Test your application
1. Push your application into the server
1. Update the server

To do so, you might need to use a combination of task runners, npm scripts and git post-receive hooks.

![A puppy sleeping while holding a mobile phone][60]

## 总结

Phew! That’s a list of 20 things to consider when creating your first Node application. I hope this article has shown you something useful. Now, go ahead and create your Node app! The world is dying to see it .

[1]: https://zellwk.com/
[2]: https://www.heartinternet.uk/blog/wp-content/uploads/nodejs-1.jpg
[3]: http://nodeframework.com
[4]: http://expressjs.com
[5]: http://koajs.com
[6]: https://hapijs.com
[7]: https://zellwk.com/blog/learn-fast/
[8]: https://www.facebook.com
[9]: https://redmart.com
[10]: https://twitter.com
[11]: http://del.icio.us
[12]: https://github.com/expressjs/express/wiki?_ga=1.103049088.1624090855.1449713322#template-engines
[13]: http://www.embeddedjs.com
[14]: https://mozilla.github.io/nunjucks/
[15]: https://mustache.github.io
[16]: https://www.mysql.com
[17]: https://www.postgresql.org
[18]: https://www.mongodb.com
[19]: https://redis.io
[20]: http://www.jamesserra.com/archive/2015/08/relational-databases-vs-non-relational-databases/
[21]: https://www.heartinternet.uk/blog/wp-content/uploads/nodejs-2.jpg
[22]: https://bower.io
[23]: https://zellwk.com/blog/bower/
[24]: http://browserify.org
[25]: https://webpack.js.org
[26]: http://rollupjs.org
[27]: http://es6-features.org
[28]: http://sass-lang.com
[29]: http://postcss.org
[30]: http://gulpjs.com
[31]: https://css-tricks.com/gulp-for-beginners/
[32]: https://github.com/remy/nodemon
[33]: https://github.com/paulmillr/chokidar
[34]: https://www.browsersync.io
[35]: https://automateyourworkflow.com
[36]: https://www.heartinternet.uk/blog/wp-content/uploads/nodejs-3.jpg
[37]: https://zellwk.com/blog/crud-express-mongodb/
[38]: http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
[39]: https://ponyfoo.com/articles/understanding-javascript-async-await
[40]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[41]: https://oauth.net/2/
[42]: https://auth0.com
[43]: https://auth0.com/blog/cookies-vs-tokens-definitive-guide/
[44]: https://www.heartinternet.uk/blog/wp-content/uploads/nodejs-4.jpg
[45]: https://www.heartinternet.uk/vps
[46]: https://www.heartinternet.uk/dedicated-servers
[47]: https://www.heroku.com
[48]: https://www.heartinternet.uk/ssl-certificates
[49]: http://nginx.org/en/docs/http/configuring_https_servers.html
[50]: https://aws.amazon.com/cloudfront/
[51]: https://www.cloudflare.com
[52]: https://www.maxcdn.com
[53]: https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps
[54]: https://en.wikipedia.org/wiki/Secure_copy
[55]: https://en.wikipedia.org/wiki/Rsync
[56]: https://en.wikipedia.org/wiki/File_Transfer_Protocol
[57]: http://pm2.keymetrics.io
[58]: https://github.com/foreverjs/forever
[59]: https://papertrailapp.com
[60]: https://www.heartinternet.uk/blog/wp-content/uploads/nodejs-6.jpg
