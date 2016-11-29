import React from 'react';
import Odometer from 'odometer';

class Counter extends React.Component {
  render() {
    return (
      <div className="mdl-grid maxwidth">
          <div className="mdl-cell mdl-cell--6-col mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text"><span className="odometer">{this.props.events_count}</span> events</h4>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text"><span className="odometer">{this.props.events_rsvp_count}</span> participants</h4>
            </div>
          </div>
      </div>
    );
  }
}

export default Counter;
