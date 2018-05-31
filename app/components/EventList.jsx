import React from 'react';
import EventCard from './EventCard.jsx';
import SocialBox from './SocialBox.jsx';

/**
 * Shortens string and adds "..." at the end
 * @param  {string} text   Original string
 * @param  {length} length Length of string to leave
 * @return {string}        Shortened string
 */
function shorten(text, length) {
  if (text.length <= length) {
    return text;
  }

  return text.substring(0, length) + "...";
}

class EventList extends React.Component {
  render() {
    if (this.props.events.length === 0) {

      var social = <span>.</span>;

      if (typeof this.props.social != 'undefined') {
        social = <SocialBox
            facebookUrl={this.props.social.facebook}
            twitterUrl={this.props.social.twitter}
            gPlusUrl={this.props.social.googlePlus}
            color="black" />;
      };

      return (
        <div className="mdl-grid">
          <div className="mdl-layout-spacer"></div>
          <h6>We are preparing something special. Stay in tune {social}</h6>
          <div className="mdl-layout-spacer"></div>
        </div>
      );
    }

    let eventNodes = this.props.events.map(event => {
      this.checkBanner(event);

      return (
        <EventCard
          key={event.event_url}
          banner={event.banner}
          name={event.name}
          description={shorten(event.description_no_html, 201)}
          link={event.event_url}
          time={event.time} />
      );
    });

    return (
      <div className="mdl-grid maxwidth">
        {eventNodes}
      </div>
    );
  }

  checkBanner(event) {
    if (event.banner) {
      return;
    }

    if (event.photo_url) {
      event.banner = event.photo_url;
      return;
    }

    let el = document.createElement('div');
    el.innerHTML = event.description;
    let img = el.getElementsByTagName("img")[0];
    if (img) {
      event.banner = img.src;
    } else {
      // get random banner from cool collection
      event.banner = "https://source.unsplash.com/collection/145103/1600x900";
    }
  }
}

export default EventList;
