// components/Certifications.js
import { motion } from 'framer-motion';

export default function Certifications() {
  const creds = ["Credential Set 1", "Credential Set 2"];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-pink-700">my achievements & certifications...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {creds.map((cred, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-pink-50 p-8 shadow-md border border-pink-200"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {cred}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
