import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Work from "./components/UI/Work";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
