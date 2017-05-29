import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SiteSidebar from '../../components/SiteSidebar';

class WeeklyHome extends React.Component {
  renderContent() {
    return (
      <div className="text">
        <h2>前端周刊</h2>
        <div>
          <blockquote>
            <p>
              前端周刊，让你在前端领域跟上时代的脚步！聚焦最新的文章、教程、工具、框架、视频，由资深前端工程师为你精选精编。给大家提供的内容除了每周一期的资讯聚合之外，还会有不定期的文章翻译，技术干货放送。
            </p>
          </blockquote>
          <h2>往届周刊</h2>
          <ul>
            <li>
              <Link to={prefixLink('/weekly/56-forever-going-tech-conferences')}>
                前端周刊第56期：应接不暇的技术大会
              </Link>
            </li>
            <li><a href="issues/Issue-55.md">前端周刊第55期：10X 程序员？</a></li>
            <li><a href="issues/Issue-54.md">前端周刊第54期：Prepack 引发社区小高潮</a></li>
            <li><a href="issues/Issue-53.md">前端周刊第53期：React 社区的撕逼</a></li>
            <li><a href="issues/Issue-52.md">前端周刊第52期：React Native 路由管理、样式管理</a></li>
            <li><a href="issues/Issue-51.md">前端周刊第51期：1000个包的男人 + Vue.js + React Native</a></li>
            <li><a href="issues/Issue-50.md">前端周刊第50期：React 状态管理 + Vue.js 作弊条 + 命令行技巧</a></li>
            <li><a href="issues/Issue-47.md">前端周刊第49期：React 和 Vue.js SSR 框架 + 微信小程序 + Grid 布局</a></li>
            <li><a href="issues/Issue-47.md">前端周刊第48期：Vue Conf 2017 + Progressive WEB APP</a></li>
            <li><a href="issues/Issue-47.md">前端周刊第47期：Vue.js 后台模板 + React Conf 2017 + 饿了么面试宝典</a></li>
            <li><a href="issues/Issue-46.md">前端周刊第46期：Vue.js + VSCode + 程序员防骗指南</a></li>
            <li><a href="issues/Issue-45.md">前端周刊第45期：Node.js API 最佳实践、AWS CaseStudy</a></li>
            <li><a href="issues/Issue-44.md">前端周刊第44期：JS 新概念词典、TypeScript 免费好书、SHA1 可被破解</a></li>
            <li><a href="issues/Issue-43.md">前端周刊第43期：前端工程师手册2017版</a></li>
            <li><a href="issues/Issue-42.md">前端周刊第42期：Vue.js 组件编写原则</a></li>
            <li><a href="issues/Issue-41.md">前端周刊第41期：浏览器预加载机制探秘</a></li>
          </ul>
          <h2>同步平台</h2>
          <h3>知乎专栏</h3>
          <p>每期的内容也会同步发送在<a href="http://zhuanlan.zhihu.com/feweekly">知乎专栏</a>上。</p>
          <h3>微信订阅号</h3>
          <p>想直接在微信中订阅前端周刊？扫下方二维码关注前端周刊订阅号。</p>
          <p><img src="http://www.feweekly.com/img/src/weekly/feweekly/qrcode.jpg" alt="feweekly" /></p>
          <h3>面对面交流</h3>
          <p>想和我面对面交流？扫下方二维码添加我为好友。</p>
          <p><img src="http://www.feweekly.com/img/src/weekly/feweekly/wangshijun.jpg" alt="wangshijun" /></p>
          <p>Happy Hacking</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="markdown-body">
                {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyHome;
