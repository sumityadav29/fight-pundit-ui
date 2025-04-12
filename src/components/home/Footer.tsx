
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto border-t py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold gradient-text">FightPundit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting the MMA community in India with the best gyms, training sessions, and competitions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/gyms" className="text-muted-foreground hover:text-foreground transition-colors">Find Gyms</Link>
              <Link to="/sessions" className="text-muted-foreground hover:text-foreground transition-colors">Training Sessions</Link>
              <Link to="/competitions" className="text-muted-foreground hover:text-foreground transition-colors">Competitions</Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">XP Program</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Download The App</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the FightPundit app to find gyms and book sessions on the go.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-12 w-full md:w-auto">
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
              <Button variant="outline" size="sm" className="h-12 w-full md:w-auto">
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 FightPundit. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
