import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi, I'm <span className="text-indigo-600">Sonu kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">  
            I build clean, responsive, and user-friendly digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Contact Me
                <ArrowDown size={18} />
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="./assets/pps.png" 
                alt="Sonu Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;