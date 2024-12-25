
import {
  Layout,
  Sparkles,
  Sidebar,
  Minimize2,
  Flag,
  Monitor,
  Wand2,
  Crown,
} from "lucide-react";
import { ProfileTheme } from "@/types/ProfileTheme";
export const themes: ProfileTheme[] = [
  { value: "classic", label: "Classic", icon: Layout },
  { value: "spotlight", label: "Spotlight", icon: Sparkles },
  { value: "sidekick", label: "Sidekick", icon: Sidebar },
  { value: "minimalist", label: "Minimalist", icon: Minimize2 },
  { value: "banner", label: "Banner", icon: Flag },
  { value: "modern", label: "Modern", icon: Monitor },
  { value: "dynamic", label: "Dynamic", icon: Wand2 },
  { value: "elegant", label: "Elegant", icon: Crown },
];