import Search from "./Search";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import Music from "./Music";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-5">
        <header>
          <h1 className="app-greeting mb-5 text-uppercase">
            Today's weather is...
          </h1>
        </header>

        <div className="row">
          <div className="col-sm-8">
            <Search />
            <br />
            <WeatherToday />
          </div>
          <div className="col-sm-4">
            <Forecast />
            <br />
            <Music />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
