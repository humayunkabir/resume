import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = { pages: [1, 2, 3] };
  render() {
    return (
      <Fragment>
        {this.state.pages.map(page => (
          <div className="border border-primary rounded p-3">
            <h1 key={page}>{page}</h1>
            <Link to={page}>Page {page}</Link>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default NavBar;
