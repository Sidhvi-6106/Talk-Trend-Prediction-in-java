import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TrendingSectionProps {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
  color: string;
  darkMode: boolean;
}

const TrendingSection: React.FC<TrendingSectionProps> = ({
  title,
  icon: Icon,
  description,
  link,
  color,
  darkMode
}) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className={`rounded-xl p-6 cursor-pointer ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex items-center mb-4">
        <Icon className={`${color} w-8 h-8`} />
        <h2 className={`ml-3 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
      </div>
      
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>

      <div
        className={`inline-flex items-center px-4 py-2 rounded-lg ${
          darkMode 
            ? 'bg-gray-700 text-white hover:bg-gray-600' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        } transition-colors duration-200`}
      >
        View Trends
      </div>
    </div>
  );
}

export default TrendingSection;
