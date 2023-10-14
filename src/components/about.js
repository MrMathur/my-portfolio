import React from 'react';
import Hero from './hero';

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
            I am a dedicated UX Designer at MathWorks, where I apply my extensive knowledge and expertise to enhance user experiences.
            My academic journey includes earning an MS in Human-Computer Interaction (HCI) from Georgia Tech and a B.Des from IIT Guwahati.
            My educational background has equipped him with a deep understanding of the intricate relationship between humans and technology, through which I hope to be a valuable asset in crafting intuitive, user-centered solutions.  
          </p>
          <p>
            I strive to create designs that not only function flawlessly but also communicate effectively.
            My commitment to putting users at the center of the design process ensures that every interaction is seamless and meaningful.
            I am also passionate about working with data, and I spend a lot of time thinking about representing and visualizing data in the most effective way for users.
          </p>
          <p>
            Outside of the professional realm, I thrive on coding, prototyping, and pushing the boundaries of what's possible in UX design.
            I also enjoy playing football, diving into video game development, and creating music.
            These diverse interests enrich my creative approach to UX design, making me a well-rounded and innovative designer.
          </p>
        </div>
      </div>
    );
  }
}