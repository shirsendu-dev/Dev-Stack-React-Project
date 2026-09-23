import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Technologies from "./components/Technologies/Technologies";
import { Suspense } from "react";


const fetchTechs = async () => {
  const res = await fetch('/technologies.json');
  const data = await res.json();
  return data;
}

const techsPromise = fetchTechs();


function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <main id="tech">

        <div className="container mx-auto px-4 md:px-0 py-12">
          <p className="text-[28px] md:text-[36px] font-extrabold mb-2">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </p>

          <p className="text-[#64748B] text-sm md:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-0">
          <Suspense fallback={<div className="text-center py-10">🌀 Loading Technologies...</div>}>
            <Technologies techsPromise={techsPromise}></Technologies>
          </Suspense>
        </div>

      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
