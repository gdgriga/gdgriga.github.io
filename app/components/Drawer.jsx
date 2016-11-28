import React from 'react';
import Navigation from './Navigation.jsx';

class Drawer extends React.Component {

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title"><img src="/assets/images/gdg_icon.svg" height="30px;"/>{this.props.title}</span>
        <Navigation links={this.props.links} />
      </div>
    );
  }
}

export default Drawer;
