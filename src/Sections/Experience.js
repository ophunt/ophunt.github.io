import React from 'react';

import Section from "../Components/Section";
import DatedEntry from "../Components/DatedEntry";

import './Experience.css';

function Experience() {
  return (
    <Section name="Experience">
		<DatedEntry name="Software Development Intern" date="May 2019 - Present">
			<p>Mandli Communications</p>
			<ul>
				<li>Developed software to stitch images into panoramas, reducing costs over existing solution by 98%</li>
				<li>Organized and held meetings of 10+ stakeholders to gather requirements and verify solutions</li>
				<li>Currently working to integrate large parts of delivery pipeline into RESTful API</li>
			</ul>
		</DatedEntry>

		<DatedEntry name="Support Specialist" date="Sep 2018 - Present">

		</DatedEntry>
    </Section>
  );
}

export default Experience;
