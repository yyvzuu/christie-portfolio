// components/Contact.js
export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#52796f] text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">contact me!</h2>
      <div className="flex justify-center space-x-8 text-4xl">
        <a href="https://www.linkedin.com/in/christieliu1260/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-white hover:text-[#cad2c5]"></i>
        </a>
        <a href="https://www.instagram.com/euyixl" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-white hover:text-[#cad2c5]"></i>
        </a>
      </div>
      <p className="mt-6 text-lg text-[#cad2c5]">i'd love to hear from you!</p>
    </section>
  );
}