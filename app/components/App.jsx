import React from 'react';
import UpcomingEventsBox from './UpcomingEventsBox.jsx';
import ArchivedEventsBox from './ArchivedEventsBox.jsx';
import HeaderBox from './HeaderBox.jsx';
import TopBannerBox from './TopBannerBox.jsx';
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
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <HeaderBox title={this.state.main.title_short} />
        <main className="mdl-layout__content">
          <div className="page-content">
            <TopBannerBox title={this.state.main.title_long} description={this.state.main.description} />
            <SocialBox
              facebookUrl={this.state.social.facebook}
              twitterUrl={this.state.social.twitter}
              gPlusUrl={this.state.social['google-plus']} />
            <UpcomingEventsBox url="/storage/events-upcoming.json" />
            <ArchivedEventsBox url="/storage/events-archive.json" />
          </div>
        </main>
      </div>
    );
  }

}

export default App;
