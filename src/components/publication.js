import React from 'react';
import Tag from './tag';

export default class Publication extends React.Component {
  render() {
    return (
      <a
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full flex flex-col sm:flex-row sm:items-start rounded-lg hover:bg-surface-deep bg-transparent py-3 px-4 sm:p-4 my-3 gap-y-1 sm:gap-x-6 transition-colors duration-150"
      >
        <div className="sm:w-1/4 sm:shrink-0 sm:text-right sm:pt-0.5">
          <h4 className="text-content-dim text-xs font-normal tracking-widest uppercase">
            {this.props.conference}
          </h4>
        </div>
        <div className="flex-1 flex flex-col gap-y-2 min-w-0">
          <h3 className="text-content-card text-base font-semibold group-hover:text-accent group-hover:underline group-hover:underline-offset-2">
            {this.props.title}
          </h3>
          <p className="text-content-dim text-sm font-normal leading-relaxed">
            {this.props.authors
              ? this.props.authors.map((author, i) => (
                  <span key={i} className={author === "Arpit Mathur" ? "font-semibold" : ""}>
                    {author}{i === this.props.authors.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </p>
          <div className="flex flex-wrap items-start mt-1">
            {this.props.tags ? this.props.tags.map(tag => <Tag tag={tag} key={tag} />) : null}
          </div>
        </div>
      </a>
    );
  }
}
