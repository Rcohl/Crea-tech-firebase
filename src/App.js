import "./App.css";
import A_propos from "./components/A_propos/A_propos";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AllServices from "./components/AllServices/AllServices";
import Contact from "./components/Contact/Contact";
import Avis from "./components/Avis/Avis";
import { BrowserRouter } from "react-router-dom";
import Cookie from "./components/Cookie/Cookie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Accueil />
      <AllServices />
      <A_propos />
      <Avis />
      <br />
      <Contact />
      <Footer />
      <Cookie/>
    </div>
  );
}

export default App;
