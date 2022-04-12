import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App p-5">
      <div className="container p-5">
        <header>
          <h1 className="app-greeting mb-5 text-uppercase">
            Today's weather is...
          </h1>
        </header>

        <Search defaultLocation="Singapore" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
