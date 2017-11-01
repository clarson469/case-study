import React, { Component } from 'react';
import Hero from './hero';
import Header from './header';
import NavControl from './nav-control';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
      heroTop: 80
    };
  }
  handleNavControl() {
    const isNavOpen = this.state.isNavOpen;
    this.setState({
      isNavOpen: !isNavOpen,
      heroTop: isNavOpen ? 80 : 160
    });
  }
  render() {
    const heroProps = { top: this.state.heroTop };
    const navControlProps = {
      isOpen: this.state.isNavOpen,
      navControlClick: _ => this.handleNavControl()
    };
    return (
      <main className="main-wrapper">
        <Hero {...heroProps} />
        <Header />
        <NavControl {...navControlProps} />
      </main>
    );
  }
}

export default App;
