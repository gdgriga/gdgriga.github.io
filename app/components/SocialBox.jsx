import React from 'react';

class SocialBox extends React.Component {
  render() {

    return (
      <div className="social-section">
        <div className="mdl-grid section--center">
          <div className="mdl-cell mdl-cell--3-col">
            <div className="mdl-typography--display-2 mdl-typography--font-thin">Follow us</div>
              <p className="mdl-typography--headline mdl-typography--font-thin">Be ready for something new</p>
          </div>
          <div className="mdl-cell mdl-cell--5-col mdl-typography--text-center">
            <a className="social-link" href={this.props.facebookUrl} target="_blank"><i className="mdi mdi-facebook-box"></i></a>
            <a className="social-link" href={this.props.twitterUrl} target="_blank"><i className="mdi mdi-twitter-box"></i></a>
            <a className="social-link" href={this.props.gPlusUrl} target="_blank"><i className="mdi mdi-google-plus-box"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialBox;
