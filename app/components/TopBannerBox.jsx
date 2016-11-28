import React from 'react';
import Odometer from 'odometer';

class TopBannerBox extends React.Component {
  render() {
    return (
      <div className="mdl-grid maxwidth">
        <a name={this.props.id}></a>
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text"><img src="/assets/images/gdg_icon.svg" height="30px;"/>{this.props.title}</h2>
          </div>
          <div className="mdl-card__media">
            <img className="card-image" src="http://photos1.meetupstatic.com/photos/theme_body/a/5/b/d/full_7062429.jpeg" alt=""/>
          </div>

          <div className="mdl-grid">
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Who we are</h3>
            <div className="mdl-cell mdl-cell--10-col mdl-card__supporting-text">
              <p>{this.props.description}</p>
            </div>
          </div>

          <div className="mdl-grid mdl-cell--12-col mdl-cell--bottom">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--2-offset">
              <div className="odometer">{this.props.events_count}</div> events
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <div className="odometer">{this.props.events_rsvp_count}</div> participants
            </div>
          </div>

        </div>

      </div>);
  }
}

export default TopBannerBox;
