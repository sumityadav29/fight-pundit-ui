
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, UserCheck, UserPlus } from "lucide-react";
import { useFollowUser } from "@/hooks/useFollowUser";
import { Button } from "@/components/ui/button";

interface Author {
  name: string;
  username: string;
  avatar: string;
  id?: string;
}

interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  likes: number;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes);
  const { isFollowing, toggleFollow } = useFollowUser();
  
  // Ensure author has an ID (use username if no id provided)
  const authorId = comment.author.id || comment.author.username;
  const following = isFollowing(authorId);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleFollow = () => {
    toggleFollow({
      id: authorId,
      name: comment.author.name,
      username: comment.author.username
    });
  };

  const timeAgo = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true });

  return (
    <div className="flex gap-2">
      <Avatar className="w-7 h-7">
        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-muted px-3 py-2 rounded-lg">
          <div className="flex justify-between">
            <span className="font-medium text-sm">{comment.author.name}</span>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleFollow}
                className="h-5 px-1"
              >
                {following ? (
                  <UserCheck className="h-3 w-3 text-primary" />
                ) : (
                  <UserPlus className="h-3 w-3" />
                )}
              </Button>
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <p className="text-sm mt-1">{comment.content}</p>
        </div>
        <div className="flex items-center gap-1 mt-1 ml-2">
          <button 
            onClick={handleLike}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <Heart className={`h-3 w-3 ${liked ? "fill-red-500 stroke-red-500" : ""}`} />
            <span>{likesCount > 0 ? likesCount : ""}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
