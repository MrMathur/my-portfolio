import React from 'react';
import Tag from './tag';

export default class Publication extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a href={this.props.link} target="_blank" className="group w-full block sm:rounded-lg hover:bg-slate-800 bg-slate-700 sm:bg-transparent py-2">
        <div className="block sm:flex w-full px-4 sm:px-0">
          <div className="w-full sm:w-1/4 pr-0 sm:pr-8 ">          
          </div>
          <div className="w-full sm:w-3/4 flex items-start gap-x-5">
            <div className="flex flex-col items-start gap-y-3">
              <h3 className="text-slate-100 text-xl font-semibold group-hover:text-orange-400 group-hover:underline group-hover:underline-offset-2">{this.props.title}</h3>
            </div>
          </div>
        </div>
        <div className="block mt-2 sm:flex w-full px-4 sm:px-0">
          <div className="w-full sm:w-1/4 pr-0 sm:pr-8">          
            <h4 className="block w-full text-slate-400 text-left sm:text-right text-base font-light tracking-wide uppercase">{this.props.conference}</h4>
          </div>
          <div className="w-full mt-1 sm:mt-0 sm:w-3/4 flex items-start gap-x-5">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-slate-400 text-xl font-normal">
                {this.props.authors ? this.props.authors.map((author, i) => <span key={i} className={author == "Arpit Mathur" ? "font-semibold" : ""}>{author}{i == this.props.authors.length - 1 ? '' : ', '}</span>) : null}
              </p>
              <div className="hidden sm:block items-start">
                {this.props.tags ? this.props.tags.map(tag => <Tag tag={tag} key={tag} />) : null}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}