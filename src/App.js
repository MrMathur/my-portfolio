import "./App.css";
import { enable, disable, isEnabled } from "cursor-flashlight";
import AnimatedCursor from "react-animated-cursor";
import ReactGA from "react-ga";
import { useEffect } from "react";

import SectionTitle from "./components/section-title";
import About from "./components/about";
import Project from "./components/project";
import Publication from "./components/publication";
import Experience from "./components/experience";
import FixedSection from "./components/fixed-section";
import Contact from "./components/contact";
import Link from "./components/link";

import QualVis from "./components/assets/thumbnails/qualvis.png";
import Quant from "./components/assets/thumbnails/quant.png";
import DT2D from "./components/assets/thumbnails/dt2d.png";
import DCE from "./components/assets/thumbnails/dce.png";

import Resume from "./components/assets/arpitmathurresume.pdf";

const TRACKING_ID = "G-Q8KHWH9DG0";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  function cursorStyling() {
    enable({ size: "75vmax" });

    return (
      <AnimatedCursor
        innerSize={28}
        outerSize={40}
        color="255,255,255"
        outerAlpha={0.25}
        innerScale={0.5}
        outerScale={2}
        trailingSpeed={5}
      />
    );
  }

  return (
    <div className="App h-screen text-slate-50 flex justify-center">
      {cursorStyling()}

      <FixedSection />
      <div className="flex container pointer-events-none items-start gap-y-5 shrink-0 z-10">
        <div className="hidden lg:flex w-1/3 shrink-0 self-stretch"></div>

        <div className="flex pointer-events-auto w-full lg:w-2/3 lg:pb-24 flex-col items-start">
          <div className="pt-48" name="about">
            <About />

            {/* <Link
              title="→ Schedule 30-Minute Meeting"
              link="https://calendly.com/arpitmam-andrew/30min"
              type="block"
            /> */}
          </div>

          <div className="pt-24" name="projects">
            <SectionTitle title="projects" />
            <Project
              title="QualVis: A Dashboard for Interaction Analysis"
              description="A dashboard to amplify, not automate, transcription in qualitative research. Users can interactively visualize one video dataset in four different ways using contemporary interactive visualization techniques."
              imageUrl={QualVis}
              tags={[
                "Information Visualization",
                "Learning Sciences",
                "D3.JS",
                "React.js",
              ]}
              link="https://mrmathur.github.io/react-iv-dashboard/"
            />
            <Project
              title="Visualizing Quantum Physics"
              description="Interactive web based visualizations as course material for EC 3040 Semiconductor Devices.
              4 interactive chapters were used by 100 students enrolled in EC 3040 over the fall semester 2020, to facilitate remote learning."
              imageUrl={Quant}
              tags={["Instructional Design", "Visual Design", "D3.js", "P5.js"]}
              link="https://mrmathur.github.io/Semiconductor_Visualizations/"
            />
            <Project
              title="AGGIE: Tracking Hate Speech Online during the Myanmar General Elections 2020"
              description="A tool for tracking and classification of problematic posts related to the Myanmar General Elections 2020, using Tableau.
              The tool was used by 16 trackers in Myanmar and helped in the identification of over 20,000 problematic posts."
              imageUrl={DT2D}
              tags={[
                "Information Visualization",
                "ICT4D",
                "Tableau",
                "Angular.js",
              ]}
              link="https://github.com/TID-Lab/aggie"
            />
            <Project
              title="Design Cost Estimation: Visualizing Cost Metrics for MATLAB Projects"
              description="Profiling is a way to measure the time it takes to run your code and identify where MATLAB® spends the most time. After you identify which functions are consuming the most time, you can evaluate them for possible performance improvements."
              imageUrl={DCE}
              tags={["Data Visualization", "UX Design", "Figma"]}
              link="https://www.mathworks.com/help/matlab/matlab_prog/profiling-for-improving-performance.html"
            />
          </div>

          <div className="pt-24" name="publications">
            <SectionTitle title="publications" />
            <Publication
              title="A Human-Centered Approach to Identifying Promises, Risks, & Challenges of Text-to-Image Generative AI in Radiology"
              conference="AIES 2025"
              authors={[
                "Katelyn Morrison",
                "Arpit Mathur",
                "Aidan Bradshaw",
                "Tom Wartmann",
                "Steven Lundi",
                "Afrooz Zandifar",
                "Weichang Dai",
                "Kayhan Batmanghelich",
                "Motahhare Eslami",
                "Adam Perer",
              ]}
              tags={[
                "Generative AI",
                "Radiology",
                "Healthcare Technology",
                "Education",
              ]}
              link="https://arxiv.org/pdf/2507.16207"
            />
            <Publication
              title="Exploratory Visual Analysis of Transcripts for Interaction Analysis in Human-Computer Interaction"
              conference="CHI 2025"
              authors={[
                "Ben Rydal Shapiro",
                "Rogers Hall",
                "Arpit Mathur",
                "Edwin Zhao",
              ]}
              tags={[
                "HCI",
                "Visualization",
                "Qualitative Methods",
                "Transcripts",
              ]}
              link="https://dl.acm.org/doi/10.1145/3706598.3713490"
            />
            <Publication
              title="Clini-Compare: An Interactive Patient-Similarity Visualization Tool for Clinical Decision Support"
              conference="CHI 2025 (WORKSHOP)"
              authors={["Arpit Mathur", "Adam Perer"]}
              tags={[
                "Patient Similarity",
                "Visualization",
                "Decision Support",
                "Healthcare Technology",
              ]}
              link="https://zenodo.org/records/15203352"
            />
            <Publication
              title="Texture: Structured Exploration of Text Datasets"
              conference="Arxiv"
              authors={[
                "Will Epperson",
                "Arpit Mathur",
                "Adam Perer",
                "Dominik Moritz",
              ]}
              tags={[
                "Text Visualization",
                "Exploratory Data Analysis",
                "Interactive Systems",
                "Dataset Tools",
              ]}
              link="https://arxiv.org/pdf/2504.16898"
            />
            <Publication
              title="Toward Interpretable 3D Diffusion in Radiology: Token-Wise Attribution for Text-to-CT Synthesis"
              conference="MIDL 2025"
              authors={[
                "Aidan Bradshaw",
                "Katelyn Morrison",
                "Arpit Mathur",
                "Weicheng Dai",
                "Motahhare Eslami",
                "Kayhan Batmanghelich",
                "Adam Perer",
              ]}
              tags={[
                "3D Diffusion",
                "Explainable AI",
                "Radiology",
                "Text-to-Image",
              ]}
              link="https://openreview.net/pdf?id=DTYFRzRPQn"
            />
            <Publication
              title="Turn charts for interaction analysis: Visually mapping the conversation floor"
              conference="ICLS 2024"
              authors={[
                "Benjamin R. Shapiro",
                "Rogers Hall",
                "Arpit Mathur",
                "Edwin Zhao",
              ]}
              tags={[
                "Learning Sciences",
                "Interaction Analysis",
                "Human–computer interaction",
                "Information Visualization",
              ]}
              link="https://repository.isls.org//handle/1/8993"
            />
            <Publication
              title="Interactive Transcription Techniques for Interaction Analysis"
              conference="ICLS 2022"
              authors={["Arpit Mathur", "Benjamin R. Shapiro"]}
              tags={[
                "Learning Sciences",
                "Interaction Analysis",
                "Human–computer interaction",
                "Information Visualization",
              ]}
              link="https://repository.isls.org//handle/1/8993"
            />
            <Publication
              title="A Study of Motivation, Preferences, and Pain Points Regarding Participation in Career Related Mentorship"
              conference="HCII 2021"
              authors={["Arpit Mathur", "Carrie Bruce"]}
              tags={[
                "Human-computer interaction",
                "Career development",
                "Human resources",
                "Mentor-Mentee relationships",
                "User research",
              ]}
              link="https://link.springer.com/chapter/10.1007/978-3-030-78635-9_60"
            />
            <Publication
              title="Development and Evaluation of Usability Heuristics for Voice User Interfaces"
              conference="ICoRD 2021"
              authors={[
                "Lokesh Fulfagar",
                "Anupriya Gupta",
                "Arpit Mathur",
                "Abhishek Shrivastava",
              ]}
              tags={[
                "Voice user interfaces",
                "Usability heuristics",
                "Heuristic evaluation",
                "Speech interaction",
                "Conversational interfaces",
                "Human–computer interaction",
              ]}
              link="https://link.springer.com/chapter/10.1007/978-981-16-0041-8_32"
            />
            <Publication
              title="A Study of Outbound Automated Call Preferences for DOTS Adherence in Rural India."
              conference="INTERACT 2019"
              authors={["Arpit Mathur", "Shimmila Bhowmick", "Keyur Sorathia"]}
              tags={[
                "Automated calls",
                "IVR",
                "ICTD",
                "HCI4D",
                "Health education",
              ]}
              link="https://link.springer.com/chapter/10.1007/978-3-030-29387-1_2"
            />
          </div>

          <div className="pt-24 md:min-h-screen" name="experience">
            <SectionTitle title="experience" />
            <Experience
              company="Carnegie Mellon University"
              roles={[
                {
                  role: "Doctoral Research Assistant",
                  year: "Aug 24 - Present",
                  description:
                    "Conducting research at the intersection of Human-Computer Interaction, Machine Learning, Healthcare, and Human-AI Collaboration, focusing on developing innovative solutions in healthcare using advanced data visualization techniques.",
                },
              ]}
            />

            <Experience
              company="The MathWorks, Inc."
              roles={[
                {
                  role: "UX Designer",
                  year: "Jun 21 - Jun 24",
                  description:
                    "Supporting multiple MATLAB and Simulink products, including MATLAB fixed-point workflows, Simulink Studio, and System Composer. Responsibilities include collaborative design events, wireframing, iterative prototyping and high-fidelity visual design.",
                },
              ]}
            />

            <Experience
              company="Georgia Institute of Technology"
              roles={[
                {
                  role: "Graduate Research Assistant",
                  year: "Jan 20 - Jul 20",
                  description:
                    "Worked with the School of Electrical Engineering, to create course Material for EC 3040 Semiconductor Devices. Created interactive web based visualizations as course materials using D3.js and P5.js.",
                },
                {
                  role: "Graduate Teaching Assistant",
                  year: "Aug 20 - May 21",
                  description:
                    "Served as a Teaching Assistant for CS 4460 Introduction to Information Visualization over Fall 2020 and Spring 2020. Major responsibilities included lecturing, grading, and assisting undergradute students with d3.js and Tableau. ",
                },
              ]}
            />
            <Experience
              company="SAS Research and Development"
              roles={[
                {
                  role: "UX Design Intern",
                  year: "May 18 - Jul 18",
                  description:
                    "Redesigned the SAS Analytics Credit Scoring Tool. Conducted Contextual Interviews with Risk Analysts in Indian banks, and used those insights to create high-fidelity sketch mockups.",
                },
              ]}
            />
            <Link title="→ View Full CV" link={Resume} type="block" />
          </div>

          <div className="flex w-full lg:hidden mb-10">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
