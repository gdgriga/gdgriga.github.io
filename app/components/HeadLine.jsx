import React from 'react';

class HeadLine extends React.Component {
  render() {
    return (
      <div className="mdl-grid maxwidth">
        <a name={this.props.id}></a>
        <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp">
          <div className="mdl-card__title section-delimeter-text">
            <h4 className="mdl-card__title-text">{this.props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadLine;
