import "./App.css";
import Dictionary from "./Dictionary";
import Navbar from "./Navbar";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <main>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Redirect to="/definitions/bird" />
              </Route>

              <Route path="/definitions/:word">
                <h1 className="display-2">Dictionary</h1>
                <Dictionary />
              </Route>

              <Route path="/definitions">
                <h1 className="display-2">Dictionary</h1>
                <Dictionary />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </main>

          <footer>
            <small>
              Coded by Rafaela -{" "}
              <a
                href="https://github.com/Rafalenda/my-dictionary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </small>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Beluga from './Beluga';
// import Blue from './Blue';

// export default function Whale() {
//   const { type } = useParams();

//   return (
//     <>
//       <h2>Whale</h2>
//       {type === 'beluga' && <Beluga />}
//       {type === 'blue' && <Blue />}
//     </>
//   );
// }
