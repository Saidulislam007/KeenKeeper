import React from 'react';
import { Link } from 'react-router';

const getStatusStyle = (status) => {
  switch (status) {
    case "overdue":
      return "bg-red-100 text-red-600";
    case "almost due":
      return "bg-yellow-100 text-yellow-700";
    case "on-track":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const FriendsUI = ({ friend }) => {
  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="
        bg-white 
        rounded-2xl 
        shadow 
        p-5 sm:p-6 
        w-full 
        flex flex-col items-center text-center 
        hover:shadow-lg transition
      ">
        
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 object-cover"
        />

        <h2 className="text-base sm:text-lg font-semibold">
          {friend.name}
        </h2>

        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d Ago
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-3">
          <span
            className={`px-3 py-1 text-xs rounded-full ${getStatusStyle(friend.status)}`}
          >
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default FriendsUI;