import React from 'react';
import { config } from 'config';
import './style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteZhihuUrl && (
            <li>
              <a target="_blank" href={config.siteZhihuUrl}>
                <img src={require('./img/zhihu.png')} width="30" height="30" />
              </a>
            </li>
          )}
          {config.siteJuejinUrl && (
            <li>
              <a target="_blank" href={config.siteJuejinUrl}>
                <img src={require('./img/juejin.png')} width="30" height="30" />
              </a>
            </li>
          )}
          {config.siteJianshuUrl && (
            <li>
              <a target="_blank" href={config.siteJianshuUrl}>
                <img src={require('./img/jianshu.png')} width="30" height="30" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteGithubUrl && (
            <li>
              <a target="_blank" href={config.siteGithubUrl}>
                <img src={require('./img/github.png')} width="30" height="30" />
              </a>
            </li>
          )}
          {config.siteSegmentfaultUrl && (
            <li>
              <a target="_blank" href={config.siteSegmentfaultUrl}>
                <img src={require('./img/segmentfault.png')} width="30" height="30" />
              </a>
            </li>
          )}
          {config.siteEmailUrl && (
            <li>
              <a target="_blank" href={config.siteEmailUrl}>
                <img src={require('./img/gmail.png')} width="30" height="30" />
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
