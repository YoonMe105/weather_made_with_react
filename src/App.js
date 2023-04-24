import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <p>
          This project was coded by Yoon Me Me Pyo and is
          <a href="">
            open-sourced.
          </a>
        </p>
      </footer>
    </div>
  );
}
