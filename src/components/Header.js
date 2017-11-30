import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.pageTitle}</h1>
        <nav className='headerNav pullRight'>
        </nav>
      </div>

    );
  }
}

export default Header;
