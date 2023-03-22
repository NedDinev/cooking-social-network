import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
