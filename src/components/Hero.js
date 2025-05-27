// components/Hero.js
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center bg-gradient-to-b from-white via-[#cad2c5] to-[#84a98c] px-6 pt-[12rem] pb-[12rem]">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-[#354f52] mb-4 text-center"
        >
          hi, i'm christie liu!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl sm:text-2xl text-[#598060] text-center font-bold"

        >
          <Typewriter
            words={['student 📚', 'researcher 🔬', 'musician, artist, and gamer! 🎶🎨🎮']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 flex justify-end"
        >
          <a
            href="/christie_cv.pdf"
            download
            className="bg-[#354f52] text-[#cad2c5] font-semibold py-2 px-6 rounded-full shadow hover:scale-105 transition-transform duration-300"
          >
            &gt; check out my cv!
          </a>
        </motion.div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#709775" fillOpacity="1" d="M0,160C120,192,240,128,360,160C480,192,600,256,720,224C840,192,960,96,1080,106.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
