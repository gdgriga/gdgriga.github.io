import React from 'react';
import EventCard from './EventCard.jsx';

class EventList extends React.Component {
  render() {
    let l = this.props.events.length;

    let eventNodes = this.props.events.map(event => {
      return (
        <EventCard
          key={event.link}
          banner={event.banner}
          name={event.name}
          description={event.description}
          link={event.link}
          time={event.time} />
      );
    });

    return (
      <div className="mdl-grid">
        {eventNodes}
      </div>
    );
  }
}

export default EventList;
