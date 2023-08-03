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
