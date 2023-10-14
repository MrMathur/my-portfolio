import React from 'react';
import Hero from './hero';
import NavigationLink from './navigation-link';
import Contact from './contact';

export default class FixedSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      svgs: []
    }
  }

  render() {
    return(
      <div className="hidden lg:flex fixed container h-full items-start gap-y-5 shrink-0">
        <div className="flex w-1/3 pt-48 pb-24 flex-col justify-between items-start shrink-0 self-stretch">
          <div className="flex flex-col items-start gap-y-24 self-stretch">
            <Hero />
            {/* <ul className="flex flex-col self-stretch gap-y-5">
              <NavigationLink section="about" active={true}/>
              <NavigationLink section="projects" active={false} />
              <NavigationLink section="publications" active={false} />
              <NavigationLink section="experience" active={false} />
            </ul> */}
          </div>
          <Contact />
        </div>
      </div>
    );
  }
}