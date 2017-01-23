import React from 'react';

class EventCard extends React.Component {

  render () {
    // let monthNames = [
    //   "January", "February", "March",
    //   "April", "May", "June", "July",
    //   "August", "September", "October",
    //   "November", "December"
    // ];

    return (
      <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media">
          <img className="card-image" src={this.props.banner} alt={this.props.name} />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.name}</h2>
        </div>
        <div className="mdl-card--expand mdl-card__supporting-text">{this.props.description}</div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={this.props.link} target="_blank">More info</a>
        </div>
      </div>
    );
  }
}

export default EventCard;

//<div className="mdl-card__supporting-text">{(() => {
//
//  let date = new Date(this.props.time);
//  let day = date.getDate();
//  let monthIndex = date.getMonth();
//  let year = date.getFullYear();
//
//  return day + ' ' + monthNames[monthIndex] + ' ' + year;
//
//})()}</div>
