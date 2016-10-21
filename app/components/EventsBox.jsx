import React from 'react';
import EventList from './EventList.jsx';

class EventsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="events-box">
        <EventList events={this.props.events} />
      </div>
    );
  }
}

export default EventsBox;
