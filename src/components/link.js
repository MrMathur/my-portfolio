import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type == "block") {
      return(
        <div className="flex w-full mt-4 px-4 sm:px-0">
          <div className="w-0 sm:w-1/4"></div>
          <a target="_blank" rel="noopener noreferrer" href={this.props.link} className="w-full sm:w-3/4 text-content text-lg underline underline-offset-2 hover:text-accent font-semibold transition-colors duration-150">{this.props.title}</a>
        </div>
      );
    } else {
      return(
        <a target="_blank" rel="noopener noreferrer" href={this.props.link} className="w-full sm:w-3/4 text-content text-lg underline underline-offset-2 hover:text-accent font-semibold transition-colors duration-150">{this.props.title}</a>
      );
    }
  }

}