import React from 'react';

class Navigation extends React.Component {
  render() {

    // create all links
    let links = this.props.links.map(link => <a className="mdl-navigation__link" href={link.href} key={link.href}>{link.name}</a>);

    return (
      <nav className="mdl-navigation">
        {links}
      </nav>
    );
  }
}

export default Navigation;
