import Navbar from './Component/Navbar';
import About from './Component/About';
import Services from './Component/Services';
import Blog from "./Component/Blog";
import Hero from './Component/Hero';
import Contact from './Component/Contact';


//   var target = document.querySelector('nav-icon3');
//   target.addEventListener('click',()=>{
//     alert('');
//   })
//   if(target != null){
//   if (target.classList.contains('open')) {
//     target.classList.remove('open');
//   } else {
//     target.classList.add('open');
//   }
// }
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
