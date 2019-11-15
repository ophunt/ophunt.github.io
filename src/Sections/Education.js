import React from 'react';

import Section from "../Components/Section";
import DatedEntry from "../Components/DatedEntry";

import './Education.css';

function Education() {
  return (
    <Section name="Education">
		<DatedEntry name="University of Wisconsin–Madison" date="Sep 2018 - May 2022">
			<p>Bachelor of Science in Computer Science and Mathematics</p>
		</DatedEntry>
    </Section>
  );
}

export default Education;
