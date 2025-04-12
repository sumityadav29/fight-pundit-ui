
export interface GymFee {
  type: string;
  price: string;
}

export interface Gym {
  id?: string;
  name: string;
  address: string;
  fees_prices: GymFee[];
  classes_offered: string[];
  trial_class_available: string;
  location?: string;
  image?: string;
  rating?: number;
  memberCount?: number;
  featured?: boolean;
  disciplines?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const bangaloreGyms: Gym[] = [
  {
    id: "1",
    name: "Reach Fitness",
    address: "BMTC Bus Stand Chandra Layout, Bangalore",
    location: "Chandra Layout, Bangalore",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920",
    disciplines: ["MMA", "Kickboxing", "Muay Thai", "Boxing"],
    memberCount: 174,
    featured: true,
    fees_prices: [
      {"type": "Gym + Group Activities", "price": "₹3,500 / month"},
      {"type": "Daily Pass (Dance Fit/Stepper)", "price": "₹170 / day (indicative of drop-in rates)"}
    ],
    classes_offered: [
      "Mixed Martial Arts",
      "Kickboxing",
      "Muay Thai",
      "Boxing",
      "General Fitness",
      "Dance Fit",
      "High Low/Stepper Dance"
    ],
    trial_class_available: "Daily pass options available, contact for specific free trial information."
  },
  {
    id: "2",
    name: "B3 Wellness Studio",
    address: "Munireddy Layout B Narayanapura, Bangalore",
    location: "B Narayanapura, Bangalore",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1919",
    disciplines: ["BJJ", "Kickboxing", "MMA"],
    memberCount: 135,
    fees_prices: [
       {"type": "Jujitsu", "price": "₹2,500 / month"},
       {"type": "Cult Pass (Daily Access)", "price": "₹499 / day"},
       {"type": "Cult Pass (Annual Access)", "price": "₹19,990 / year"}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu / Jujitsu",
      "Kickboxing",
      "Mixed Martial Arts"
    ],
    trial_class_available: "Cult Pass daily option available, contact for specific free trial information."
  },
  {
    id: "3",
    name: "Kia-kaha MMA Academy",
    address: "1st Cross Road Koramangala, Bangalore",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920",
    disciplines: ["BJJ", "Wrestling", "MMA"],
    memberCount: 210,
    featured: true,
    fees_prices: [
      {"type": "Membership", "price": "Price Available (Contact gym)"}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu",
      "Wrestling",
      "MMA"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "4",
    name: "Abhiva Crossfit Arena",
    address: "80ft Road Mahadevapura, Bangalore",
    location: "Mahadevapura, Bangalore",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1616279969701-d250b59fd1c6?q=80&w=1920",
    disciplines: ["BJJ", "Kickboxing", "Boxing", "Crossfit"],
    memberCount: 148,
    fees_prices: [
       {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu",
      "Kickboxing",
      "Boxing",
      "Crossfit"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "5",
    name: "Bengaluru Mixed Martial Arts (BMMAC)",
    address: "Multiple Locations: Above Corner House New Bel Road; 12th Block Nagarbhavi, Bangalore",
    location: "New Bel Road & Nagarbhavi, Bangalore",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1919",
    disciplines: ["BJJ", "Muay Thai", "MMA"],
    memberCount: 225,
    featured: true,
    fees_prices: [
       {"type": "Membership", "price": "Price Available (Contact gym)"}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu",
      "Muay Thai",
      "MMA"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "6",
    name: "Indian Combat Sports Academy",
    address: "Multiple Locations: Bilal Masjid Bannerghatta; Neeladri Road Electronic City (Game Pro), Bangalore",
    location: "Bannerghatta & Electronic City, Bangalore",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920",
    disciplines: ["BJJ", "MMA"],
    memberCount: 163,
    fees_prices: [
        {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu",
      "MMA"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "7",
    name: "CONQUER GYM",
    address: "Bannerghatta-Gottigere, Bangalore",
    location: "Bannerghatta-Gottigere, Bangalore",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920",
    disciplines: ["BJJ", "Muay Thai", "MMA"],
    memberCount: 132,
    fees_prices: [
        {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
      "Brazilian Jiu Jitsu",
      "Muay Thai",
      "MMA"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "8",
    name: "Evolution Fitness",
    address: "Cross Kumaraswamy Layout 2 Stage, Bangalore",
    location: "Kumaraswamy Layout, Bangalore",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1616279969701-d250b59fd1c6?q=80&w=1920",
    disciplines: ["Muay Thai", "Boxing", "MMA", "Crossfit"],
    memberCount: 197,
    fees_prices: [
       {"type": "Mixed Martial Arts", "price": "₹8,000 / 3 months"},
       {"type": "Cardio + Crossfit Training + Gym", "price": "₹6,000 / 3 months"}
    ],
    classes_offered: [
      "Muay Thai",
      "Boxing",
      "Mixed Martial Arts",
      "Crossfit",
      "Cardio",
      "Gym Access"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "9",
    name: "Fit I Am",
    address: "Girias Showroom Rajajinagar, Bangalore",
    location: "Rajajinagar, Bangalore",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920",
    disciplines: ["Muay Thai", "MMA", "CrossFit"],
    memberCount: 178,
    fees_prices: [
       {"type": "Cross Functional Training + MMA (Daily)", "price": "₹500 / day"},
       {"type": "Cross Functional Training + MMA (3 Months)", "price": "₹9,000 / 3 Months"},
       {"type": "Cross Functional Training + MMA (Annual)", "price": "₹25,000 / year"}
    ],
    classes_offered: [
       "Muay Thai",
       "Mixed Martial Arts",
       "Cross Functional Training"
    ],
    trial_class_available: "Daily pass option available (₹500)."
  },
  {
    id: "10",
    name: "Rox Boxing Gym",
    address: "HSR Extension, Bangalore",
    location: "HSR Extension, Bangalore",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1919",
    disciplines: ["Boxing"],
    memberCount: 120,
    fees_prices: [
      {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
      "Boxing (Beginner, Advanced, Fitness)",
      "Personal Training (Boxing)"
    ],
    trial_class_available: "Yes, offers a 'One Week Trial Pack'. Contact for details."
  },
  {
    id: "11",
    name: "Institute Of Eight Limbs & Fitness Centre",
    address: "Multiple listings: Varthur Main Road Marathahalli; Patel Complex Varthur, Bangalore",
    location: "Marathahalli & Varthur, Bangalore",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920",
    disciplines: ["Muay Thai"],
    memberCount: 145,
    fees_prices: [
       {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
        "Muay Thai (Art of Eight Limbs)",
        "Fitness Centre"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  },
  {
    id: "12",
    name: "Combatant Muay Thai Academy",
    address: "60 Feet Road Marathahalli, Bangalore",
    location: "Marathahalli, Bangalore",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920",
    disciplines: ["Muay Thai"],
    memberCount: 130,
    fees_prices: [
       {"type": "Membership", "price": "Information not available in snippets. Contacting the gym is recommended."}
    ],
    classes_offered: [
      "Muay Thai"
    ],
    trial_class_available: "Information not available in snippets. Contacting the gym is recommended."
  }
];

export const fetchBangaloreGyms = async (): Promise<Gym[]> => {
  // This is a mock API call. In a real app, this would be a fetch to a real API endpoint
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(bangaloreGyms);
    }, 500);
  });
};

export const fetchFeaturedGyms = async (): Promise<Gym[]> => {
  // This function will return only featured gyms
  const allGyms = await fetchBangaloreGyms();
  return allGyms.filter(gym => gym.featured);
};
