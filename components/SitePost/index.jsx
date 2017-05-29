import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.css';
import '../../static/css/highlight.css';

class SitePost extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/')}>文章列表</Link>
      </div>
    );

    return (
      <div>
        {home}
        <div className="markdown-body blog-single">
          <div className="text">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <h2>One More Thing</h2>
            <p>
              本文作者王仕军，商业转载请联系作者获得授权，非商业转载请注明出处。如果你觉得本文对你有帮助，请点赞！如果对文中的内容有任何疑问，欢迎留言讨论。想知道我接下来会写些什么？欢迎订阅我的
              <a href="https://juejin.im/user/57a7f634d342d300576b738d" target="_blank">掘金专栏</a>
              或
              <a href="https://zhuanlan.zhihu.com/feweekly" target="_blank">知乎专栏</a>
              ：《前端周刊：让你在前端领域跟上时代的脚步》。
            </p>
            <div className="date-published">
              <span>发布于 {moment(post.date).format('YYYY年MM月DD日')}</span>
            </div>
          </div>
          <div className="footer">
            <ReadNext post={post} {...this.props} />
            <hr />
            <p>{config.siteDescr}</p>
          </div>
        </div>
      </div>
    );
  }
}

SitePost.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePost;
