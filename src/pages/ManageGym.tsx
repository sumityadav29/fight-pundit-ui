
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Camera, Edit, Info, MessageSquare, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const ManageGym = () => {
  // In a real application, you would fetch the gym data from your backend
  const gymData = {
    name: "Elite MMA Academy",
    address: "123 Main St, San Diego, CA 92101",
    phone: "(555) 123-4567",
    email: "info@elitemma.com",
    website: "https://www.elitemma.com",
    description: "Elite MMA Academy is a premier training facility offering world-class instruction in Brazilian Jiu-Jitsu, Muay Thai, Wrestling and MMA. Our coaches include former UFC fighters and champion grapplers committed to helping you achieve your martial arts goals.",
    services: "BJJ, Muay Thai, Wrestling, MMA, Strength & Conditioning",
    fees: "Monthly membership: $150, 10-class pass: $200, Drop-in: $25"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{gymData.name}</h1>
          <p className="text-muted-foreground">{gymData.address}</p>
        </div>

        <Tabs defaultValue="info" className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden md:inline">Basic Info</span>
              <span className="md:hidden">Info</span>
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span className="hidden md:inline">Media Gallery</span>
              <span className="md:hidden">Media</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden md:inline">Events & Open Mats</span>
              <span className="md:hidden">Events</span>
            </TabsTrigger>
            <TabsTrigger value="promotions" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span className="hidden md:inline">Promotions</span>
              <span className="md:hidden">Promo</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden md:inline">Member Reviews</span>
              <span className="md:hidden">Reviews</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Gym Information
                  </CardTitle>
                  <CardDescription>Manage your gym's basic information and details</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-1">Contact Information</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-sm font-medium">Phone</dt>
                        <dd>{gymData.phone}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Email</dt>
                        <dd>{gymData.email}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Website</dt>
                        <dd>{gymData.website}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-1">Business Details</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-sm font-medium">Services Offered</dt>
                        <dd>{gymData.services}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium">Membership Fees</dt>
                        <dd>{gymData.fees}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-sm text-muted-foreground mb-1">About</h3>
                  <p>{gymData.description}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Media Gallery</CardTitle>
                <CardDescription>Upload and manage photos and videos of your gym</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 border-2 border-dashed rounded-lg text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="font-medium mb-1">Upload Media</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop files here or click the button below
                  </p>
                  <Button>Upload Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Upcoming Events & Open Mats</CardTitle>
                  <CardDescription>Create and manage your gym's events</CardDescription>
                </div>
                <Button size="sm">Add Event</Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-1">No events scheduled</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create your first event to promote open mats, seminars, or competitions
                  </p>
                  <Button>Create Event</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promotions" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle>Promotions & Special Offers</CardTitle>
                  <CardDescription>Create special offers to attract new members</CardDescription>
                </div>
                <Button size="sm">Add Promotion</Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Tag className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-1">No promotions active</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create promotions like free trial classes or discounted memberships
                  </p>
                  <Button>Create Promotion</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Member Reviews</CardTitle>
                <CardDescription>See what people are saying about your gym</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-1">No reviews yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Reviews will appear here as members rate and comment on your gym
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ManageGym;
