import React, { Component } from 'react';
import cl from 'classnames';

export default class Header extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  onBurgerClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <nav className="header navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            TILDER
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.onBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={cl('navbar-menu', 'navbar-end', {
            'is-active': this.state.isActive
        })}>
          <a className="navbar-item" href="/">
            Wtf
          </a>
        </div>
      </nav>
    );
  }
}

interface IState {
  isActive: boolean,
};
