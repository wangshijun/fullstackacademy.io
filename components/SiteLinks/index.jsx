import React from 'react';
import { config } from 'config';
import './style.css';

class SiteLinks extends React.Component {
  renderRow(items) {
    return items.map(x => (
      <li>
        <a href={config[`${x}Url`]}>
          <img src={require(`./img/${x}.png`)} width="25" height="25" />
        </a>
      </li>
    ));
  }

  render() {
    const row1 = ['juejin', 'zhihu', 'jianshu'];
    const row2 = ['wechat', 'gmail', 'github'];
    return (
      <div className="blog-links">
        <ul>{this.renderRow(row1)}</ul>
        <ul>{this.renderRow(row2)}</ul>
      </div>
    );
  }
}

export default SiteLinks;
