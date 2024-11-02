import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTextColor(backgroundColor: string) {
  // Remove the "#" if present
  if (backgroundColor.startsWith("#")) {
    backgroundColor = backgroundColor.slice(1);
  }

  // Expand 3-digit hex to 6-digit hex if necessary
  if (backgroundColor.length === 3) {
    backgroundColor = backgroundColor
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse the hex color
  const r = parseInt(backgroundColor.slice(0, 2), 16);
  const g = parseInt(backgroundColor.slice(2, 4), 16);
  const b = parseInt(backgroundColor.slice(4, 6), 16);

  // Calculate the relative luminance
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

  // Return dark text color if the background is light, otherwise light text color
  return brightness > 0.5 ? "#000000" : "#FFFFFF";
}
