import React from 'react';

import './DatedEntry.css';

function DatedEntry(props) {
	const additionalClassName = props.className ? " " + props.className : "";

	return (
	    <div className={"DatedEntry" + additionalClassName}>
			<p className="datedEntryName">{props.name}</p>
			<p className="datedEntryDate">{props.date}</p>
			<div className="datedEntryChildren">
				{props.children}
			</div>
		</div>
 	);
}

export default DatedEntry;
