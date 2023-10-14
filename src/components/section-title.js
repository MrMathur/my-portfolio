import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="flex w-full mt-16 mb-8 px-4 sm:px-0">
        <div className="w-0 sm:w-1/4"></div>
        <h2 className="w-full sm:w-3/4 text-slate-50 text-lg font-semibold tracking-wide uppercase">• {this.props.title}</h2>
      </div>
    );
  }

}