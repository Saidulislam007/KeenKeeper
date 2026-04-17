import { useContext, useState } from "react";
import { FriendContext } from "../context/FriendContext";

const Timeline = () => {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("All");

  // filtered data
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="bg-gray-200 py-6 sm:py-8 px-3 sm:px-5">

      {/* Filter Box */}
      <div className="max-w-6xl mx-auto mb-5">
        <div className="relative w-full sm:w-80">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2"
          >
            <option value="All">Filter Timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>

          {/* Dropdown Icon */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      {filteredTimeline.length === 0 ? (
  <div className="max-w-6xl mx-auto text-center py-10">
    <p className="text-gray-500 font-semibold text-sm sm:text-base">
      No timeline found for this filter
    </p>
  </div>
) : (
  filteredTimeline.map((item, index) => (
    <div
      key={index}
      className="bg-white max-w-6xl mx-auto p-4 sm:p-5 mb-3 rounded-xl shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">

        {/* Icon */}
        <div className="flex justify-center sm:justify-start">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            {item.type === "Call" && (
              <img src="/call.png" alt="call" className="w-8 h-8 sm:w-10 sm:h-10" />
            )}
            {item.type === "Text" && (
              <img src="/text.png" alt="text" className="w-8 h-8 sm:w-10 sm:h-10" />
            )}
            {item.type === "Video" && (
              <img src="/video.png" alt="video" className="w-8 h-8 sm:w-10 sm:h-10" />
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
  ))
)}
    </div>
  );
};

export default Timeline;