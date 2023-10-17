import React from 'react';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="my-8">
        <div className="block sm:flex w-full px-4 sm:px-0">
          <div className="w-full sm:w-1/4"></div>
          <h2 className="w-full sm:w-3/4 text-slate-50 text-lg font-semibold">{this.props.company}</h2>
        </div>
        {this.props.roles ? this.props.roles.map((role, i) => <Role key={i} role={role.role} year={role.year} description={role.description} />) : null}
      </div>
    );
  }
}

class Role extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(  
      <div className="w-full mt-4">
        <div className="block sm:flex w-full px-4 sm:px-0">
          <div className="w-full sm:w-1/4 pr-0 sm:pr-8 ">          
          </div>
          <div className="w-full sm:w-3/4 flex items-start gap-x-5">
            <div className="flex flex-col items-start gap-y-3">
              <h3 className="text-slate-400 text-xl font-semibold">{this.props.role}</h3>
            </div>
          </div>
        </div>
        <div className="block mt-2 sm:flex w-full px-4 sm:px-0">
          <div className="w-full sm:w-1/4 pr-0 sm:pr-8">          
            <h4 className="block w-full text-slate-400 text-left sm:text-right text-base font-light tracking-wide uppercase">{this.props.year}</h4>
          </div>
          <div className="w-full mt-1 sm:mt-0 sm:w-3/4 flex items-start gap-x-5">
            <div className="flex flex-col items-start gap-y-3">
            <p className="text-slate-400 text-xl font-normal">
              {this.props.description}
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}