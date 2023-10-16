import React from 'react';
import Hero from './hero';
import Link from './link';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="flex justify-center">
        <div className="w-0 lg:w-1/4 ">
        </div>
        <div className="w-full px-4 sm:px-0 sm:w-3/4 flex flex-col self-stretch gap-y-2.5 text-slate-400 text-xl font-normal">
          <div className="block lg:hidden mb-20">
            <Hero />
          </div>
          <p>
            My journey in User Experience started with my B.Des at the <Link title="Indian Institute of Technology, Guwahati" link="https://www.iitg.ac.in/design/"/>, where I got the opportunity to work on many interaction design projects, specifically in low-resource settings.
            Driven by an itch to dig deeper, I decided to take a giant leap across the globe to pursue an M.S. in Human-Computer Interaction at the <Link title="Georgia Institute of Technology" link="https://mshci.gatech.edu/"/> in Atlanta. 
          </p>
          <p>
            Graduate school broadened my horizons by giving me many opportunities to explore the intricacies of how humans interact with software. 
            It also introduced me to the discipline of <Link title="Information Visualization" link="https://open.spotify.com/episode/1RN3IGtdBBpGVmOCX8Hevs?si=b2e3fe9fb94f48e8" />, which I am very passionate about. 
            I am able to leverage this passion at my current role as a UX Designer at <Link title="The MathWorks, Inc." link="https://www.mathworks.com/"/>, where I work on improving Model Based Systems Engineering and Design workflows for customers across MATLAB and Simulink. 
          </p>
          <p>
          Outside of work, I find my creativity unleashed in the realm of video game design and development. 
          You'll often find me diving into game jams, cooking up <Link title="quirky games" link="https://itch.io/profile/mrmathur" /> in just a weekend.
          I love playing and watching football, and my heart belongs to the Arsenal. When I'm not geeking out over tech and games, I enjoy playing the piano.
          </p>
        </div>
      </div>
    );
  }
}