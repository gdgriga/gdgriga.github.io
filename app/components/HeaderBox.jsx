import React from 'react';
import Navigation from './Navigation.jsx';

class HeaderBox extends React.Component {

  render() {
    return (
      <header className="mdl-layout__header">
        <div class="mdl-layout-icon"></div>
        <div className="mdl-layout__header-row">
          <div className="gdg-logo"></div>
          <img src="/assets/images/gdg_icon.svg" height="30px;"/>
          <span className="mdl-layout-title">{this.props.title}</span>
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-layout--large-screen-only">
            <Navigation links={this.props.links} />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderBox;
