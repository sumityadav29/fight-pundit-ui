
import React from "react";
import PostCard from "./PostCard";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for posts
const MOCK_POSTS = [
  {
    id: "1",
    author: {
      id: "user1",
      name: "Alex Johnson",
      username: "alexmma",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Just had an amazing open mat session at Ultimate Jiu-Jitsu! Great rolls with everyone 🔥",
    image: "https://images.unsplash.com/photo-1559201835-a2933243cca2?q=80&w=1364&auto=format&fit=crop",
    createdAt: "2023-04-10T14:30:00Z",
    location: "Ultimate Jiu-Jitsu, Boston",
    likes: 24,
    comments: [
      {
        id: "c1",
        author: {
          id: "user5",
          name: "Sarah Lee",
          username: "sarahbjj",
          avatar: "https://i.pravatar.cc/150?img=5"
        },
        content: "Wish I could have been there! Next time for sure.",
        createdAt: "2023-04-10T15:10:00Z",
        likes: 3
      }
    ]
  },
  {
    id: "2",
    author: {
      id: "user2",
      name: "Mike Torres",
      username: "miket",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    content: "Got my purple belt today after 4 years of consistent training! Thanks to my coach and all my training partners who pushed me every day. The journey continues! 💪",
    image: "https://images.unsplash.com/photo-1574607383476-1b6461968c15?q=80&w=1364&auto=format&fit=crop",
    createdAt: "2023-04-09T18:45:00Z",
    location: "Gracie Academy, Chicago",
    likes: 87,
    comments: [
      {
        id: "c2",
        author: {
          id: "user3",
          name: "Chris Wong",
          username: "chrisjitsu",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        content: "Congrats brother! Well deserved!",
        createdAt: "2023-04-09T19:20:00Z",
        likes: 5
      },
      {
        id: "c3",
        author: {
          id: "user4",
          name: "Lisa Parker",
          username: "lisap",
          avatar: "https://i.pravatar.cc/150?img=9"
        },
        content: "Amazing achievement! Keep grinding!",
        createdAt: "2023-04-09T20:05:00Z",
        likes: 2
      }
    ]
  },
  {
    id: "3",
    author: {
      id: "user5",
      name: "Emily Davis",
      username: "emilyd",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    content: "Open mat this Saturday at Downtown MMA at 11am. All levels welcome! Tag someone who should come!",
    image: "https://images.unsplash.com/photo-1599675097568-4bb9b74d04b4?q=80&w=1364&auto=format&fit=crop",
    createdAt: "2023-04-08T10:15:00Z",
    location: "Downtown MMA, Portland",
    likes: 42,
    comments: []
  }
];

const SocialFeed = () => {
  return (
    <ScrollArea className="pr-4">
      <div className="space-y-6 max-w-2xl mx-auto">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default SocialFeed;
