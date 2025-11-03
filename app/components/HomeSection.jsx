export default function HomeSection() {
  return (
    <div className="bg-gradient-to-br from-[#1b1f3b] to-[#2b2f5b] text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Welcome to The Luck Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Learn web development, design, and modern technologies from
            industry experts. Build your skills, get certified, and start your
            dream career today!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-yellow-400 text-[#1b1f3b] font-semibold rounded-md hover:bg-yellow-500 transition"
            >
              Get Started
            </a>
            <a
              href="/signup"
              className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:text-[#1b1f3b] transition"
            >
              Join Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/10/21/46/education-2835913_960_720.jpg"
            alt="Learning illustration"
            className="rounded-2xl shadow-2xl w-[90%] md:w-[80%] object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="about"
        className="bg-[#252a4a] py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Why Choose The Luck Academy?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1b1f3b] rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/20 transition">
            <h3 className="text-2xl font-semibold mb-3">Expert Mentors</h3>
            <p className="text-gray-300">
              Learn from professionals with real-world experience and passion
              for teaching.
            </p>
          </div>
          <div className="bg-[#1b1f3b] rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/20 transition">
            <h3 className="text-2xl font-semibold mb-3">Flexible Learning</h3>
            <p className="text-gray-300">
              Access courses anytime, anywhere — learn at your own pace with
              lifetime access.
            </p>
          </div>
          <div className="bg-[#1b1f3b] rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/20 transition">
            <h3 className="text-2xl font-semibold mb-3">Career Support</h3>
            <p className="text-gray-300">
              Get help with projects, internships, and job placement guidance to
              kickstart your career.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section
        id="courses"
        className="py-16 px-6 md:px-20 bg-[#1b1f3b] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Our Popular Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full-Stack Web Development",
              desc: "Master MERN Stack with hands-on projects and certification.",
              img: "https://cdn.pixabay.com/photo/2015/09/05/21/51/coding-925896_960_720.jpg",
            },
            {
              title: "UI/UX Design",
              desc: "Learn user experience and interface design using Figma & Adobe XD.",
              img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/ux-1837066_960_720.jpg",
            },
            {
              title: "JavaScript Essentials",
              desc: "Start your coding journey by mastering the most in-demand language.",
              img: "https://cdn.pixabay.com/photo/2017/08/10/03/02/javascript-2617700_960_720.jpg",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-[#252a4a] rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition transform hover:-translate-y-2"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-5">{course.desc}</p>
                <a
                  href="/signup"
                  className="inline-block px-5 py-2 bg-yellow-400 text-[#1b1f3b] rounded-md font-semibold hover:bg-yellow-500 transition"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
