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
      <Link className='text-content-dim hover:text-accent text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase transition-colors duration-150' activeClass="text-content font-semibold" to={this.props.section} spy={true} smooth={true} offset={8} duration={500} > • {this.props.section} </Link>                     
    );
  }
}