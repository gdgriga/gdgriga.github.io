import React from 'react';
import EventList from './EventList.jsx';
import * as firebase from 'firebase';

let config = {
  databaseURL: "https://gdg-riga-8ccd7.firebaseio.com"
};

firebase.initializeApp(config);

class EventsBoxFirebase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    let self = this;

    var now = (new Date()).getTime();
    var ref = firebase.database().ref('events').orderByChild("time");

    ref.once('value').then(function(snapshot) {
      let events = snapshot.val();

      if (events) {

        if (self.props.type === 'upcoming-events') {
          events = Object.values(events).filter(event => event.time >= now);

        } else if (self.props.type === 'past-events') {
          events = Object.values(events).filter(event => event.time <= now);
        }

        self.setState({data: events.sort((a, b) => b.time - a.time)});
      }
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

export default EventsBoxFirebase;
