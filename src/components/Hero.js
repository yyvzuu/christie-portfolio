// components/Hero.js
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-3xl font-semibold text-black mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        hi, i'm christie liu!
      </motion.h2>
      <motion.div
        className="text-blue-800 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={['student 📚', 'researcher 🔬', 'musician, artist, and gamer! 🎶🎨🎮']}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
        />
      </motion.div>
    </section>
  );
}