import { createContext, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    
        
  const [timeline, setTimeline] = useState([]);

    const handleTimeline = (friend, type) => {
        const newData = {
            ...friend,
            type, // "call" | "text" | "video"
            createdAt: new Date(),
        };

        const isExist = timeline.find(
            (item) => item.id === friend.id && item.type === type
        );

        if (!isExist) {
            setTimeline([...timeline, newData]);
        }
    };

    const data ={
        timeline,
        handleTimeline
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};