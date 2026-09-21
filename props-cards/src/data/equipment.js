import adjustableDumbbells from "../assets/first.jpg";
import olympicBarbell from "../assets/second.jpg";
import kettlebell from "../assets/third.jpg";
import treadmill from "../assets/fourth.jpg";
import resistanceBands from "../assets/fifth.jpg";
import weightBench from "../assets/sixth.png";

export const equipment = [
  { id: 1, name: "Adjustable Dumbbell Set", category: "Free Weights", price: 189, rating: 4.9, badge: "Best seller", image: adjustableDumbbells, description: "Space-saving strength training from 5 to 52.5 lb." },
  { id: 2, name: "Olympic Barbell, 7 ft", category: "Free Weights", price: 145, rating: 4.8, badge: "Pro grade", image: olympicBarbell, description: "A dependable steel bar for presses, pulls, and squats." },
  { id: 3, name: "Kettlebell, 16 kg", category: "Free Weights", price: 58, rating: 4.7, badge: "Core pick", image: kettlebell, description: "Powder-coated cast iron for swings, carries, and conditioning." },
  { id: 4, name: "Foldable Treadmill", category: "Cardio", price: 649, rating: 4.9, badge: "New arrival", image: treadmill, description: "Quiet, compact cardio training designed for smaller spaces." },
  { id: 5, name: "Resistance Band Set", category: "Accessories", price: 24, rating: 4.6, badge: "Great value", image: resistanceBands, description: "Five resistance levels with handles, anchors, and a carry bag." },
  { id: 6, name: "Flat Weight Bench", category: "Strength", price: 129, rating: 4.8, badge: "Gym staple", image: weightBench, description: "Stable, high-density support for every home strength session." },
];
export const categories = ["All", ...new Set(equipment.map((item) => item.category))];
