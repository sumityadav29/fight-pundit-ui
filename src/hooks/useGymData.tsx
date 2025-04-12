
import { useState, useEffect } from "react";
import { fetchBangaloreGyms, Gym } from "@/api/gyms";

export const useGymData = () => {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Extract unique disciplines for filters
  const disciplines = (() => {
    const allDisciplines = new Set<string>();
    gyms.forEach(gym => {
      if (gym.disciplines) {
        gym.disciplines.forEach(d => allDisciplines.add(d));
      }
      gym.classes_offered.forEach(c => {
        if (c.includes("Jiu Jitsu")) allDisciplines.add("BJJ");
        else if (c.includes("MMA") || c.includes("Mixed Martial Arts")) allDisciplines.add("MMA");
        else if (c.includes("Muay Thai")) allDisciplines.add("Muay Thai");
        else if (c.includes("Boxing")) allDisciplines.add("Boxing");
        else if (c.includes("Kickboxing")) allDisciplines.add("Kickboxing");
        else if (c.includes("Wrestling")) allDisciplines.add("Wrestling");
      });
    });
    
    return Array.from(allDisciplines).sort();
  })();

  // Fetch gyms data
  useEffect(() => {
    const loadGyms = async () => {
      try {
        setLoading(true);
        const fetchedGyms = await fetchBangaloreGyms();
        setGyms(fetchedGyms);
        setError(null);
      } catch (err) {
        console.error("Error fetching gyms:", err);
        setError("Failed to load gyms. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadGyms();
  }, []);

  return { gyms, loading, error, disciplines };
};
