import React from 'react';
import EventsBox from './EventsBox.jsx';
import HeaderBox from './HeaderBox.jsx';
import Drawer from './Drawer.jsx';
import TopBannerBox from './TopBannerBox.jsx';
import HeadLine from './HeadLine.jsx';
import SocialBox from './SocialBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {main: {}, social: {}};

  }

  componentDidMount() {
    fetch(this.props.url)
    .then(response => response.json())
    .then(info => {
      this.setState({main: info, social: info.social});
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
          <HeadLine title="Follow us" id="follow-us" />
          <SocialBox
            facebookUrl={this.state.social.facebook}
            twitterUrl={this.state.social.twitter}
            gPlusUrl={this.state.social.googlePlus} />
          <HeadLine title="Upcoming events" id="upcoming-events" />
          <EventsBox url="/storage/events-upcoming.json" />

          <HeadLine title="Past events" id="past-events" />
          <EventsBox url="/storage/events-archive.json" />
        </main>
      </div>
    );
  }

}

export default App;
