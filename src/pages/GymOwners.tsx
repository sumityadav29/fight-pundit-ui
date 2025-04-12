
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Building, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  gymName: z.string().min(2, { message: "Gym name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  city: z.string().min(2, { message: "Please enter a valid city." }),
  state: z.string().min(2, { message: "Please enter a valid state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  website: z.string().url({ message: "Please enter a valid URL." }).optional(),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  services: z.string().min(5, { message: "Please enter at least one service." }),
  fees: z.string().min(2, { message: "Please provide fee information." }),
});

const GymOwners = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gymName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      services: "",
      fees: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically save this to a database
    console.log(values);
    toast.success("Gym registration submitted successfully! We'll review your information and get back to you soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">For Gym Owners</h1>
            <p className="text-muted-foreground">
              Register your gym and connect with the MMA community
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Why Join FightPundit?
              </CardTitle>
              <CardDescription>Benefits of registering your gym on our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">Increased Visibility</h3>
                  <p className="text-sm text-muted-foreground">Get discovered by MMA enthusiasts looking for new places to train.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">Event Promotion</h3>
                  <p className="text-sm text-muted-foreground">Advertise your open mats, seminars, and competitions directly to interested users.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">Community Building</h3>
                  <p className="text-sm text-muted-foreground">Connect with your members and foster a community around your gym.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">Gym Management</h3>
                  <p className="text-sm text-muted-foreground">Access tools to showcase your services, update information, and grow your business.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Register Your Gym</CardTitle>
              <CardDescription>Fill out the form below to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="gymName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gym Name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Elite MMA Academy" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number*</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address*</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City*</FormLabel>
                          <FormControl>
                            <Input placeholder="San Diego" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State*</FormLabel>
                          <FormControl>
                            <Input placeholder="California" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code*</FormLabel>
                          <FormControl>
                            <Input placeholder="92101" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="info@elitemma.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://www.elitemma.com" {...field} />
                          </FormControl>
                          <FormDescription>Optional</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gym Description*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your gym, history, mission, and what makes it special..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Offered*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="BJJ, Muay Thai, Wrestling, MMA, Strength & Conditioning..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>List all martial arts disciplines and other services you offer</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Membership Fees*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Monthly membership: $150, 10-class pass: $200, Drop-in: $25..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>Provide information about your pricing structure</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="h-5 w-5" />
                      <h3 className="font-medium">Gym Logo/Photos</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      You'll be able to upload your gym logo and photos after registration is complete.
                    </p>
                  </div>

                  <Button type="submit" className="w-full">Register Gym</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GymOwners;
