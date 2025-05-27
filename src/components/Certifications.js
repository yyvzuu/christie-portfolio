// components/Certifications.js
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section className="relative bg-[#8fb996] pt-12 pb-28 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-10">my achievements & certifications...</h2>

      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Achievements */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc list-inside text-[#52796f] space-y-2">
            <li><span className="font-bold">2025:</span> NSERC Undergraduate Student Research Award USRA</li>
            <li><span className="font-bold">2025:</span> BCCHR Brain, Behavior, and Development Studentship (Awarded but declined)</li>
            <li><span className="font-bold">2024:</span> BC PEA Scholarship</li>
            <li><span className="font-bold">2023:</span> McGill J.W. McConnel Prestige Major Entrance Scholarship</li>
            <li><span className="font-bold">2023:</span> BC Achievement Scholarship</li>
            <li className="pl-5"><span className="font-bold">2023:</span> Seaquam Secondary - Outstanding IB Student Award, Senior Math Award, Senior Scholastic Award, Top IB Biology/Chemistry Award</li>
            <li><span className="font-bold">2022:</span> AP Scholar with Distinction</li>
            <li><span className="font-bold">2022:</span> Fermat Contest Top School Scorer</li>
            <li><span className="font-bold">2021:</span> Royal Conservatory of Music BC/YK Oboe Gold Medal</li>
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc list-inside text-[#52796f] space-y-2">
            <li><span className="font-bold">Royal Conservatory of Music</span> ARCT Diploma in Oboe Performance</li>
            <li><span className="font-bold">DELF:</span> Diplôme d'Études en Langue Française (Level B2)</li>
            <li>UBC Biosafety for Study Team Members</li>
            <li>Standard First Aid with CPR HLP/BLS and AED</li>
            <li>WHMIS 2015</li>
          </ul>
        </motion.div>
      </div>

      {/* Wave Divider to Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#52796f"
            fillOpacity="1"
            d="M0,160C120,192,240,128,360,160C480,192,600,256,720,224C840,192,960,96,1080,106.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
