// App.jsx
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>christie liu | portfolio</title>
        <meta name="description" content="Portfolio of christie liu" />
        <link rel="canonical" href="https://christieliu.xyz" />
      </Helmet>
      <div className="text-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
        <footer className="text-center py-4 text-sm text-gray-600">made with love w/ react and tailwind</footer>
      </div>
    </>
  );
}

export default App;