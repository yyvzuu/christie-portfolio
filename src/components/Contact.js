// components/Contact.js
export default function Contact() {
  return (
    <section className="py-24 px-6 bg-pink-200 text-center">
      <h2 className="text-4xl font-bold mb-8 text-pink-900">contact me!</h2>
      <div className="flex justify-center space-x-8 text-4xl">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-blue-600 hover:text-blue-800"></i>
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-pink-600 hover:text-pink-800"></i>
        </a>
      </div>
      <p className="mt-6 text-lg text-gray-700">or at [email address]</p>
    </section>
  );
}