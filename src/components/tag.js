import React from 'react';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="hidden sm:inline-block my-2 mx-1 py-1.5 px-2 justify-center items-center rounded-full border-2 border-orange-400 bg-slate-800">
        <p className="text-orange-400 text-sm tracking-wide uppercase">{this.props.tag}</p>
      </div>
    );
  }
}