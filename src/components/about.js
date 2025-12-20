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
            Human-Computer Interaction Institute, I design and build
            human-centered AI systems for high-stakes domains, like healthcare.
            My work sits at the intersection of Human-AI Collaboration, Data
            Visualization, and Applied Machine Learning, with a strong emphasis
            on turning research ideas into working, usable tools.
          </p>
          <p>
            I build end-to-end prototypes that help people reason with complex
            AI outputs, bridge expertise gaps between experts and non-experts,
            and support real decision-making. Across my projects, I work
            hands-on across the stack, from interaction design and front-end
            systems to model integration and evaluation with real users.
          </p>
          <p>
            Before my Ph.D., I got my B.Des from the{" "}
            <a
              target="_blank"
              href="https://www.iitg.ac.in/design/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Indian Institute of Technology, Guwahati
            </a>{" "}
            and earned an M.S. in HCI from the{" "}
            <a
              target="_blank"
              href="https://mshci.gatech.edu/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Georgia Institute of Technology
            </a>
            . Through these experiences, I developed a strong foundation in
            applied HCI and systems thinking. I’ve also worked as a UX Designer
            at{" "}
            <a
              target="_blank"
              href="https://www.mathworks.com/"
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              MathWorks
            </a>
            , improving Model-Based Systems Engineering workflows for MATLAB and
            Simulink, which shaped how I think about designing tools for
            technical, expert users at scale.
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
            . I love playing and watching football, and I'm an avid{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Arsenal_F.C."
              class="w-full sm:w-3/4 text-slate-50  hover:underline hover:underline-offset-2 hover:text-orange-400 font-semibold"
            >
              Arsenal fan
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
