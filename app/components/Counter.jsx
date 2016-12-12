import React from 'react';
import Odometer from 'odometer';

class Counter extends React.Component {
  render() {

    var letterStyle = {
      color: '#3F51B5',
      fontSize: '2.2em',
      fontWeight: 'bold'
    };

    return (
      <div className="mdl-grid maxwidth">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--2-offset-desktop">
            <div className="mdl-card__title">
              <p className="mdl-card__title-text" style={letterStyle}>
                <span className="odometer">{this.props.events_count}</span>&nbsp;events
              </p>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card__title">
              <p className="mdl-card__title-text" style={letterStyle}>
                <span className="odometer">{this.props.events_rsvp_count}</span>&nbsp;developers
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Counter;
