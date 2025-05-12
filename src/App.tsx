import "./App.css";
import { eras } from "./data/data";
import Era from "./components/Era";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi I'm Shaughn lets go on a journey through my history as a web
          developer
        </h1>
      </header>
      <main>
        {/* reverse era order */}
        {eras.map((era, index) => {
          return (
            <div key={index}>
              
                <hr className="my-10 w-2/5 border-sky-500 mx-auto" />
              
              <Era eraData={era} />
            </div>
          );
        })}
      </main>
      <footer className="footer">
        <div className="contact-section">
          <h3>Contact Me</h3>
          <div className="contact-links">
            <a href="mailto:anderssji94@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://www.linkedin.com/in/shaughn-anderson/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/ShaughnAnderson94"
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
