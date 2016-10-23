import React from 'react';
import EventsBox from './EventsBox.jsx';
import HeaderBox from './HeaderBox.jsx';
import Drawer from './Drawer.jsx';
import TopBannerBox from './TopBannerBox.jsx';
import HeadLine from './HeadLine.jsx';
import SocialBox from './SocialBox.jsx';
import About from './About.jsx';
import * as firebase from 'firebase';

firebase.initializeApp({
  databaseURL: "https://gdg-riga-8ccd7.firebaseio.com"
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main: {},
      social: {},
      events_upcoming: [],
      events_past: [],
    };

  }

  componentDidMount() {
    // fetsh data from JSON file
    fetch(this.props.url)
    .then(response => response.json())
    .then(info => {
      // Update initial state to fill all fetched info
      this.setState({main: info, social: info.social});
    })
    .then(state => {
      // then fetch all data from the firebase ...
      let self = this;

      var now = (new Date()).getTime();
      var ref = firebase.database().ref('events');

      ref.once('value').then(function(snapshot) {
        let events = snapshot.val();

        if (events) {
          // ... and update state
          self.setState(Object.assign({}, self.state, {
            events_upcoming: Object.values(events).filter(event => event.time >= now).sort((a, b) => b.time - a.time),
            events_past: Object.values(events).filter(event => event.time <= now).sort((a, b) => b.time - a.time)
          }));
        }
      });

    });
  }

  render() {

    let menuLinks = [
      {name: "About us", href: "#about-us"},
      {name: "Upcoming events", href: "#upcoming-events"},
      {name: "Follow us", href: "#follow-us"},
      {name: "Past events", href: "#past-events"},
    ];

    return (
      <div className="mdl-layout mdl-js-layout">
        <HeaderBox title={this.state.main.title_short} links={menuLinks} />
        <Drawer title={this.state.main.title_short} links={menuLinks} />
        <main className="mdl-layout__content">
          <div className="mdl-grid mdl-grid--no-spacing">
            <TopBannerBox title={this.state.main.title_long} description={this.state.main.description} />
          </div>

          <HeadLine title="About us" id="about-us" />
          <About title={this.state.main.title_short} description={this.state.main.description} />

          <HeadLine title="Follow us" id="follow-us" />
          <SocialBox
            facebookUrl={this.state.social.facebook}
            twitterUrl={this.state.social.twitter}
            gPlusUrl={this.state.social.googlePlus} />

          <HeadLine title="Upcoming events" id="upcoming-events" />
          <EventsBox events={this.state.events_upcoming} />

          <HeadLine title="Past events" id="past-events" />
          <EventsBox events={this.state.events_past} />
        </main>
      </div>
    );
  }

}

export default App;
