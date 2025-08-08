
const team = [
  {
      name: '  Shayan Mirza',
      title: ' Co-Founder and ML Engineer',
      img: '/Shayan.jpg',
      description: "As the Co-Founder of CincoByte, Shayan Mirza combines a passion for innovation with deep expertise in Machine Learning and data-driven solutions. With a strong background in machine learning, he develops intelligent systems that turn complex problems into practical, impactful applications. His vision is to harness AI to create products that deliver real value and shape the future of technology."    },
    
    {
      name: 'Zia Ur Rehmman',
      title: ' Co-Founder & Web Developer with Django',
      img: '/Zia.jpg',
      description: 'As Co-Founder of CincoByte, Zia ur Rehman leads the development of powerful, scalable, and secure web applications using Python and Django. From building custom dashboards to deploying robust e-commerce platforms, Zia ensures every project is delivered with precision, speed and reliability. His commitment to clean code, maintainable design and modern development practices drives the technical excellence of our team.',
    
    },
 {
  name: 'Kashif Ur Rehman',
  title: 'CTO & Full Stack Developer',
  img: '/Kashif.jpg',
  description: 'As the CTO of CincoByte, Kashif Ur Rehman drives the vision and execution of cutting-edge digital solutions. With deep proficiency in both front-end and back-end development, he specializes in building scalable, high-performance web applications using React, Node.js, and modern databases.'
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
     
    },
     {
      name: 'Aneeqa Liaqat',
      title: 'Graphic Designer',
      img: '/Aneeqa.jpg',
      description: 'Crafting visually stunning and impactful designs that bring ideas to life.Specializing in branding, logos, listing images, packaging and social media graphics.',
     
    }
  ];


function Team() {
  return (
    <div id="team" className="text-center p-6 md:p-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold pt-6   bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 bg-clip-text text-transparent mb-10">
        Our Team
      </h2>
      <div className="grid gap-5 md:gap-10 mt-9 md:grid-cols-2 lg:px-20">
        {team.slice(0,2).map((member, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 80}
            className="relative cursor-default group px-4 py-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border border-gray-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700  -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
            <div className="relative z-20">
              <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                {member?.img ? (
                  <img
                    src={member.img}
                    className="w-full h-full object-center rounded-full"
                    alt={member.name}
                  />
                ) : (
                  member.name[0].toUpperCase()
                )}
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700  text-transparent bg-clip-text group-hover:text-white mb-1">
                {member.title}
              </h3>
              <p className="text-purple-600 font-medium mb-2 group-hover:text-gray-100">
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

      <div className="grid gap-5 md:gap-10 mt-5 md:mt-9 md:grid-cols-2 lg:grid-cols-3">
        {team.slice(2).map((member, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 80}
            className="relative cursor-default group px-4 py-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border border-gray-300"
          >
            <div className="absolute inset-0   bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700   -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
            <div className="relative z-20">
              <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                {member?.img ? (
                  <img
                    src={member.img}
                    className="w-full h-full  object-center rounded-full"
                    alt={member.name}
                  />
                ) : (
                  member.name[0].toUpperCase()
                )}
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-transparent bg-clip-text group-hover:text-white mb-1">
                {member.title}
              </h3>
              <p className="text-purple-600 font-medium mb-2 group-hover:text-gray-100">
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
