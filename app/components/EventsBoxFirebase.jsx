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
    var ref = firebase.database().ref('events-upcoming').orderByChild("time");

    if (this.props.type === 'upcoming-events') {
      ref = ref.startAt(now);
    } else if (this.props.type === 'past-events') {
      ref = ref.endAt(now);
    }

    ref.once('value').then(function(snapshot) {
      let events = snapshot.val();
      if (events) {
        self.setState({data: Object.values(events).reverse()});
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
