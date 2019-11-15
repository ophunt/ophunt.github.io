import React from 'react';

import IconLink from "./IconLink";

import hunt from "../img/HUNT.png";
import githubMark from "../img/GitHubMark.png";
import linkedinMark from "../img/LinkedInMark.png";
import resumeMark from "../img/Resume.png";

import resumePDF from "../Resume.pdf";

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
		<img src={hunt} alt="Headshot" id="hunt"/>
		<h1>Owen Hunt</h1>
		<div className="social">
			<IconLink link="https://github.com/ophunt" icon={githubMark} alt="GitHub" />
			<IconLink link="https://www.linkedin.com/in/owen-hunt/" icon={linkedinMark} alt="LinkedIn" />
			<IconLink link={resumePDF} icon={resumeMark} alt="Resume" />
		</div>
    </div>
  );
}

export default Sidebar;
