import React from 'react';

import './Section.css';

function Section(props) {
  return (
    <div className={"Section " + props.name}>
		<h2>{props.name}</h2>
		{props.children}
    </div>
  );
}

export default Section;
