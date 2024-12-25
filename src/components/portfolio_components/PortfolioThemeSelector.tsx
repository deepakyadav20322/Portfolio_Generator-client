"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProfileTheme } from "@/types/ProfileTheme";

interface ThemeDropdownProps {
  currentTheme: ProfileTheme; // The currently selected theme
  setProfileTheme: (theme: ProfileTheme) => void; // Callback to set the selected theme
  themes: ProfileTheme[]; // List of all available themes
}

export default function ThemeDropdown({
  currentTheme,
  setProfileTheme,
  themes,
}: ThemeDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[170px] justify-between bg-white text-zinc-900 border-zinc-200"
        >
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <currentTheme.icon className="h-4 w-4" />
              {currentTheme.label}
            </div>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[170px] bg-white border-zinc-200"
        align="start"
      >
        <DropdownMenuRadioGroup
          value={currentTheme.value}
          onValueChange={(value) => {
            const selectedTheme = themes.find((theme) => theme.value === value);
            if (selectedTheme) setProfileTheme(selectedTheme);
          }}
        >
          {themes.map((theme) => (
            <DropdownMenuRadioItem
              key={theme.value}
              value={theme.value}
              className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-zinc-100 focus:bg-zinc-100"
            >
              <div className="flex items-center gap-2">
                <theme.icon className="h-4 w-4 text-zinc-600" />
                <span>{theme.label}</span>
              </div>
              {theme.value === currentTheme.value && (
                <Check className="h-4 w-4 text-zinc-900" />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
