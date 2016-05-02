import React from 'react';
import EventList from './EventList.jsx';

class UpcomingEventsBox extends React.Component {
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
      <div className="upcoming-events">
        <EventList events={this.state.data} />
      </div>
    );
  }
}

export default UpcomingEventsBox;
