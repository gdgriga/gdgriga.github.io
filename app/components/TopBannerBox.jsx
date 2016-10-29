import React from 'react';
import Odometer from 'odometer';

class TopBannerBox extends React.Component {
  render() {
    return (
      <div className="jumbo headline mdl-cell mdl-cell--12-col mdl-grid mdl-typography--display-2 mdl-color-text--grey-50">
        <div className="mdl-grid mdl-cell--12-col mdl-cell--bottom">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--2-offset">
            <div className="odometer">{this.props.events_count}</div> events
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="odometer">{this.props.events_rsvp_count}</div> participants
          </div>
        </div>
      </div>
    );
  }
}

export default TopBannerBox;
