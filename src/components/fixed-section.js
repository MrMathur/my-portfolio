import React from 'react';
import Hero from './hero';
import NavigationLink from './navigation-link';
import Contact from './contact';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default class FixedSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="hidden lg:flex fixed container h-full items-start gap-y-5 shrink-0">
        <div className="flex w-1/3 pt-48 pb-24 flex-col justify-between items-start shrink-0 self-stretch">
          <div className="flex flex-col items-start gap-y-24 self-stretch">
            <Hero />
            <div className="flex flex-col self-stretch gap-y-5">
              <Link className='text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase' activeClass="text-slate-50 font-semibold" to="about" spy={true} smooth={true} offset={8} duration={500} > • About </Link>              
              <Link className='text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase' activeClass="text-slate-50 font-semibold" to="projects" spy={true} smooth={true} offset={8} duration={500} > • Projects </Link>              
              <Link className='text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase' activeClass="text-slate-50 font-semibold" to="publications" spy={true} smooth={true} offset={8} duration={500} > • Publications </Link>              
              <Link className='text-slate-400 hover:text-orange-400 text-xl hover:font-semibold font-normal leading-none tracking-wide uppercase' activeClass="text-slate-50 font-semibold" to="experience" spy={true} smooth={true} offset={8} duration={500} > • Experience </Link>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    );
  }
}