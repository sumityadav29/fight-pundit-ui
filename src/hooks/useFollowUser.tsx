
import { useState, useEffect } from "react";
import { toast } from "sonner";

type FollowedUser = {
  id: string;
  name: string;
  username: string;
};

export const useFollowUser = () => {
  const [followedUsers, setFollowedUsers] = useState<FollowedUser[]>(() => {
    const saved = localStorage.getItem("followed-users");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("followed-users", JSON.stringify(followedUsers));
  }, [followedUsers]);

  const isFollowing = (userId: string) => {
    return followedUsers.some(user => user.id === userId);
  };

  const toggleFollow = (user: FollowedUser) => {
    if (isFollowing(user.id)) {
      setFollowedUsers(prev => prev.filter(u => u.id !== user.id));
      toast(`Unfollowed ${user.name}`);
    } else {
      setFollowedUsers(prev => [...prev, user]);
      toast(`Following ${user.name}`);
    }
  };

  return {
    followedUsers,
    isFollowing,
    toggleFollow
  };
};
