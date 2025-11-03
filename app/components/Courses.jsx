"use client";

export default function Courses() {
  const courses = [
    {
      title: "Full Stack Web Development",
      category: "Development",
      img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
      desc: "Master MERN Stack (MongoDB, Express, React, Node) with hands-on projects and job-ready skills.",
      level: "Intermediate",
    },
    {
      title: "UI/UX Design Masterclass",
      category: "Design",
      img: "https://img.freepik.com/free-vector/ux-ui-design-concept-illustration_114360-1091.jpg",
      desc: "Learn modern design thinking, wireframing, and prototyping using Figma & Adobe XD.",
      level: "Beginner",
    },
    {
      title: "JavaScript from Zero to Hero",
      category: "Programming",
      img: "https://img.freepik.com/free-vector/javascript-abstract-concept_335657-3703.jpg",
      desc: "Start from the basics and go all the way to mastering JavaScript ES6+ for web apps.",
      level: "Beginner",
    },
    {
      title: "Python for Data Science",
      category: "Data Science",
      img: "https://img.freepik.com/free-vector/data-scientist-concept-illustration_114360-913.jpg",
      desc: "Analyze, visualize, and build models using Python, NumPy, Pandas, and Matplotlib.",
      level: "Intermediate",
    },
    {
      title: "React & Next.js Bootcamp",
      category: "Frontend",
      img: "https://img.freepik.com/free-vector/website-construction-concept-illustration_114360-1487.jpg",
      desc: "Build high-performance apps using React, Next.js, and Tailwind CSS — step by step.",
      level: "Advanced",
    },
    {
      title: "Freelancing & Career Growth",
      category: "Career",
      img: "https://img.freepik.com/free-vector/freelancer-working-laptop_23-2148281779.jpg",
      desc: "Learn how to start freelancing, build your profile, and win clients confidently.",
      level: "All Levels",
    },
  ];

  const categories = [
    "Web Development",
    "Design & UI/UX",
    "Programming",
    "Data Science",
    "Career & Freelancing",
  ];

  return (
    <div className="bg-gradient-to-br from-[#1b1f3b] to-[#2b2f5b] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Our Courses
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore a variety of hands-on, industry-ready courses designed to help you grow
          your skills and advance your career.  
          Learn, practice, and succeed with The Luck Academy.
        </p>
      </section>

      {/* POPULAR COURSES */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10 text-center">
          Popular Courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-[#252a4a] rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{course.category}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {course.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-yellow-400 font-semibold">
                    Level: {course.level}
                  </span>
                  <a
                    href="/signup"
                    className="bg-yellow-400 text-[#1b1f3b] px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
                  >
                    Enroll
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="bg-[#252a4a] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-[#1b1f3b] border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#1b1f3b] transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Why Choose The Luck Academy?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Expert Instructors",
              desc: "Learn from real professionals with hands-on experience.",
            },
            {
              title: "Practical Learning",
              desc: "We focus on real projects, not just theory.",
            },
            {
              title: "Flexible Timing",
              desc: "Learn anytime, anywhere, at your own pace.",
            },
            {
              title: "Career Support",
              desc: "Get guidance, portfolio review, and interview tips.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#252a4a] p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#1b1f3b] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Learning Journey Today!
        </h2>
        <p className="text-lg mb-8">
          Choose a course, join The Luck Academy, and take your skills to the next level.
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
      </footer>
    </div>
  );
}
