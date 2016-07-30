import React from 'react';

class HeadLine extends React.Component {
  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <section className="headline mdl-cell mdl-cell--12-col mdl-color--light-blue">
          <div className="mdl-typography--display-1 mdl-color-text--grey-50">
            {this.props.title}
          </div>
        </section>
      </div>
    );
  }
}

export default HeadLine;
