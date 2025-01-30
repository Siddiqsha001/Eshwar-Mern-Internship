import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App-port.css';
import Header from './header-portfolio';
import Contact from './contact-portfolio';
import SocialLinks from './SocialLinks';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { Area } from './areaofint';
// function HomePage() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <AboutMe />
//         <SocialLinks />
//       </main>
//     </div>
//   );
// }

// function ContactPage() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Contact />
//       </main>
//     </div>
//   );
// }

function App1() {
  return (
    <Router>
      <div className="portfolio">
        <Header />
         <Routes>  {/*path is the id */}
          <Route path="/" element={<h2>Home page</h2>} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Area" element={<Area />} />
          <Route path="/social-links" element={<SocialLinks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
