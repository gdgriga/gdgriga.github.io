import React from 'react';

class TopBannerBox extends React.Component {
  render() {
    return (
      <div className="mdl-grid maxwidth">
        <a name={this.props.id}></a>
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
          <div className="mdl-card__media">
            <img className="card-image" src="assets/images/gdg_riga.jpeg" alt=""/>
          </div>

          <div className="mdl-grid">
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Who we are</h3>
            <div className="mdl-cell mdl-cell--10-col mdl-card__supporting-text">
              <p>{this.props.description}</p>
            </div>
          </div>

        </div>

      </div>);
  }
}

export default TopBannerBox;
