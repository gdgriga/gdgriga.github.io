import React from 'react';
import EventList from './EventList.jsx';
import EventsFetcher from '../services/fetcher/EventsFetcher.js';
import FileResolver from '../services/fetcher/FileResolver.js';

class EventsBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};

  }

  componentDidMount() {
    // TODO: Split upcoming and past events by time
    let loader = new EventsFetcher(new FileResolver(this.props.url));

    loader.fetch().then(events => {
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
