import React from 'react';
import EventList from './EventList.jsx';
import fetch from 'isomorphic-fetch';

class EventsBoxFiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(events => {
        this.setState({data: this.filterEvents(events)});
      });
  }

  filterEvents(events) {
    let now = (new Date()).getTime();

    if (this.props.type === 'upcoming-events') {
      return events.filter(function(event) {
        return event.time > now;
      });
    } else if (this.props.type === 'past-events') {
      return events.filter(function(event) {
        return event.time < now;
      });
    }
  }

  render() {
    return (
        <div className="events-box">
          <EventList events={this.state.data} />
        </div>
    );
  }
}

export default EventsBoxFiles;
