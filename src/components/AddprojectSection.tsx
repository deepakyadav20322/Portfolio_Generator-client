'use client';

import React, { useState } from 'react';
import { AddProjectDialog } from '@/components/portfolio_components/add-project-dialog';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/Project';



export function AddProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addProject = (project: Project) => {
    setProjects([...projects, { ...project, id: projects.length + "1" }]);
    setIsDialogOpen(false);
  };

  return (
    <div className=" bg-white md:p-2 p-6 sm:p-12">
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">My Projects</h2>
        <Button onClick={() => setIsDialogOpen(true)}>Add Project</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg shadow-md p-4 space-y-4 bg-gray-100 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags && project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AddProjectDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        // Passing the `addProject` method can allow the dialog to add a project
      />
    </div>
  );
}
