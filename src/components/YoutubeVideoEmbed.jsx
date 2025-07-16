import React from 'react';

const YoutubeVideoEmbed = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/_cPX4EoejPE"
  title="Golden Avenue: Your Gateway to Luxury Plots in Nagpur by Golden Homes"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

        </div>
        
        {/* Video Info */}
        <div className="p-6 bg-gray-900 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">▶</span>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  🏡 Golden Avenue: Your Gateway to Luxury Plots in Nagpur by Golden Homes 🏡🏡
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Watch on YouTube
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-300">
              <span>Watch later</span>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoEmbed;