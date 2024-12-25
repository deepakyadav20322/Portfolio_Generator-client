"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrashIcon, PencilIcon } from "lucide-react";
import { AddEducationDialog } from "./portfolio_components/add-education-dialog";

interface EducationRecord {
  level: string;
  institution: string;
  degree: string;
  stream: string;
  year: string;
  score: string;
}

export function EducationSection() {
  const [educationList, setEducationList] = useState<EducationRecord[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddEducation = (newEducation: EducationRecord) => {
    setEducationList([...educationList, newEducation]);
  };

  const handleDeleteEducation = (index: number) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };
 
  return (
    <div className="p-2 bg-white text-black py-4 ">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Education
          {/* <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
            Pro
          </span> */}
        </h2>
        <Button onClick={() => setIsDialogOpen(true)}>Add Education</Button>
      </div>

      {educationList.length != 0 ? (
        <div className="rounded-md shadow-md my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Level</TableHead>
                <TableHead>Institution</TableHead>
                <TableHead>Degree</TableHead>
                <TableHead>Stream/Specialization</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educationList.map((education, index) => (
                <TableRow key={index}>
                  <TableCell>{education.level}</TableCell>
                  <TableCell>{education.institution}</TableCell>
                  <TableCell>{education.degree}</TableCell>
                  <TableCell>{education.stream}</TableCell>
                  <TableCell>{education.year}</TableCell>
                  <TableCell>{education.score}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <PencilIcon className="h-5 w-5 text-gray-600 cursor-pointer" />
                      <TrashIcon
                        className="h-5 w-5 text-red-600 cursor-pointer"
                        onClick={() => handleDeleteEducation(index)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-muted-foreground text-center">
          No education added yet.
        </p>
      )}

      <AddEducationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleAddEducation}
      />
    </div>
  );
}
