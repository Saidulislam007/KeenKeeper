import { UserPlus } from 'lucide-react';
import React, { use } from 'react';
const friendsData = fetch('/friends.json').then(res => res.json());

const Banner = () => {
  const friends = use(friendsData);
    return (
        <div className="bg-gray-100 py-26 px-4">
      
      {/* Banner Content */}
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 text-sm md:text-lg mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br> relationships that matter most.
        </p>

        <button className="inline-flex items-center mt-6 gap-2 bg-emerald-900 hover:bg-teal-800 text-white px-6 py-3 rounded-md">
          <UserPlus size={18} />
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800">{friends.length}</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800">4</h2>
          <p className="text-gray-500">On Track</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800">3</h2>
          <p className="text-gray-500">Need Attention</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800">8</h2>
          <p className="text-gray-500">Interactions This Month</p>
        </div>

      </div>
    </div>
    );
};

export default Banner;