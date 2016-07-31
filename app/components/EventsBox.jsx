import React from 'react';
import EventList from './EventList.jsx';
import fetch from 'isomorphic-fetch';

class EventsBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};

  }

  componentDidMount() {
    fetch(this.props.url)
    .then(response => response.json())
    .then(events => {
      this.setState({data: events});
    });
  }

  render() {
    return (
      <div className="events-box">
        <EventList events={this.state.data} />
      </div>
    );
  }
}

export default EventsBox;
