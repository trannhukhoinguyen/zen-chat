import { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaChevronLeft } from 'react-icons/fa';
import { userConfig } from '../../config/userConfig';

interface NotesAppProps {
  isOpen: boolean;
  onClose: () => void;
}

type Section = 'menu' | 'education' | 'experience';

const NotesApp = ({ isOpen, onClose }: NotesAppProps) => {
  const [activeSection, setActiveSection] = useState<Section>('menu');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setActiveImageIndex(0);
  };

  const handleBackClick = () => {
    setActiveSection('menu');
  };

  const handleNextImage = (images: any[]) => {
    setActiveImageIndex((prevIndex) => 
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = (images: any[]) => {
    setActiveImageIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!isOpen) return null;

  const education = userConfig.education || [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Example University",
      location: "New York, NY",
      year: "2018-2022",
      description: "Graduated with honors. Coursework included Data Structures, Algorithms, Computer Networks, and Software Engineering.",
      images: [
        {
          url: "/images/education/univ1.jpg",
          alt: "University Campus",
          description: "The main campus building"
        }
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Example High School",
      location: "Boston, MA",
      year: "2014-2018",
      description: "Graduated top of class with focus on Mathematics and Computer Science.",
      images: []
    }
  ];

  const experience = userConfig.experience || [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      location: "San Francisco, CA",
      period: "2022-Present",
      description: "Leading development of web applications using React, Node.js, and AWS.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
      images: [
        {
          url: "/images/experience/company1.jpg",
          alt: "Company Office",
          description: "The modern office space"
        }
      ]
    },
    {
      title: "Junior Developer",
      company: "Startup Inc.",
      location: "Seattle, WA",
      period: "2020-2022",
      description: "Developed and maintained web applications using modern JavaScript frameworks.",
      technologies: ["JavaScript", "Vue.js", "Express"],
      images: []
    }
  ];

  const renderEducation = () => (
    <div className="space-y-6">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4"
      >
        <FaChevronLeft />
        <span>Back to Menu</span>
      </button>
      
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Education</h2>
      
      {education.map((item, index) => (
        <div key={index} className="bg-gray-800/50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold text-gray-200">{item.degree}</h3>
          <div className="text-gray-300 mb-2">{item.institution}, {item.location}</div>
          <div className="text-gray-400 mb-3">{item.year}</div>
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          {item.images && item.images.length > 0 && (
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-2">
                <img 
                  src={item.images[activeImageIndex].url}
                  alt={item.images[activeImageIndex].alt}
                  className="w-full object-cover rounded-lg" 
                />
              </div>
              
              <div className="text-sm text-gray-400 mb-3">
                {item.images[activeImageIndex].description}
              </div>
              
              {item.images.length > 1 && (
                <div className="flex justify-between mt-2">
                  <button 
                    onClick={() => handlePrevImage(item.images)}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <span className="text-gray-400">
                    {activeImageIndex + 1} / {item.images.length}
                  </span>
                  <button 
                    onClick={() => handleNextImage(item.images)}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4"
      >
        <FaChevronLeft />
        <span>Back to Menu</span>
      </button>
      
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Professional Experience</h2>
      
      {experience.map((item, index) => (
        <div key={index} className="bg-gray-800/50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold text-gray-200">{item.title}</h3>
          <div className="text-gray-300 mb-2">{item.company}, {item.location}</div>
          <div className="text-gray-400 mb-3">{item.period}</div>
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {item.images && item.images.length > 0 && (
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-2">
                <img 
                  src={item.images[activeImageIndex].url}
                  alt={item.images[activeImageIndex].alt}
                  className="w-full object-cover rounded-lg" 
                />
              </div>
              
              <div className="text-sm text-gray-400 mb-3">
                {item.images[activeImageIndex].description}
              </div>
              
              {item.images.length > 1 && (
                <div className="flex justify-between mt-2">
                  <button 
                    onClick={() => handlePrevImage(item.images)}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ←
                  </button>
                  <span className="text-gray-400">
                    {activeImageIndex + 1} / {item.images.length}
                  </span>
                  <button 
                    onClick={() => handleNextImage(item.images)}
                    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderMenu = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-200 mb-6">My Notes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
          onClick={() => handleSectionClick('education')}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaGraduationCap size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">Education</h3>
          </div>
          <p className="text-gray-400">View my educational background and qualifications</p>
        </div>
        
        <div
          className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
          onClick={() => handleSectionClick('experience')}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <FaBriefcase size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">Experience</h3>
          </div>
          <p className="text-gray-400">Explore my professional work experience</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-[#1d1d1f] rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <div className="bg-gray-800 h-6 flex items-center space-x-2 px-4 rounded-t-lg absolute top-0 left-0 right-0">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-300 flex-grow text-center font-semibold">
            {activeSection === 'menu' 
              ? 'Notes' 
              : activeSection === 'education' 
                ? 'Education Notes' 
                : 'Experience Notes'}
          </span>
        </div>
        
        <div className="mt-8">
          {activeSection === 'menu' && renderMenu()}
          {activeSection === 'education' && renderEducation()}
          {activeSection === 'experience' && renderExperience()}
        </div>
      </div>
    </div>
  );
};

export default NotesApp; 