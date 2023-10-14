import React from 'react';

export default class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    }
    console.log(this.state);
  }

  render() {
    return(
      <li 
        className="text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase">
        <a className={this.state.active ? "text-slate-50 font-semibold" : ""} href={"#" + this.props.section + "-section"}>• {this.props.section}</a>
      </li>
    );
  }
}