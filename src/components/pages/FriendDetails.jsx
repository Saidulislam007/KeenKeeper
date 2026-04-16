import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { FriendContext } from '../context/FriendContext';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendDetails = () => {
    const params = useParams();
    const friends = use(friendsPromise);

    const friend = friends.find(friend => friend.id === parseInt(params.id));

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;

    const { handleTimeline } = useContext(FriendContext);

    return (
        <div className="min-h-screen pt-[80px] bg-gray-100 p-3 sm:p-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* LEFT COLUMN */}
                <div className="space-y-4">
                    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3"
                        />

                        <h2 className="text-base sm:text-lg font-semibold">{name}</h2>
                        <div className="flex gap-2 mt-2">
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                {status}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        

                        <p className="text-xs sm:text-sm text-gray-500 mt-3 italic">
                            {bio}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-400 mt-1 break-all">
                            {email}
                        </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl  hover:bg-gray-50 cursor-pointer">
                            <span>🔔</span>
                            <span className="text-sm sm:text-base">Snooze 2 Weeks</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                            <span>📥</span>
                            <span className="text-sm sm:text-base">Archive</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                            <span>🗑</span>
                            <span className="text-red-500 text-sm sm:text-base">Delete</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-2 space-y-4">

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">

                        <div className="bg-white p-3 sm:p-6 rounded-2xl shadow text-center">
                            <p className="text-sm sm:text-2xl font-bold">{days_since_contact}</p>
                            <p className="text-[10px] sm:text-sm text-gray-500">Days Since</p>
                        </div>

                        <div className="bg-white p-3 sm:p-6 rounded-2xl shadow text-center">
                            <p className="text-sm sm:text-2xl font-bold">{goal}</p>
                            <p className="text-[10px] sm:text-sm text-gray-500">Goal</p>
                        </div>

                        <div className="bg-white p-3 sm:p-6 rounded-2xl shadow text-center">
                            <p className="text-[10px] sm:text-base font-bold break-words">{next_due_date}</p>
                            <p className="text-[10px] sm:text-sm text-gray-500">Next</p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white p-4 rounded-2xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div>
                            <h3 className="font-semibold">Relationship Goal</h3>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-semibold">30 days</span>
                            </p>
                        </div>
                        <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white p-4 rounded-2xl shadow">
                        <h3 className="font-semibold mb-4">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            <button
                                onClick={() => handleTimeline(friend, "Call")}
                                className="p-3 sm:p-4 rounded-xl h-[60px] sm:h-[80px] bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
                            >
                                📞 Call
                            </button>

                            <button
                                onClick={() => handleTimeline(friend, "Text")}
                                className="p-3 sm:p-4 rounded-xl h-[60px] sm:h-[80px] bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
                            >
                                💬 Text
                            </button>

                            <button
                                onClick={() => handleTimeline(friend, "Video")}
                                className="p-3 sm:p-4 rounded-xl h-[60px] sm:h-[80px] bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
                            >
                                🎥 Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;