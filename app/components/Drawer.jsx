import React from 'react';
import Navigation from './Navigation.jsx';

class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /* https://github.com/google/material-design-lite/issues/1246 */
  handleClick() {
    document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
    document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
  }

  render() {
    return (
      <div className="mdl-layout__drawer" onClick={this.handleClick}>
        <span className="mdl-layout-title"><img src="/assets/images/gdg_icon.svg" height="30px;"/>{this.props.title}</span>
        <Navigation links={this.props.links} />
      </div>
    );
  }
}

export default Drawer;
