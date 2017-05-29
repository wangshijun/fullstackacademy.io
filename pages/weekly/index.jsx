import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SiteSidebar from '../../components/SiteSidebar';

class WeeklyIndex extends React.Component {
  renderIssueList() {
    const pages = this.props.route.pages.filter(x => x.path.includes('/weekly/issue-')).sort((a, b) => {
      const seqa = parseInt(a.path.replace('/weekly/issue-', ''), 10);
      const seqb = parseInt(b.path.replace('/weekly/issue-', ''), 10);
      return seqb - seqa;
    });

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
          <ul>{pages.map(page => <li key={page.path}><Link to={prefixLink(page.path)}>{page.data.title}</Link></li>)}</ul>
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
                {this.renderIssueList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeeklyIndex.propTypes = {
  route: React.PropTypes.object,
};

export default WeeklyIndex;
