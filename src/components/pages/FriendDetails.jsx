import React, { use } from 'react';

import { useParams } from 'react-router';
const friendsPromise = fetch('/public/friends.json').then(res => res.json());

const FriendDetails = () => {
    const params = useParams();
    const friends = use(friendsPromise);

    const friend = friends.find(friend => friend.id === parseInt(params.id));
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;
    return (
        <div className="min-h-screen pt-[80px] bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* LEFT COLUMN */}
                <div>
                    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-24 h-24 rounded-full mb-3"
                        />

                        <h2 className="text-lg font-semibold">{name}</h2>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {
                                tags.map((tag, index) => (
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
                                {status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mt-3 italic">
                            {bio}
                        </p>

                        <p className="text-sm text-gray-400 mt-1">Preferred: {email}</p>

                        {/* ACTION BUTTONS */}

                    </div>
                    <div className="w-full mt-4 space-y-2">
                        <button className="w-full py-2 rounded-lg bg-white hover:bg-gray-200">
                            ⏰ Snooze 2 Weeks
                        </button>
                        <button className="w-full py-2 rounded-lg bg-white hover:bg-gray-200">
                            📦 Archive
                        </button>
                        <button className="w-full py-2 rounded-lg bg-white text-red-600 hover:bg-red-200">
                            🗑️ Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-2 space-y-4 ">

                    {/* STATS */}
                    <div className="grid grid-cols-1 h-[120px] sm:grid-cols-3 gap-4">
                        <div className="bg-white p-8 rounded-2xl shadow text-center">
                            <p className="text-2xl font-bold">{days_since_contact}</p>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow text-center">
                            <p className="text-2xl font-bold">{goal}</p>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow text-center">
                            <p className="text-2xl font-bold">{next_due_date}</p>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white p-4 h-[120px] rounded-2xl shadow flex justify-between items-center">
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
                    <div className="bg-white  p-4 rounded-2xl shadow">
                        <h3 className="font-semibold mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-1 my-4 sm:grid-cols-3 gap-4 ">
                            <button className="p-4 rounded-xl h-[80px] bg-gray-100 hover:bg-gray-200">
                                📞 Call
                            </button>
                            <button className="p-4 rounded-xl h-[80px] bg-gray-100 hover:bg-gray-200">
                                💬 Text
                            </button>
                            <button className="p-4 rounded-xl h-[80px] bg-gray-100 hover:bg-gray-200">
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