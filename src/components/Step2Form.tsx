'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Step2FormProps {
    portfolioURL: string; // Add this line to include portfolioURL
}

const Step2Form: React.FC<Step2FormProps> = ({ portfolioURL }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    tagline: "",
    description: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    youtube: "",
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  // Generic handler for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (newSkill && skills.length < 4) {
      setSkills((prev) => [...prev, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove: number) => {
    setSkills((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Skills:", skills);
    console.log(portfolioURL)
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-2xl font-bold">Create Portfolio</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Frontend Developer"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="tagline">Tagline (max 50 characters) (optional)</Label>
                <span className="text-sm text-muted-foreground">{formData.tagline.length}/50</span>
              </div>
              <Input
                id="tagline"
                name="tagline"
                placeholder="Your catchy tagline"
                maxLength={50}
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="description">Description (max 250 characters)</Label>
                <span className="text-sm text-muted-foreground">{formData.description.length}/250</span>
              </div>
              <Textarea
                id="description"
                name="description"
                placeholder="A brief description of yourself"
                maxLength={250}
                value={formData.description}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>Skills</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <Button
                  onClick={addSkill}
                  type="button"
                  className="bg-black text-white hover:bg-black/90"
                >
                  Add Skill
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 text-gray-900 px-3 py-1 rounded-md text-sm"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{skills.length}/4</div>
            </div>

            {/* Optional Fields */}
            {["phone", "linkedin", "github", "youtube"].map((field) => (
              <div key={field} className="space-y-2">
                <Label htmlFor={field}>{`${field.charAt(0).toUpperCase() + field.slice(1)} URL (optional)`}</Label>
                <Input
                  id={field}
                  name={field}
                  type={field === "phone" ? "tel" : "url"}
                  placeholder={`Enter your ${field}`}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <Button className="w-full bg-zinc-600 text-white hover:bg-zinc-700" size="lg" type="submit">
            Create Portfolio
          </Button>
        </form>
      </div>
    </div>
  );
}


export default Step2Form;