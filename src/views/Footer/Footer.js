import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <span><a href="https://coreui.io">a</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
