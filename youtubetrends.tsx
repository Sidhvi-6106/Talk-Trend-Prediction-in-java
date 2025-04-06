import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface YouTubeTrend {
  title: string;
  channel: string;
  views: string;
  thumbnail: string;
}

const YouTubeTrends: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const navigate = useNavigate();
  const [trends, setTrends] = useState<YouTubeTrend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from our backend
    const mockTrends = [
      {
        title: "Latest Trending Video",
        channel: "Popular Channel",
        views: "1M views",
        thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=225&fit=crop"
      },
      // Add more mock data as needed
    ];
    
    setTrends(mockTrends);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/trends')}
          className={`mr-4 p-2 rounded-full ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
          }`}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          YouTube Trends
        </h1>
      </div>

      {loading ? (
        <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading trends...
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trends.map((trend, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src={trend.thumbnail}
                alt={trend.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className={`font-semibold text-lg mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {trend.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {trend.channel}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {trend.views}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YouTubeTrends;
