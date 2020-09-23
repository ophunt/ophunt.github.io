import React from 'react';

import Sidebar from "./Components/Sidebar";

import About from "./Sections/About";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";

import './App.css';

function App() {
  return (
    <div className="App">
		<Sidebar />
		<div className="Main">
			<About />
			<Education />
			<Experience />
			<Projects />
		</div>
    </div>
  );
}

export default App;
