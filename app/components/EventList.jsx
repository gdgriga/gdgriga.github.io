import React from 'react';
import EventCard from './EventCard.jsx';

class EventList extends React.Component {
  render() {
    let l = this.props.events.length;
    let eventsInRow = 3;
    let rowsCount = Math.ceil(l / eventsInRow);
    let eventNodes = [];
    let eventRows = Array.apply(null, Array(rowsCount)).map(() => []);

    if (rowsCount === 0) {
      return (
        <div className="events">
          "No events found"
        </div>
      );
    }

    let rowN = 0;
    for (let i = 1; i <= l; i++) {
      eventRows[rowN].push(
        <EventCard
          key={i}
          banner={this.props.events[i-1].banner}
          name={this.props.events[i-1].name}
          description={this.props.events[i-1].description}
          link={this.props.events[i-1].link}
          time={this.props.events[i-1].time}
        />
      );

      if (i % 3 === 0) {
        rowN++;
      }
    }

    eventNodes = eventRows.map(row => (
        <div className="mdl-grid" key={(() => parseInt(Math.random() * 10000))()}>
          {row}
        </div>
      ));

    return (
      <div className="events">
        {eventNodes}
      </div>
    );
  }
}

export default EventList;
