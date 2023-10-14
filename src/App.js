import logo from './logo.svg';
import './App.css';
import {
  enable,
  disable,
  isEnabled,
} from 'cursor-flashlight';
import AnimatedCursor from 'react-animated-cursor';

import SectionTitle from './components/section-title';
import About from './components/about';
import Project from './components/project';
import Publication from './components/publication';
import Experience from './components/experience';
import FixedSection from './components/fixed-section';
import Contact from './components/contact';
import Link from './components/link';

import QualVis from './components/thumbnails/qualvis.png';
import Quant from './components/thumbnails/quant.png';
import DT2D from './components/thumbnails/dt2d.png';
import DCE from './components/thumbnails/dce.png';

function App() {

  function cursorStyling() {
    enable({ size: '75vmax' });

    return (
      <AnimatedCursor
        innerSize={28}
        outerSize={40}
        color='255,255,255'
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
    
        <div className="flex pointer-events-auto w-full lg:w-2/3 pt-48 lg:pb-24 flex-col items-start gap-y-5">
      
          <About id="about-section" />
          
          <SectionTitle id="projects-section" title="Projects" />
          <Project 
            title="QualVis: A Dashboard for Interaction Analysis"
            description="A dashboard to amplify, not automate, transcription in qualitative research. Users can interactively visualize one video dataset in four different ways using contemporary interactive visualization techniques."
            imageUrl={QualVis}
            tags={['Information Visualization', 'Learning Sciences', 'D3.JS', 'React.js']} 
            link="https://mrmathur.github.io/react-iv-dashboard/"
          />
          <Project 
            title="Visualizing Quantum Physics"
            description="Interactive web based visualizations as course material for EC 3040 Semiconductor Devices.
            4 interactive chapters were used by 100 students enrolled in EC 3040 over the fall semester 2020, to facilitate remote learning."
            imageUrl={Quant}
            tags={['Instructional Design', 'Visual Design', 'D3.js', 'P5.js']} 
            link="https://mrmathur.github.io/Semiconductor_Visualizations/"
          />
          <Project 
            title="AGGIE: Tracking Hate Speech Online during the Myanmar General Elections 2020"
            description="A tool for tracking and classification of problematic posts related to the Myanmar General Elections 2020, using Tableau.
            The tool was used by 16 trackers in Myanmar and helped in the identification of over 20,000 problematic posts."
            imageUrl={DT2D}
            tags={['Information Visualization', 'ICT4D', 'Tableau', 'Angular.js']} 
            link="https://github.com/TID-Lab/aggie"
          />
          <Project 
            title="Design Cost Estimation: Visualizing Cost Metrics for MATLAB Projects"
            description="Profiling is a way to measure the time it takes to run your code and identify where MATLAB® spends the most time. After you identify which functions are consuming the most time, you can evaluate them for possible performance improvements."
            imageUrl={DCE}
            tags={['Data Visualization', 'UX Design', 'Figma']} 
            link="https://www.mathworks.com/help/matlab/matlab_prog/profiling-for-improving-performance.html"
          />

          <SectionTitle id="publications-section"  title="Publications" />
          <Publication 
            title="Interactive Transcription Techniques for Interaction Analysis"
            conference="ICLS 2022"
            authors={['Arpit Mathur', 'Benjamin R. Shapiro']}
            tags={['Learning Sciences', 'Interaction Analysis', 'Human–computer interaction', 'Information Visualization']}
            link="https://repository.isls.org//handle/1/8993"
          />    
          <Publication 
            title="A Study of Motivation, Preferences, and Pain Points Regarding Participation in Career Related Mentorship"
            conference="HCII 2021"
            authors={['Arpit Mathur', 'Carrie Bruce']}
            tags={['Human-computer interaction', 'Career development', 'Human resources', 'Mentor-Mentee relationships', 'User research']}
            link="https://link.springer.com/chapter/10.1007/978-3-030-78635-9_60"
          />    
          <Publication 
            title="Development and Evaluation of Usability Heuristics for Voice User Interfaces"
            conference="ICoRD 2021"
            authors={['Lokesh Fulfagar', 'Anupriya Gupta', 'Arpit Mathur', 'Abhishek Shrivastava']}
            tags={['Voice user interfaces', 'Usability heuristics', 'Heuristic evaluation', 'Speech interaction', 'Conversational interfaces', 'Human–computer interaction']}
            link="https://link.springer.com/chapter/10.1007/978-981-16-0041-8_32"
          />    
          <Publication 
            title="A Study of Outbound Automated Call Preferences for DOTS Adherence in Rural India."
            conference="INTERACT 2019"
            authors={['Arpit Mathur', 'Shimmila Bhowmick', 'Keyur Sorathia']}
            tags={['Automated calls', 'IVR', 'ICTD', 'HCI4D', 'Health education']}
            link="https://link.springer.com/chapter/10.1007/978-3-030-29387-1_2"
          />    

          <SectionTitle id="resume-section"  title="Experience" />
          <Experience 
            company="The MathWorks, Inc."
            roles={[
              {
                role: "UX Designer",
                year: "Jun 21 - Present",
                description: "Supported multiple MATLAB and Simulink products, including MATLAB fixed-point workflows, Simulink Studio, and System Composer. Responsibilities included collaborative design events, wireframing, iterative prototyping and high-fidelity visual design."
              }
            ]} />

          <Experience 
            company="Georgia Institute of Technology"
            roles={[
              {
                role: "M.S. in Human-Computer Interaction",
                year: "Aug 19 - May 21",
                description: "School of Interactive Computing. Key courses included Introduction to Information Visualization, Data and Visual Analytics, Psychological Research Methods, and Study of Online Communities."
              },
              {
                role: "Graduate Research Assistant",
                year: "Jan 20 - Jul 20",
                description: "Worked with the School of Electrical Engineering, to create course Material for EC 3040 Semiconductor Devices. Created interactive web based visualizations as course materials using D3.js and P5.js."
              },
              {
                role: "Graduate Teaching Assistant",
                year: "Aug 20 - May 21",
                description: "Served as a Teaching Assistant for CS 4460 Introduction to Information Visualization over Fall 2020 and Spring 2020. Major responsibilities included lecturing, grading, and assisting undergradute students with d3.js and Tableau. "
              }]} 
            />
          <Experience 
            company="SAS Research and Development"
            roles={[
              {
                role: "UX Design Intern",
                year: "May 18 - Jul 18",
                description: "Redesigned the SAS Analytics Credit Scoring Tool. Conducted Contextual Interviews with Risk Analysts in Indian banks, and used those insights to create high-fidelity sketch mockups."
              }]} 
            />
          <Experience 
            company="Indian Institute of Technology Guwahati"
            roles={[
              {
                role: "Bachelor of Design",
                year: "Aug 15 - May 19",
                description: "Key courses include Introduction to Interaction Design, Design Methods, Physical Computing, Design Analysis, Tangible Interfaces, Instructional Design, System and Information Design. As part of co-curricular activities, lead the Coding Club as secretary and was part of the core team of the student techinical festival."
              },{
                role: "Minor in Mathematics",
                year: "Aug 16 - Dec 18",
                description: "Key courses include Real Analysis, Mathematical Statistics, Scientific Computing, Modern Algebra, and Differential Geometry."
              }]} 
            />
          <Link title="View Full Resume" link="www.linkedin.com" />
        
          <div className="flex w-full lg:hidden mb-10">
            <Contact />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
