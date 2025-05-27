// components/Experience.js
import { motion } from 'framer-motion';

export default function Experience() {
  const items = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <section className="py-24 px-6 bg-blue-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-blue-900">my experience...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-white p-8 shadow-lg border border-blue-200"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}