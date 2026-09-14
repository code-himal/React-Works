import { useState } from "react";
import { Moon, Sun, Dumbbell } from "lucide-react";
import ProductCard from "./Productcard";
import firstImage from "./assets/first.jpg";
import secondImage from "./assets/second.jpg";
import thirdImage from "./assets/third.jpg";
import fourthImage from "./assets/fourth.jpg";
import fifthImage from "./assets/fifth.jpg";
import sixthImage from "./assets/sixth.png";

const defaultEquipment = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set",
    category: "Free weights",
    price: 189,
    image: firstImage,
    rating: 4.9,
    badge: "Best seller",
    description: "Precision-balanced weights for strength training at home.",
  },
  {
    id: 2,
    name: "Olympic Barbell, 7ft",
    category: "Free weights",
    price: 145,
    image: secondImage,
    rating: 4.8,
    badge: "Pro grade",
    description: "Heavy-duty steel bar built for serious powerlifting sessions.",
  },
  {
    id: 3,
    name: "Kettlebell, 16kg",
    category: "Free weights",
    price: 58,
    image: thirdImage,
    rating: 4.7,
    badge: "Core pick",
    description: "Compact and ergonomic for swings, carries, and conditioning.",
  },
  {
    id: 4,
    name: "Foldable Treadmill",
    category: "Cardio",
    price: 649,
    image: fourthImage,
    rating: 4.9,
    badge: "New",
    description: "A compact cardio machine designed for apartments and tight spaces.",
  },
  {
    id: 5,
    name: "Resistance Band Set",
    category: "Accessories",
    price: 24,
    image: fifthImage,
    rating: 4.6,
    badge: "Value",
    description: "Lightweight mobility and strength kit for warm-ups and recovery.",
  },
  {
    id: 6,
    name: "Flat Weight Bench",
    category: "Strength",
    price: 129,
    image: sixthImage,
    rating: 4.8,
    badge: "Gym staple",
    description: "Sturdy, foldable support for pressing, squats, and core work.",
  },
];

export default function GymEquipmentGrid({ equipment = defaultEquipment }) {
  const [isDark, setIsDark] = useState(false);

  const shellClasses = isDark
    ? "bg-zinc-950 text-zinc-50"
    : "bg-gradient-to-br from-zinc-100 via-zinc-50 to-orange-50 text-zinc-900";

  const panelClasses = isDark
    ? "border-zinc-800 bg-zinc-900/80"
    : "border-zinc-200 bg-white/80";

  return (
    <div className={`${shellClasses} min-h-screen transition-colors duration-300`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14 lg:px-10">
        <header className={`mx-auto mb-8 flex max-w-6xl flex-col gap-4 rounded-[28px] border p-5 shadow-lg shadow-zinc-900/5 backdrop-blur-sm sm:p-6 ${panelClasses}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30">
                <Dumbbell className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-xs font-medium uppercase tracking-[0.2em] ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                  Gym equipment
                </p>
                <h1 className={`text-3xl font-black tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-zinc-900"}`}>
                  Build your home rack
                </h1>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isDark
                  ? "border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  : "border-zinc-300 bg-white text-zinc-700 shadow-sm hover:bg-zinc-100"
              }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "Premium strength gear",
              "Home gym essentials",
              "Fast shipping",
            ].map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1.5 font-medium ${
                  isDark ? "bg-zinc-800 text-zinc-200" : "bg-orange-100 text-orange-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <ProductCard key={item.id} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}