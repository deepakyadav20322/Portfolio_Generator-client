import { LucideIcon } from "lucide-react";

export type ProfileThemeValue = 
  | "classic"
  | "spotlight"
  | "sidekick"
  | "minimalist"
  | "banner"
  | "modern"
  | "dynamic"
  | "elegant";

export interface ProfileTheme {
  value: ProfileThemeValue; // Restrict to predefined values
  label: string; // The display name
  icon: LucideIcon; // The icon component
}