import React from 'react';

class SocialBox extends React.Component {

  constructor(props) {
    super(props);

    if(props.color) {
      this.state = {
        style: {
          color: props.color
        }
      };
    }
  }

  render() {

    return (
      <span>
        <a style={this.state.style} className="mdl-typography--display-1 social-link" href={this.props.facebookUrl} target="_blank"><i className="mdi mdi-facebook-box"></i></a>
        <a style={this.state.style} className="mdl-typography--display-1 social-link" href={this.props.twitterUrl} target="_blank"><i className="mdi mdi-twitter-box"></i></a>
        <a style={this.state.style} className="mdl-typography--display-1 social-link" href={this.props.gPlusUrl} target="_blank"><i className="mdi mdi-google-plus-box"></i></a>
      </span>
    );
  }
}

export default SocialBox;
