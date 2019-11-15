import React from 'react';

function IconLink(props) {
	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<img src={props.icon} alt={props.alt} />
		</a>
	  );
}

export default IconLink;
