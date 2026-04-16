import React, { use } from 'react';
import FriendsUI from '../UI/friendsUI';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendCard = () => {
  const friends = use(friendsPromise);

  return (
    <div className="bg-gray-100 py-6 sm:py-8 lg:py-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">
  Your Friends
</h2>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-3 sm:gap-6
          px-2 sm:px-0   /* ✅ extra mobile spacing inside grid */
        ">
          {friends.map(friend => (
            <FriendsUI key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendCard;