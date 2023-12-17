import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

/*puedo utilizar cursor-cell */

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
