import React from "react";
const team = [
    
    {
      name: 'Zia Ur Rehmman',
      title: ' Co-Founder & Web Developer with Django',
      img: '/Zia.jpg',
      description: 'Full-stack architect passionate about scalable solutions with Django.',
    
    },
    {
      name: 'Kashif Ur Rehman',
      title: 'CTO & Senior MERN  Developer',
      img: '/Kashif.jpg',
      description: 'Senior developer with expertise in React, Node.js, and cloud architecture.',
     
    },
    {
      name: 'Sheryar Yousaf',
      title: 'Flutter Developer',
      img: '/Sheryar.jpg',
      description: 'Build fast, beautiful, and cross-platform mobile apps with Flutter.',
      
    },
    
    {
      name: 'Malick Arslan',
      title: 'Frontend Developer',
      img: '/Arslan.jpg',
      description: 'Craft responsive, user-friendly interfaces using modern frontend technologies like React, Vue, and Tailwind CSS..',
      
    },
    {
      name: 'Talha Ayyaz',
      title: 'Dart-Powered App Creator',
      img: '/Talha.jpg',
      description: 'Create high-performance cross-platform apps using Flutter and Dart for seamless Android and iOS experiences.',
     
    }
  ];


function Team() {
  return (
    <div id="team" className="text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-10">
        Our Team
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 items-center">
        <div className="cursor-default w-full md:w-1/2 px-4 py-6 order-2 md:order-1 rounded-lg shadow-md shadow-blue-dark bg-white overflow-hidden border">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-1">
            Shayan Mirza
          </h3>
          <p className="text-indigo-700 font-medium mb-2">
            — Founder , CincoByte
          </p>
          <hr className="my-3" />
          <p className="text-gray-700 whitespace-pre-line text-sm">
            CincoByte — Delivering value in every byte
           At CincoByte, we combine innovation, clean design, and engineering excellence to serve startups, businesses, and communities alike. Our approach is simple: deliver quality, prioritize user experience, and ensure every line of code contributes meaningful value.
        Whether it's a product demo or a production-scale solution — with CincoByte, every byte counts.
          </p>
        </div>
        <div className="w-48 h-48 order-1 md:order-2 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
          <img
            src="/Shayan.jpg"
            className="w-full h-full object-cover object-center rounded-full"
            alt="President"
          />
        </div>
      </div>

      <div className="grid gap-5 md:gap-10 mt-9 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 80}
            className="relative cursor-default group px-4 py-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-dark to-indigo-700 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
            <div className="relative z-20">
              <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                {member?.img ? (
                  <img
                    src={member.img}
                    className="w-full h-full object-contain rounded-full"
                    alt={member.name}
                  />
                ) : (
                  member.name[0].toUpperCase()
                )}
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text group-hover:text-white mb-1">
                {member.title}
              </h3>
              <p className="text-indigo-700 font-medium mb-2 group-hover:text-gray-300">
                {member.name}
              </p>
              {member.description && (
                <p className="text-gray-700 whitespace-pre-line text-sm group-hover:text-white">
                  {member.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
