import React from 'react';
import EventsBoxFiles from './EventsBoxFiles.jsx';
import EventsBoxFirebase from './EventsBoxFirebase.jsx';

class EventsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  render() {
    if (this.props.source === 'firebase') {
      return (
          <EventsBoxFirebase type={this.props.type}/>
      );
    } else if (this.props.source === 'files') {
      return (
          <EventsBoxFiles type={this.props.type} url="/storage/events.json"/>
      );
    }
  }
}

export default EventsBox;
