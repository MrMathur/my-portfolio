import React from 'react';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="flex flex-col justify-center items-start gap-y-3 self-stretch">
        <h1 className="text-slate-50 text-7xl font-semibold leading-none w-full">Arpit Mathur</h1>
        <h2 className="text-slate-200 text-3xl font-normal leading-none w-full">UX Designer at MathWorks</h2>
      </div>
    );
  }
}