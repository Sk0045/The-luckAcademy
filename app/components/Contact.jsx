"use client";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#1b1f3b] to-[#2b2f5b] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Have questions, feedback, or partnership ideas? We’d love to hear from you!  
          Reach out to The Luck Academy team anytime.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Email Us",
            info: "info@luckacademy.com",
            icon: "📧",
          },
          {
            title: "Call Us",
            info: "+92 300 1234567",
            icon: "📞",
          },
          {
            title: "Visit Us",
            info: "Lahore, Pakistan",
            icon: "📍",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#252a4a] rounded-2xl p-8 shadow-lg hover:shadow-yellow-400/20 transition"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.info}</p>
          </div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 md:px-40 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Send Us a Message
        </h2>
        <form className="bg-[#252a4a] p-8 rounded-2xl shadow-lg text-left space-y-6 max-w-3xl mx-auto">
          <div>
            <label className="block text-yellow-400 mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md bg-[#1b1f3b] border border-gray-600 text-white focus:border-yellow-400 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-yellow-400 mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-[#1b1f3b] border border-gray-600 text-white focus:border-yellow-400 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-yellow-400 mb-2 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full p-3 rounded-md bg-[#1b1f3b] border border-gray-600 text-white focus:border-yellow-400 outline-none"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-[#1b1f3b] px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 md:px-20 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8">
          Find Us on the Map
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.328631394994!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dfb5e2bff7%3A0xeda34b7f1b8e8f23!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1671023590000!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#1b1f3b] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Your Future Together!
        </h2>
        <p className="text-lg mb-8">
          Join The Luck Academy today and take your skills to the next level.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-[#1b1f3b] text-yellow-400 rounded-md font-semibold hover:bg-[#252a4a] transition"
        >
          Join Now
        </a>
      </section>

      {/* FOOTER */}
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
