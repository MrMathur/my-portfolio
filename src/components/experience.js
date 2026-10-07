import React from 'react';

export default class Experience extends React.Component {
  render() {
    return (
      <div className="my-10">
        <div className="flex w-full px-4 sm:px-0 mb-3">
          <div className="w-0 sm:w-1/4"></div>
          <h2 className="w-full sm:w-3/4 text-content text-base font-semibold">
            {this.props.company}
          </h2>
        </div>
        {this.props.roles
          ? this.props.roles.map((role, i) => (
              <Role key={i} role={role.role} year={role.year} description={role.description} />
            ))
          : null}
      </div>
    );
  }
}

class Role extends React.Component {
  render() {
    return (
      <div className="flex flex-col sm:flex-row sm:items-start w-full px-4 sm:px-0 mt-4 gap-y-1 sm:gap-x-6">
        <div className="sm:w-1/4 sm:shrink-0 sm:text-right sm:pt-0.5">
          <h4 className="text-content-dim text-xs font-normal tracking-widest uppercase">
            {this.props.year}
          </h4>
        </div>
        <div className="flex-1 flex flex-col gap-y-1.5 min-w-0">
          <h3 className="text-content-dim text-sm font-semibold">
            {this.props.role}
          </h3>
          <p className="text-content-dim text-base font-normal leading-relaxed">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
