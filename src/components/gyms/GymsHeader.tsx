
import React from "react";
import { Search, MapPin, ListFilter, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface GymsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  view: "list" | "map";
  setView: (view: "list" | "map") => void;
  disciplines: string[];
}

const GymsHeader = ({ 
  searchQuery, 
  setSearchQuery, 
  view, 
  setView, 
  disciplines 
}: GymsHeaderProps) => {
  return (
    <div className="bg-primary/10 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Find MMA Gyms in Bangalore</h1>
        <p className="text-muted-foreground mb-6">
          Discover and connect with the best MMA gyms across Bangalore
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by gym name, location, or discipline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
              className="flex-1 sm:flex-none"
            >
              <ListFilter className="mr-2 h-5 w-5" />
              List View
            </Button>
            <Button
              variant={view === "map" ? "default" : "outline"}
              onClick={() => setView("map")}
              className="flex-1 sm:flex-none"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Map View
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <Filter className="mr-1 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Near Me
          </Button>
          {disciplines.map(discipline => (
            <Button 
              key={discipline}
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={() => setSearchQuery(discipline)}
            >
              {discipline}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymsHeader;
