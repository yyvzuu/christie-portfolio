// App.jsx
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Helmet>
        <title>christie liu | portfolio</title>
        <meta name="description" content="Portfolio of christie liu" />
        <link rel="canonical" href="https://christieliu.xyz" />
      </Helmet>
      <div className="bg-gradient-to-br from-pink-100 via-blue-100 to-white text-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
        <footer className="text-center py-4 text-sm text-gray-600">made with react and tailwind</footer>
      </div>
    </>
  );
}

export default App;
