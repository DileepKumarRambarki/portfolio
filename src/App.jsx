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
import aura from "./images/aura.png"
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
    {id:"projects",title:"Meditrack",tagline:["Developed a healthcare management system to streamlining hospital appointment scheduling and health record management.","Built with MUI for a responsive and user-friendly frontend",'Enabled seamless appointment booking for patients and efficient record management for healthcare providers.'],category:"projects",liveUrl:"https://demo.com",repositoryUrl:"https://github.com/DileepKumarRambarki/meditrack",img:meditrack
    },
    {id:"projects",title:"Blinder",tagline:["Designed a blogging platform enabling college students to share insights on career growth and academics.","Integrated email verification with Nodemailer to reduce fake account registrations.",'Utilized MongoDB and JWT for data persistence and user management.','Gained 100+ active users within the first month of launch.'],category:"projects",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://github.com/DileepKumarRambarki/gvpBlind",img:blinder
    },
    {id:"projects",title:"Aura",tagline:["Developed a blood donation platform that allows users to easily donate and request blood.",'Backend built with MySQL for efficient data storage and retrieval.','Integrated real-time notifications to alert users of donation requests and availability.','Integrated Google OAuth for seamless login and signup experience.'],category:"projects",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://github.com/bharadwaj-dasari/Aura.git",img:aura
    },
    {id:"projects",title:"Java(Basic)",tagline:[],category:"certificates",liveUrl:"https://www.hackerrank.com/certificates/9f197a36ea07",repositoryUrl:"https://repo.com",img:javacert
    },
    {id:"projects",title:"Javascript",tagline:[],category:"certificates",liveUrl:"https://udemy-certificate.s3.amazonaws.com/image/UC-5de66aa8-3b17-440f-b04f-699c182c29ff.jpg",repositoryUrl:"https://repo.com",img:jscert
    },
    {id:"projects",title:"Responsive web design",tagline:[],category:"certificates",liveUrl:"https://www.freecodecamp.org/certification/dileepkumarrambarki/responsive-web-design",repositoryUrl:"https://repo.com",img:responsive
    },
    {id:"projects",title:"Qualified GATE-2025 (CS) with AIR 4862",tagline:[],category:"achievements",liveUrl:"https://gvpblind-pi69.onrender.com/",repositoryUrl:"https://repo.com",img:gate
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
    { role:"Software engineer intern", company:"Geo Climate Risk solutions", location:"Onsite visakhapatnam", icon:gcrs, duration:"May 2025-July 2025", desc:['Gained hands-on experience in backend development with Python, working on real-world geospatial data systems.','Integrated and managed Google Cloud Storage buckets using Python for scalable data handling and storage automation.','Optimized API performance, reducing response time by up to 80% through improved query logic and efficient data handling techniques'] },

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
