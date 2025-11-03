"use client";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-[#1b1f3b] to-[#2b2f5b] text-white min-h-screen">
      {/* ============ HERO / ABOUT INTRO ============ */}
      <section className="text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
          About The Luck Academy
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          We are passionate about helping students and professionals learn modern
          web technologies, design principles, and job-ready skills.  
          The Luck Academy was built to make quality education accessible and practical for everyone.
        </p>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="bg-[#252a4a] py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        <div className="bg-[#1b1f3b] rounded-2xl p-8 shadow-lg hover:shadow-yellow-400/20 transition">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to empower learners across the globe with cutting-edge
            digital skills, mentorship, and real-world experience. We focus on
            making learning simple, affordable, and impactful.
          </p>
        </div>
        <div className="bg-[#1b1f3b] rounded-2xl p-8 shadow-lg hover:shadow-yellow-400/20 transition">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a future where every student has the power to create,
            innovate, and succeed in the digital world — breaking barriers through
            technology and creativity.
          </p>
        </div>
      </section>

      {/* ============ MEET OUR TEAM ============ */}
      <section id="team" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Shoaib Khan",
              role: "Founder & Lead Instructor",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Ayesha Malik",
              role: "UI/UX Designer",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "Ali Raza",
              role: "Full Stack Developer",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
            {
              name: "Sara Ahmed",
              role: "Marketing & Community Manager",
              img: "https://randomuser.me/api/portraits/women/50.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#252a4a] p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ACHIEVEMENTS SECTION ============ */}
      <section className="bg-[#252a4a] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Our Achievements
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Students Enrolled" },
            { number: "50+", label: "Expert Mentors" },
            { number: "100+", label: "Projects Completed" },
            { number: "95%", label: "Success Rate" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1b1f3b] p-6 rounded-2xl shadow-md hover:shadow-yellow-400/20 transition"
            >
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA JOIN US ============ */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#1b1f3b] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be a Part of Our Learning Revolution!
        </h2>
        <p className="text-lg mb-8">
          Join thousands of learners shaping their future with The Luck Academy.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-[#1b1f3b] text-yellow-400 rounded-md font-semibold hover:bg-[#252a4a] transition"
        >
          Join Now
        </a>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#252a4a] text-gray-400 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} The Luck Academy. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-yellow-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
