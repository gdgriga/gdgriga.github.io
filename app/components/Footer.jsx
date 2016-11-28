import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">&copy; 2016 GDG Riga</div>
          <ul className="mdl-mini-footer__link-list">
            <li><a href="mailto:info@gdgriga.lv?Subject=Hi,%20GDGRiga!" target="_top">Contact us</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
