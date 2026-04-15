import React from 'react';
import { Link } from 'react-router';

const getStatusStyle = (status) => {
    switch (status) {
        case "Overdue":
            return "bg-red-100 text-red-600";
        case "Almost Due":
            return "bg-yellow-100 text-yellow-700";
        default:
            return "bg-green-100 text-green-600";
    }
};

const getTagStyle = (tag) => {
    switch (tag) {
        case "WORK":
            return "bg-green-100 text-green-600";
        case "FAMILY":
            return "bg-green-100 text-green-600";
        case "HOBBY":
            return "bg-green-100 text-green-600";
        case "TRAVEL":
            return "bg-green-100 text-green-600";
        default:
            return "bg-green-100 text-green-600";
    }
};
const FriendsUI = ({ friend }) => {

    return (
        
            <Link to={`/friendDetails/${friend.id}`}>
            <div className="bg-white rounded-2xl shadow mt-4 pt-10 p-6 w-70 h-76 flex flex-col items-center text-center">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-24 h-24 rounded-full mb-3"
                        />

                        <h2 className="text-lg font-semibold">{friend.name}</h2>
                        <h1 className="">{friend.days_since_contact}d Ago</h1>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {
                                friend.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600"
                                    >
                                        {tag}
                                    </span>
                                ))
                            }
                        </div>

                        <div className="flex gap-2 mt-2">
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                {friend.status}
                            </span>
                        </div>



                    </div>
            </Link>
        
    );
};

export default FriendsUI;