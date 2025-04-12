
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const InfoSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How FightPundit Works</h3>
              <p className="text-muted-foreground mb-4">
                FightPundit connects MMA enthusiasts with gyms, training sessions, and competitions across India. 
                Earn XP points by participating in events, writing reviews, and being active in the community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">About Us</Button>
                <Button variant="outline">XP Program</Button>
                <Button variant="outline">For Gym Owners</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
