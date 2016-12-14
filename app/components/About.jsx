import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="mdl-grid section--center">
        <div className="mdl-cell mdl-cell--12-col">
          <dl>
            <dt>{this.props.title}</dt>
            <dd>{this.props.description}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default About;
