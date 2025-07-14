import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3','Bootstrap',]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Core Java', ]
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      skills: ['MongoDB', 'MySQL',]
    },
    {
      icon: <Globe size={24} />,
      title: 'DevOps & Tools',
      skills: ['Git']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm continuously learning and working with a variety of technologies in the web development space.
Here are the main areas I've been focusing on and building projects with:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;