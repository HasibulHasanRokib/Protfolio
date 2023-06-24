import { BrowserRouter, Route,Routes } from "react-router-dom"
import About from "./Components/About"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import { useState } from "react";

// import Footer from "./Components/Footer/Footer";

const logoImg=[
  {
    id:"html",
    image:"https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg"
  },
  {
    id:"css",
    image:"https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg"
  },
  {
    id:"js",
    image:"https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg"
  },
  {
    id:"react",
    image:"https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg"
  },
  {
    id:"bootstrap",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
  },
  // {
  //   id:'ts',
  //   image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
  // },
  // {
  //   id:'tel',
  //   image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"
  // },
  // {
  //   id:"github",
  //   image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  // }
]
function App() {
  const [logo]=useState(logoImg)





  return (
    <>
     <BrowserRouter>
     <NavBar />
   <div className="container">
      <Routes>
        <Route path="/" element={<Home logo={logo}/>}/>
        <Route path="/about" element={<About  />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
      </div>
     </BrowserRouter>
     
     
    </>
  )
}

export default App
