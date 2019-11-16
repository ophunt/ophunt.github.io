import React from 'react';

import Section from "../Components/Section";
import DatedEntry from "../Components/DatedEntry";

import './Education.css';

function Education() {
  return (
    <Section name="Education">
		<DatedEntry
			name="University of Wisconsin–Madison"
			date="Sep 2018 - May 2022"
			subtitle="Bachelor of Science in Computer Science and Mathematics – 4.0 GPA" />
    </Section>
  );
}

export default Education;
