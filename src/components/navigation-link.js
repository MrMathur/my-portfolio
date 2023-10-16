import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

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
        <ScrollIntoView selector={"#" + this.props.section}>
          <button className={this.state.active ? "text-slate-50 font-semibold uppercase" : "uppercase"}>• {this.props.section}</button>
        </ScrollIntoView>
      </li>
    );
  }
}