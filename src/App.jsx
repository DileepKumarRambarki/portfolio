import React, { useEffect, useState } from "react"

// Components
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
// import sanityClient from "client"
import programmingicon from "./images/programming.jpeg"
import librayricon from "./images/libraries.png"
import toolicon from "./images/tools.png"
import databaseicon from "./images/databases.jpeg"
import blinder from "./images/blinder.png"
import aura from "./images/aura.jpeg"
import javacert from "./images/java.png"
import jscert from "./images/javascript.png"
import responsive from "./images/responsive_web.png"
import Experience from "./components/Experience/Experience"
import gcrs from "./images/gcrs.png"
import gate from "./images/gate.jpg"
import meditrack from './images/meditrack.png'
// import Leetcode from "./components/Leetcode/Leetcode"
import Piechart from "./components/Leetcode/Piechart"
// Animation
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const projects = [
    {id:"projects",title:"Meditrack",tagline:"A comptrehensive healthcare system",category:"projects",liveUrl:"https://demo.com",repositoryUrl:"https://repo.com",img:meditrack
    },
    {id:"projects",title:"Blinder",tagline:"A community blogging platform",category:"projects",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:blinder
    },
    {id:"projects",title:"Aura",tagline:"Blood donation app",category:"projects",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:aura
    },
    {id:"projects",title:"Java(Basic)",tagline:"HackerRank",category:"certificates",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:javacert
    },
    {id:"projects",title:"Javascript",tagline:"Udemy",category:"certificates",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:jscert
    },
    {id:"projects",title:"Responsive web design",tagline:"Free code camp",category:"certificates",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:responsive
    },
    {id:"projects",title:"Qualified GATE-2025 (CS) with AIR 4862",tagline:"hi",category:"achievements",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:gate
    },

  ]

  const services = [
    {title:"programming languages",tags:['C','Java','Javascript','Python'],icon:programmingicon},
    {title:"Libraries/Frame works",tags:['React Js',"Node js",'Express Js','Material UI'],icon:librayricon},
    {title:"Tools/Platforms",tags:['Github','Postman','VScode'],icon:toolicon},
    {title:"Databases",tags:['MongoDB','MySQL'],icon:databaseicon}
  ]

  // const [testimonials, setTestimonials] = useState([])
  const exps=[
    { role:"CEO", company:"Sonic solutions", location:"WasingTon DC", icon:gcrs, duration:"jan 2020-feb 2022", desc:['gained hands on experience on backend developement using python','explored google cloud storage buckets using python','enhanced api response time by 80%'] },
    { role:"Software engineer intern", company:"Geo Climate Risk solutions", location:"Onsite visakhapatnam", icon:gcrs, duration:"May 2025-July 2025", desc:['gained hands on experience on backend developement using python','explored google cloud storage buckets using python','enhanced api response time by 80%'] },
    { role:"Software engineer intern", company:"Geo Climate Risk solutions", location:"Onsite visakhapatnam", icon:gcrs, duration:"May 2025-July 2025", desc:['gained hands on experience on backend developement using python','explored google cloud storage buckets using python','enhanced api response time by 80%'] },

  ]

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Experience exps={exps}/>
      <Services services={services} />
      <Portfolio projects={projects} />
      {/* <Testimonials testimonials={testimonials} /> */}
      <Piechart/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
