
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Swords } from "lucide-react";

const HeroSection = () => {
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/70 text-white py-16 md:py-24">
      {/* Abstract shapes decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Fight elements decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Swords className="absolute top-10 right-[10%] text-white/5 h-24 w-24 rotate-12" />
        <Swords className="absolute bottom-10 left-[5%] text-white/5 h-16 w-16 -rotate-12" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Discover MMA Gyms & Training in India
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Connect with the best MMA gyms, find training sessions, and join competitions all across India.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-5 w-5 text-white/70" />
              <Input
                type="text"
                placeholder="Search for gyms, sessions or competitions..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-10 pr-4 py-6 text-white placeholder:text-white/70 bg-white/10 border-0 focus-visible:ring-2 focus-visible:ring-offset-0"
              />
              <Button className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground shrink-0 btn-punch">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">
                <MapPin className="mr-1 h-4 w-4" />
                Mumbai
              </Button>
              <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">
                <MapPin className="mr-1 h-4 w-4" />
                Delhi
              </Button>
              <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">
                <MapPin className="mr-1 h-4 w-4" />
                Bangalore
              </Button>
              <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10">
                <MapPin className="mr-1 h-4 w-4" />
                Hyderabad
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button className="bg-white text-primary hover:bg-white/90 btn-punch">Find Gyms</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 btn-punch">Browse Training</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
