import React from 'react';

import Sidebar from "./Components/Sidebar";

import About from "./Sections/About";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";

import './App.css';

function App() {
  return (
    <div className="App">
		<Sidebar />
		<div className="Main">
			<About />
			<Education />
			<Experience />
		</div>
    </div>
  );
}

export default App;
