'use client'

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { WorkExperienceCard } from "./Work-exprience-card";
import { WorkExperience } from "@/types/WorkExprience";


interface AddWorkExperienceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddWorkExperienceDialog({
  open,
  onOpenChange,
}: AddWorkExperienceDialogProps) {
  const [currentlyWork, setCurrentlyWork] = useState(false);

  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
    // {
    //   id: "1",
    //   jobTitle: "Senior Frontend Developer",
    //   companyName: "Tech Solutions Inc.",
    //   location: "San Francisco, CA",
    //   startDate: "Jan 2022",
    //   isCurrentRole: true,
    //   description:
    //     "Led the frontend development team in creating modern, responsive web applications. Implemented new features and optimized existing codebase for better performance. Collaborated with designers and backend developers to deliver high-quality solutions.",
    // },
    // {
    //   id: "2",
    //   jobTitle: "Frontend Developer",
    //   companyName: "Digital Innovations",
    //   location: "New York, NY",
    //   startDate: "Mar 2020",
    //   endDate: "Dec 2021",
    //   description:
    //     "Developed and maintained multiple client-facing web applications. Worked closely with the UX team to implement pixel-perfect designs. Improved application performance and accessibility.",
    // },
  ]);

  // Form state
  const [formState, setFormState] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ---------------------
    const validateForm = () => {
      if (
        !formState.jobTitle ||
        !formState.companyName ||
        !formState.location ||
        !formState.description ||
        !formState.startDate ||
        (!currentlyWork && !formState.endDate) // Validate endDate only if not currently working
      ) {
        return false;
      }
      return true;
    };
  
    if (!validateForm()) {
    alert('Please fill all required fields!')
      return;
    }
 
    const newExperience = {
      ...formState,
      id: String(workExperience.length + 1),
      isCurrentRole: currentlyWork,
      endDate: currentlyWork ? undefined : formState.endDate, // Set endDate conditionally
    };

    setWorkExperience([...workExperience, newExperience]);
    console.log("Updated Work Experiences:", [ newExperience]);
    setFormState({
      jobTitle: "",
      companyName: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    });
    setCurrentlyWork(false);
    onOpenChange(false);
   
  };
  

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Work Experience</DialogTitle>
            <DialogDescription>
              Fill in the details of your new work experience. Click add when you're done.
              
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="Job Title"
                  value={formState.jobTitle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Company Name"
                  value={formState.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Location"
                  value={formState.location}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your responsibilities and achievements"
                  className="min-h-[100px]"
                  value={formState.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formState.startDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formState.endDate}
                    onChange={handleInputChange}
                    disabled={currentlyWork}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="currentlyWork"
                  checked={currentlyWork}
                  onCheckedChange={(checked) => setCurrentlyWork(checked as boolean)}
                />
                <Label htmlFor="currentlyWork">I currently work here</Label>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Add Work Experience</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Display existing work experiences */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-6">
        {workExperience.map((experience) => (
          <WorkExperienceCard key={experience.id} experience={experience} />
        ))}
       
      </div>
      {workExperience.length==0 &&  <p className="text-muted-foreground text-center">No work experiences added yet.</p>}
    </div>
  );
}
