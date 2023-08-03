import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseAPIUrl() {
  return process.env.NODE_ENV === "production"
    ? "https://innoscripta-assessment-backend-production.up.railway.app/api"
    : "http://localhost/api";
}

const animationDataFiles = [
  require("./lottie/animation_1.json"),
  require("./lottie/animation_2.json"),
  require("./lottie/animation_3.json"),
  require("./lottie/animation_4.json"),
  require("./lottie/animation_5.json"),
  require("./lottie/animation_6.json"),
  require("./lottie/animation_7.json"),
  require("./lottie/animation_8.json"),
  require("./lottie/animation_9.json"),
  require("./lottie/animation_10.json"),
];

export function getRandomAnimationData() {
  const randomIndex = Math.floor(Math.random() * animationDataFiles.length);
  return animationDataFiles[randomIndex];
}
