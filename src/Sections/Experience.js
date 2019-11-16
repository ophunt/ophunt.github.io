import React from 'react';

import Section from "../Components/Section";
import DatedEntry from "../Components/DatedEntry";

import './Experience.css';

function Experience() {
  return (
    <Section name="Experience">
		<DatedEntry
			name="Software Development Intern"
			date="May 2019 - Present"
			subtitle="Mandli Communications">
			<ul>
				<li>Developed software to stitch images into panoramas, reducing costs over existing solution by 98%</li>
				<li>Organized and held meetings of 10+ stakeholders to gather requirements and verify solutions</li>
				<li>Currently working to integrate large parts of delivery pipeline into RESTful API</li>
			</ul>
		</DatedEntry>

		<DatedEntry
			name="Support Specialist"
			date="Sep 2018 - Present"
			subtitle="UW–Madison DoIT Help Desk">
			<ul>
				<li>Provided technical support for a wide range of both common and proprietary technologies</li>
				<li>Determined issues and utilized relevant documentation and knowledge to find and apply solutions</li>
			</ul>
		</DatedEntry>
    </Section>
  );
}

export default Experience;
