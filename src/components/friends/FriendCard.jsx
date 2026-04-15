import React, { use } from 'react';
import FriendsUI from '../UI/friendsUI';


const friendsPromise = fetch('/public/friends.json').then(res => res.json());


const FriendCard = () => {
  const friends = use(friendsPromise);
  return (

    <div className="bg-gray-100 pb-10">
      <div className="bg-gray-100 max-w-7xl mx-auto">

        <h2 className="text-xl font-semibold ml-5 mb-5">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center p-4">
          {friends.map(friend => (
            <FriendsUI key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </div>



  );
};

export default FriendCard;