import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>

        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Rafalenda/my-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Rafaela
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
