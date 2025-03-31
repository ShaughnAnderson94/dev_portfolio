import React from "react";
import "./App.css";
import Project from "./components/Project";
import { eras } from "./data/dummyData";
import Era from "./components/Era";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi I'm Shaughn lets go on a journey through my history as a web developer</h1>
      </header>
      <main>
        {<Era eraData={eras[0]}/>}
        {/* <Project projectData={eras[0].projects[0]}/> */}
      </main>
      <footer className="footer">
        <div className="contact-section">
          <h3>Contact Me</h3>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
