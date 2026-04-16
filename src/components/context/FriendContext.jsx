import { createContext, useState } from "react";
import { toast } from "react-toastify";


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

        // ✅ success toast
        toast.success(`${type.toUpperCase()} added successfully`);
    } else {
        // ❌ warning toast
        toast.warn(`This ${type} already exists`);
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