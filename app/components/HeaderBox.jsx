import React from 'react';

class HeaderBox extends React.Component {

  render() {
    // create all links
    let links = this.props.links.map(link => <a className="mdl-navigation__link" href={link.href}>{link.name}</a>);

    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="gdg-logo"></div>
          <span className="mdl-layout-title">{this.props.title}</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            {links}
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderBox;
