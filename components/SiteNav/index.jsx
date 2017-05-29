import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

class SiteNav extends React.Component {
  render() {
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link to={prefixLink('/')} activeClassName="current" onlyActiveOnIndex> 技术文章
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/toolingbits/')} activeClassName="current"> 奇技淫巧
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/weekly/')} activeClassName="current"> 前端周刊
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/about/')} activeClassName="current"> 关于我
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/contact/')} activeClassName="current"> 联系我
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
