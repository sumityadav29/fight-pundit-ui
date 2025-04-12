
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImagePlus, MapPin, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CreatePostDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CreatePostDialog = ({ open, setOpen }: CreatePostDialogProps) => {
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Post content required",
        description: "Please add some text to your post",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the post data to your backend
    console.log("New post:", { content, location, imageUrl });
    
    toast({
      title: "Post created",
      description: "Your post has been published to the community",
    });
    
    // Reset form and close dialog
    resetForm();
    setOpen(false);
  };
  
  const resetForm = () => {
    setContent("");
    setLocation("");
    setImageUrl("");
    setImagePreview("");
  };
  
  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    
    // Only update preview if there's a URL
    if (url) {
      setImagePreview(url);
    } else {
      setImagePreview("");
    }
  };
  
  const clearImage = () => {
    setImageUrl("");
    setImagePreview("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="What's on your mind? Share your training, achievements, or call someone out for a match..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px]"
          />
          
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Add location (optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <ImagePlus className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Add image URL (optional)"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
          </div>
          
          {imagePreview && (
            <div className="relative mt-2">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-background/80 z-10"
                onClick={clearImage}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="rounded-md overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-auto max-h-[200px] object-cover"
                  onError={() => setImagePreview("")}
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Publish</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
