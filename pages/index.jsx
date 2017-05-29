import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteSidebar from '../components/SiteSidebar';

class SiteIndex extends React.Component {
  render() {
    const pageLinks = [];

    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach(page => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const coverImage = access(page, 'data.cover');

        pageLinks.push(
          <div className="blog-post" key={title}>
            {!!coverImage &&
              <Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>
                <img
                  className="post-cover-image"
                  style={{ objectFit: 'cover' }}
                  src={coverImage}
                  alt={title}
                  width="100%"
                  height="200px"
                />
              </Link>}
            <h2><Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>{title}</Link></h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <time dateTime={moment(datePublished).format('YYYY年MM月DD日')}>
              {moment(datePublished).format('YYYY年MM月DD日')}
            </time>
            <span style={{ padding: '5px' }} />
            <Link className="readmore" to={prefixLink(page.path)}>阅读</Link>
          </div>
        );
      }
    });

    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              {pageLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
