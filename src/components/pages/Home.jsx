import React, { Suspense, lazy } from "react";
import Banner from "../banner/Banner";

const FriendCard = lazy(() => import("../friends/FriendCard"));

const Home = () => {
  return (
    <div>
      <Banner />

      <Suspense fallback={
        <div className="flex justify-center items-center py-10">
      <span className="loading loading-dots loading-lg"></span>
    </div>
      }>
        <FriendCard />
      </Suspense>
    </div>
  );
};

export default Home;