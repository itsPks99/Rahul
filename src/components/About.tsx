import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <Calendar size={20} />, label: 'Date of Birth', value: 'March 03, 2002' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Faridabad, Hariyana , India 121003' },
    { icon: <Briefcase size={20} />, label: 'Experience', value: 'Fresher' },
    { icon: <GraduationCap size={20} />, label: 'Degree', value: 'Master of Computer Applications' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="./assets/fullimage.png?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="About Me" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Aspiring Full Stack Developer Passionate About Crafting Clean and User-Friendly Web Experiences
            </h3>
            
            <p className="text-gray-600">
             I'm a passionate and self-motivated web developer, eager to start my journey in the tech industry. While I may not have professional experience yet, I’ve spent time learning and building projects that demonstrate my understanding of modern, responsive web development using the latest technologies.
            </p>
            
            <p className="text-gray-600">
              I enjoy solving problems creatively and am always exploring new tools and frameworks to improve my skills. My goal is to contribute to meaningful digital experiences that are functional, visually appealing, and user-friendly — and to grow every day as a developer.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-indigo-600">{item.icon}</div>
                  <div>
                    <span className="text-gray-500 text-sm">{item.label}: </span>
                    <span className="font-medium text-gray-800">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;