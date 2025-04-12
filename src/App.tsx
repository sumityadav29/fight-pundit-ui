
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Gyms from "./pages/Gyms";
import Sessions from "./pages/Sessions";
import Competitions from "./pages/Competitions";
import Social from "./pages/Social";
import GymOwners from "./pages/GymOwners";
import ManageGym from "./pages/ManageGym";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/social" element={<Social />} />
          <Route path="/gym-owners" element={<GymOwners />} />
          <Route path="/manage-gym" element={<ManageGym />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
