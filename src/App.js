import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is App</p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/dsdas");
          }}
        >
          Any
        </button>
        <a href="#/contact">To Contact</a>
      </header>
    </div>
  );
}

export default App;
