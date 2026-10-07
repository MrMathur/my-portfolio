import React from 'react';

export default class SectionTitle extends React.Component {
  render() {
    return (
      <div className="flex w-full px-4 sm:px-0 mb-4">
        <div className="w-0 sm:w-1/4"></div>
        <h2 className="w-full sm:w-3/4 text-content-dim text-xs font-normal tracking-widest uppercase">
          • {this.props.title}
        </h2>
      </div>
    );
  }
}
