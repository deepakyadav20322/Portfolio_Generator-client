'use client'
import { useState } from "react";
import { AddWorkExperienceDialog } from "./portfolio_components/add-work-experience-dialog";
import { Button } from "./ui/button";

export default function WorkExperienceSection() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="container mx-auto px-2 py-8 ">
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Work Experience</h2>
        <Button onClick={() => setIsDialogOpen(true)}>Add Exprience</Button>
      </div>
      {/* <div className=" grid md:grid-cols-2 grid-cols-1 gap-x-8">
        {experiences.map((experience, index) => (
          <WorkExperienceCard key={index} experience={experience} />
        ))}
      </div> */}

<AddWorkExperienceDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        // Passing the`addProject` method can allow the dialog to add a project
      />
    </div>
  );
}

