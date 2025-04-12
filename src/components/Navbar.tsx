
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Dumbbell,
  Calendar,
  Trophy,
  User,
  Menu,
  X,
  Bell,
  Search,
  Swords,
  MessageSquare,
  Building
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Add the missing isActive function that checks if a path matches the current location
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Gyms", path: "/gyms", icon: <Dumbbell className="w-5 h-5" /> },
    { name: "Sessions", path: "/sessions", icon: <Calendar className="w-5 h-5" /> },
    { name: "Competitions", path: "/competitions", icon: <Trophy className="w-5 h-5" /> },
    { name: "Feed", path: "/social", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Swords className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold gradient-text">FightPundit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 transition-colors ${
                  isActive(item.path) 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/gym-owners"
              className={`flex items-center space-x-1 transition-colors ${
                isActive("/gym-owners") 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building className="w-5 h-5" />
              <span>For Gym Owners</span>
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/profile">
              <Button variant={isActive("/profile") ? "default" : "outline"} size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-2 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-primary/10 text-foreground font-medium"
                      : "hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/gym-owners"
                className={`flex items-center space-x-2 px-2 py-2 rounded-md transition-colors ${
                  isActive("/gym-owners")
                    ? "bg-primary/10 text-foreground font-medium"
                    : "hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Building className="w-5 h-5" />
                <span>For Gym Owners</span>
              </Link>
              <div className="flex justify-between mt-2 pt-2 border-t">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5" />
                </Button>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant={isActive("/profile") ? "default" : "outline"} size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
