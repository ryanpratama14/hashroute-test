import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Any() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Any</p>
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
      </header>
    </div>
  );
}

export default Any;
