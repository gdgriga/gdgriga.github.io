import React from 'react';

class TopBannerBox extends React.Component {
  render() {
    return (
      <div className="top-box">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-typography--display-4">{this.props.title}</div>
            <div className="mdl-typography--display-title">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBannerBox;
