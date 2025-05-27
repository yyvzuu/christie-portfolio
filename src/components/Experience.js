// components/Experience.js
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: '2025 Summer: NSERC Undergraduate Researcher @ Lauzon Lab',
      description: `Undergraduate research trainee at the Meakins Christie Labs under the RI-MUHC. Currently investigating molecular mechanics underlying latch-state phenomenon in smooth muscle. Particular using in-vitro motility assays and video analysis technology to determine the effect of caldesmon on actomyosin interactions at varying myosin phosphorylation levels.`
    },
    {
      title: '2023-Present: Undergraduate Researcher @ Sakata Songbird Lab (McGill)',
      description: `Currently aiding with the investigation of perineuronal net formation and degradation in the primary and secondary motor cortices of mice learning motor coordination involved in balance. Independently developed a deep learning network via ilastik to automate perineuronal net and parvalbumin-positive neurons in microscope images of mouse cortex tissue. Previously worked on image acquisition and processing of EGR1 and DARPP-32 activity in Bengalese finch brains under the context of dopaminergic signalling pattern investigation.`
    },
    {
      title: '2024 Summer: Orthopaedic Research Intern @ Wilson Biomechanics Lab (UBC)',
      description: `Shadowed and assisted researchers at UBC/VCHRI on research for osteoarthritis diagnosis. Work involved optimizing femoral torsion, femoral version, acetabular coverage, and acetabular version measurements on MRI images of patients with femoroacetabular impingement. Conducted literature reviews and developed a new method of acetabular coverage calculation via 3D Slicer software. Prepared cadaveric specimens for cartilage and joint analysis.`
    },
    {
      title: '2024-Present: ICU Volunteer @ Montreal General Hospital',
      description: `Responsible for wayfinding; greeting visitors; and assisting and offering emotional support to the families of ICU patients. Shadowing ICU staff (e.g. physicians, nurses, physiotherapists, etc.) during bedside procedures and participating in critical care rounds.`
    }
  ];

  return (
    <section className="bg-[#5e7564] py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#e4ede5] mb-10">my experience...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <ExperienceCard {...experiences[0]} />
          <ExperienceCard {...experiences[3]} />
        </div>
        <div className="flex flex-col gap-6">
          <ImageBox src="/cells1.png" />
          <ImageBox src="/cells2.jpg" />
        </div>
        <div className="flex flex-col gap-6">
          <ExperienceCard {...experiences[1]} />
          <ExperienceCard {...experiences[2]} />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, description }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-[#709775] mb-2">{title}</h3>
      <p className="text-[#52796f] whitespace-pre-line">{description}</p>
    </motion.div>
  );
}

function ImageBox({ src }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={src} alt="Experience related" className="object-cover w-full h-full" />
    </motion.div>
  );
}