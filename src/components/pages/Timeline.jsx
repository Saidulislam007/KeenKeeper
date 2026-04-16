import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";

const Timeline = () => {
  const { timeline } = useContext(FriendContext);

  return (
    <div className="bg-gray-200 py-6 sm:py-8  px-3 sm:px-5">
      
      {timeline.map((item, index) => (
        <div
          key={index}
          className="bg-white max-w-6xl mx-auto p-4 sm:p-5 md: mb-3 rounded-xl shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            
            {/* Icon */}
            <div className="flex justify-center sm:justify-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                {item.type === "Call" && (
                  <img src="/src/assets/call.png" alt="call" className="w-8 h-8 sm:w-10 sm:h-10" />
                )}
                {item.type === "Text" && (
                  <img src="/src/assets/text.png" alt="text" className="w-8 h-8 sm:w-10 sm:h-10" />
                )}
                {item.type === "Video" && (
                  <img src="/src/assets/video.png" alt="video" className="w-8 h-8 sm:w-10 sm:h-10" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg md:text-xl">
                <span className="font-semibold">{item.type}</span> with {item.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;