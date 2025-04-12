
import React from "react";
import Navbar from "@/components/Navbar";
import SocialFeed from "@/components/social/SocialFeed";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import { useDialog } from "@/hooks/useDialog";
import CreatePostDialog from "@/components/social/CreatePostDialog";
import { useFollowUser } from "@/hooks/useFollowUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Social = () => {
  const { open, setOpen } = useDialog();
  const { followedUsers } = useFollowUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">MMA Feed</h1>
          <Button 
            onClick={() => setOpen(true)} 
            className="flex items-center gap-2"
          >
            <Plus size={18} />
            New Post
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <SocialFeed />
          </div>
          
          <div className="order-first md:order-last">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users size={18} />
                  Following ({followedUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {followedUsers.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    You're not following anyone yet. Click the "Follow" button on a post to add them here.
                  </p>
                ) : (
                  <ScrollArea className="max-h-[300px]">
                    <div className="space-y-3">
                      {followedUsers.map(user => (
                        <div key={user.id} className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">@{user.username}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <CreatePostDialog open={open} setOpen={setOpen} />
      </main>
    </div>
  );
};

export default Social;
