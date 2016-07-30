import React from 'react';
import EventsBox from './EventsBox.jsx';
import HeaderBox from './HeaderBox.jsx';
import TopBannerBox from './TopBannerBox.jsx';
import SocialBox from './SocialBox.jsx';
import HeadLine from './HeadLine.jsx';

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
    return (
      <div class="mdl-layout mdl-js-layout">
        <HeaderBox title={this.state.main.title_short} links={[
          {name: "About us", href: "#about-us"},
          {name: "Upcoming events", href: "#upcoming-events"},
          {name: "Past events", href: "#past-events"},
        ]} />
        <main className="mdl-layout__content">
          <div className="mdl-grid mdl-grid--no-spacing">
            <TopBannerBox title={this.state.main.title_long} description={this.state.main.description} />
          </div>
          <HeadLine title="About us" id="about-us" />
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
