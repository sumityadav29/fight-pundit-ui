import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageSquare, Share2, MapPin, Send, UserCheck, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import CommentList from "./CommentList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFollowUser } from "@/hooks/useFollowUser";
import { toast } from "sonner";

interface Author {
  name: string;
  username: string;
  avatar: string;
  id?: string; // Add ID for authors
}

interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
  likes: number;
}

interface Post {
  id: string;
  author: Author;
  content: string;
  image?: string;
  createdAt: string;
  location?: string;
  likes: number;
  comments: Comment[];
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);
  const { toast: uiToast } = useToast();
  const { isFollowing, toggleFollow } = useFollowUser();
  
  // Ensure author has an ID (use username if no id provided)
  const authorId = post.author.id || post.author.username;
  const following = isFollowing(authorId);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/social/post/${post.id}`;
    navigator.clipboard.writeText(shareUrl);
    
    toast("Link copied to clipboard");
  };

  const handleFollow = () => {
    toggleFollow({
      id: authorId,
      name: post.author.name,
      username: post.author.username
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: `c${Date.now()}`,
      author: {
        name: "Current User",
        username: "currentuser",
        avatar: "https://i.pravatar.cc/150?img=7"
      },
      content: newComment,
      createdAt: new Date().toISOString(),
      likes: 0
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">@{post.author.username}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFollow}
                  className="flex items-center gap-1 px-2"
                >
                  {following ? (
                    <>
                      <UserCheck className="h-4 w-4 text-primary" />
                      <span className="text-xs">Following</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4" />
                      <span className="text-xs">Follow</span>
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">{timeAgo}</p>
              </div>
            </div>
            {post.location && (
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <MapPin size={12} />
                <span>{post.location}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="mb-3">{post.content}</p>
        {post.image && (
          <div className="rounded-md overflow-hidden">
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch pt-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLike}
              className="flex items-center gap-1 px-2"
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-red-500 stroke-red-500" : ""}`} />
              <span>{likesCount}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1 px-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>{comments.length}</span>
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleShare}
            className="flex items-center gap-1 px-2"
          >
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </Button>
        </div>
        
        {showComments && (
          <div className="w-full space-y-3 mt-2">
            {comments.length > 0 && (
              <ScrollArea className="max-h-[200px] w-full">
                <CommentList comments={comments} />
              </ScrollArea>
            )}
            <form onSubmit={handleAddComment} className="flex gap-2 mt-2">
              <Input
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow"
              />
              <Button type="submit" size="sm" className="px-2">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
