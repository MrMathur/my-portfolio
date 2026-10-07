import React from 'react';
import Tag from './tag';

export default class Project extends React.Component {
  render() {
    return (
      <a
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full flex flex-col sm:flex-row sm:items-start rounded-lg hover:bg-surface-deep bg-transparent py-3 px-4 sm:p-4 my-3 gap-y-3 sm:gap-x-5 transition-colors duration-150"
      >
        <div className="w-full sm:w-1/4 sm:shrink-0">
          <img
            src={this.props.imageUrl}
            alt={this.props.title + " project thumbnail"}
            className="block w-full aspect-video rounded"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-y-2 min-w-0">
          <h3 className="text-content-card text-lg font-semibold group-hover:text-accent group-hover:underline group-hover:underline-offset-2">
            {this.props.title}
          </h3>
          <p className="text-content-dim text-base font-normal leading-relaxed">
            {this.props.description}
          </p>
          <div className="flex flex-wrap items-start mt-1">
            {this.props.tags ? this.props.tags.map(tag => <Tag tag={tag} key={tag} />) : null}
          </div>
        </div>
      </a>
    );
  }
}
