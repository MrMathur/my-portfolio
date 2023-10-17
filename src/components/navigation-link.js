import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
  }

  render() {
    return(
      <li className="text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase">
        <button className={this.state.active ? "text-slate-50 font-semibold uppercase" : "uppercase"}>• {this.props.section}</button>
      </li>
    );
  }
}