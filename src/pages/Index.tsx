
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FavoriteGymsSection from "@/components/home/FavoriteGymsSection";
import UpcomingActivitiesSection from "@/components/home/UpcomingActivitiesSection";
import InfoSection from "@/components/home/InfoSection";
import Footer from "@/components/home/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FavoriteGymsSection />
        <UpcomingActivitiesSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
