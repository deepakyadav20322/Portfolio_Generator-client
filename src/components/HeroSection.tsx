"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioThemeSelector from "@/components/portfolio_components/PortfolioThemeSelector";
import { EditHeroSectionDialog } from "./portfolio_components/edit-hero-section-dialog";
import { themes } from "@/data/themeData";
import { ProfileTheme } from "@/types/ProfileTheme";
import {
  Briefcase,
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  const [heroSectionOpen, setHeroSectionOpen] = useState(false);
  const [profileTheme, setProfileTheme] = useState<ProfileTheme>(themes[0]);
  const [heroData, setHeroData] = useState({
    fullName: "John Deep",
    title: "Frontend Engineer",
    tagline: "Jo badal de duniya",
    description: "Some description about the person.",
    email: "deep01@gmail.com",
    phone: "123456789",
    skills: ["react","NodeJs","NextJs"],
    linkedinUrl: "http://linkedin.com",
    githubUrl: "http://github.com",
    youtubeUrl: "http://youtube.com",
  });

  return (
    <div>
      <div className="flex justify-end m-2">
        {/* Profile Theme Selector */}
        <PortfolioThemeSelector
          currentTheme={profileTheme}
          setProfileTheme={setProfileTheme}
          themes={themes}
        />

        <Button
          type="button"
          onClick={() => setHeroSectionOpen(true)}
          className="ml-4"
        >
          Edit Profile Section
        </Button>
      </div>

      <section
        className={`grid md:grid-cols-2 gap-8 items-center rounded p-2 transition-all duration-300 ease-in-out ${
          (profileTheme.value as string) == "minimalist"
            ? "border-black  border-2 bg-[#f4f4f5] px-6 md:py-10"
            : ""
        } ${(profileTheme.value as string) == "sidekick" ? " " : ""}`}
      >
        <div
          className={`space-y-6  ${
            (profileTheme.value as string) == "sidekick" ? "order-last" : ""
          } `}
        >
          <h1 className="text-5xl font-extrabold">{heroData.fullName}</h1>
          <div className="text-2xl font-semibold">
            <p className="text-muted-foreground">
              {" "}
              <span>{`{${heroData.title}}`}</span>
            </p>
            <p className="text-lg">{heroData.tagline}</p>
          </div>
          <div className="space-y-2 font-medium flex flex-col gap-y-3">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="text-blue-400">{heroData.email}</span>
            </p>
            <div className="flex justify-start gap-3">
              <Briefcase />
              {heroData.skills.map((skill, id) => (
                <Badge key={id} className="bg-[#F4F4F5] text-black rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>

            <p className="flex items-center gap-2">
              <Phone />
              <span className="text-blue-400">{heroData.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Linkedin />
              <span className="text-blue-400">{heroData.linkedinUrl}</span>
            </p>
            <p className="flex items-center gap-2">
              <Github />
              <span className="text-blue-400">{heroData.githubUrl}</span>
            </p>
            <p className="flex items-center gap-2">
              <Youtube />
              <span className="text-blue-400">{heroData.youtubeUrl}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center transition-all duration-300 ease-in-out">
          <div className="w-full max-w-sm rounded-full bg-muted flex items-center justify-center">
            <img src="/profile.svg" alt="Profile" className="w-full max-w-2xl " />
          </div>
        </div>
      </section>

      <EditHeroSectionDialog
        open={heroSectionOpen}
        onOpenChange={setHeroSectionOpen}
        heroData={heroData}
        setHeroData={setHeroData}
        initialData={heroData}
        onSave={(updatedData) => setHeroData(updatedData)}
      />
    </div>
  );
};

export default HeroSection;
