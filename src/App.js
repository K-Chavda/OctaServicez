import Navbar from './Component/Navbar';
import About from './Component/About';
import Services from './Component/Services';
import Blog from "./Component/Blog";
import Hero from './Component/Hero';
import Contact from './Component/Contact';



  function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero/>
      </section>
      <section>
        <Services/>
      </section>  
      <section>
        <About/>
      </section>
      {/* <section>
        <Login/>
      </section> */}
      <section>
        <Blog/>
      </section>
      <section>
        <Contact/>
      </section>
    </>
  );
}

export default App;
