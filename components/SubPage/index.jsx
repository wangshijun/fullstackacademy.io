import React from 'react';
import SiteSidebar from '../SiteSidebar';

class SubPage extends React.Component {
  render() {
    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="markdown-body">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubPage.propTypes = {
  children: React.PropTypes.any,
};

export default SubPage;
