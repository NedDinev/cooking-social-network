import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div style={styles.container}>
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
};
