// components/About.js
export default function About() {
  return (
    <section className="py-24 px-6 bg-[#709775]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center">
          <img
            src="/christie_headshot.jpg"
            alt="christie liu"
            className="rounded-xl shadow-lg w-64 h-auto object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-white">about me...</h2>
          <p className="text-[#cad2c5] leading-relaxed">
            Hello! My name is Christie — a third year student at McGill University studying Computer Science & Biology. I'm passionate about connecting people with what they need, and hope to make this my lifelong mission by pursuing a career in medicine. I also have a deep interest in biological research  — feel free to read more about my involvements below! Outside of academics I've been a lifelong musician, playing the oboe, violin, and piano. When I'm not living in the library during finals season, you can find me cafe-hopping, working on a drawing, or playing video games with friends!
          </p>
        </div>
      </div>
    </section>
  );
}