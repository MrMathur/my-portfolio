import React from "react";

import GmailSVG from "./assets/contact-svgs/gmail";
import LinkedInSVG from "./assets/contact-svgs/linkedin";
import GithubSVG from "./assets/contact-svgs/github";
import DribbbleSVG from "./assets/contact-svgs/dribbble";
import GoogleScholarSVG from "./assets/contact-svgs/google_scholar";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-start gap-y-3 self-stretch w-full mt-10 lg:mt-0">
        <h2 className="text-orange-400 mb-2 lg:mb-0 text-center lg:text-left w-full text-xl font-normal leading-none">
          Get in touch!
        </h2>
        <div className="flex justify-between lg:justify-normal w-full p-0.5 items-start gap-x-3">
          <GmailSVG />
          <LinkedInSVG />
          <GithubSVG />
          {/* <DribbbleSVG /> */}
          <GoogleScholarSVG />
          {/* <a target="_blank" href="mailto:arpitmathur19@gmail.com">
            <img src={GmailSVG} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/arpitmathurinfo/">
            <img src={LinkedInSVG} />
          </a>
          <a target="_blank" href="https://github.com/MrMathur">
            <img src={GithubSVG} />
          </a> */}
        </div>
      </div>
    );
  }
}
