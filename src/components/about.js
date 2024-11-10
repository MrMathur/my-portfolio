import React from "react";
import Hero from "./hero";
import Link from "./link";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="w-0 lg:w-1/4 "></div>
        <div className="w-full px-4 sm:px-0 sm:w-3/4 flex flex-col self-stretch gap-y-2.5 text-slate-400 text-xl font-normal">
          <div className="block lg:hidden mb-20">
            <Hero />
          </div>
          <p>
            As a Ph.D. student at{" "}
            <a
              target="_blank"
              href="https://hcii.cmu.edu/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Carnegie Mellon University's
            </a>{" "}
            Human-Computer Interaction Institute, my research focuses on
            Human-AI Collaboration, Healthcare, and Data Visualization. I’m
            particularly interested in building useful, responsible AI tools
            that address real world problems in healthcare and improve patient
            outcomes.
          </p>
          <p>
            My journey in HCI started with my B.Des at the{" "}
            <a
              target="_blank"
              href="https://www.iitg.ac.in/design/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Indian Institute of Technology, Guwahati
            </a>
            , where I got the opportunity to work on many interaction design
            projects, specifically in low-resource settings. Driven by an itch
            to dig deeper, I decided to take a giant leap across the globe to
            pursue an M.S. in HCI at the{" "}
            <a
              target="_blank"
              href="https://mshci.gatech.edu/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Georgia Institute of Technology
            </a>{" "}
            in Atlanta.
          </p>
          <p>
            Before starting my Ph.D., I worked as a UX Designer at{" "}
            <a
              target="_blank"
              href="https://www.mathworks.com/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              The MathWorks
            </a>
            {""}, where I improved Model-Based Systems Engineering and Design
            workflows for MATLAB and Simulink users.
          </p>
          <p>
            Outside of academia, I enjoy video game design and development. You
            can find some of my{" "}
            <a
              target="_blank"
              href="https://itch.io/profile/mrmathur"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Gamejam Submissions here
            </a>
            . I love playing and watching football, and I'm a{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Arsenal_F.C."
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Gooner Till I die
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
