import React from 'react';

import Section from "../Components/Section";

import './About.css';

function About() {
  return (
    <Section name="About">
		<p>
			Hello! I'm a Computer Science and Mathematics student at the University of Wisconsin–Madison.
			Last summer, I interned at Mandli Communications writing software to stitch panoramas from roadway
			images, implementing many other features such as header and EXIF manipulation as well. I also work
			on side projects in my free time, which are variously incremental games, python games, and all learning
			experiences. I'm looking forward to what the future holds for me!
		</p>
    </Section>
  );
}

export default About;
