'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Project } from '@/types/Project';
import { ProjectCard } from './Project-card';
import { Textarea } from '../ui/textarea';

interface AddProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddProjectDialog({ open, onOpenChange }: AddProjectDialogProps) {
  const [newTag, setNewTag] = useState<string>(''); // New state for the tag input
  const [projects, setProjects] = useState<Project[]>([
    // {
    //   id: "1",
    //   title: "Portfolio Website",
    //   description: "A personal portfolio showcasing my skills and projects.",
    //   liveLink: "https://portfolio.com",
    //   codeLink: "https://github.com/myportfolio",
    //   imageSource: "",
    //   tags: ["React", "Tailwind CSS"],
    // },
  ]);

  const [formData, setFormData] = useState<Project>({
    id: '',
    title: '',
    description: '',
    liveLink: '',
    codeLink: '',
    imageSource: '',
    tags: [], // Ensure tags is always an empty array initially
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && (formData.tags?.length ?? 0) < 8) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags ?? []), newTag.trim()], // Ensure tags is defined
      }));
      setNewTag(''); // Clear the input after adding the tag
    }
  };

  const handleRemoveTag = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((_, i) => i !== index) ?? [], // Safely handle undefined tags
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description) {
      alert("Title and description are required.");
      return;
    }

    const newProject: Project = {
      ...formData,
      id: Date.now().toString(),
    };

    setProjects((prev) => [...prev, newProject]);

    setFormData({
      id: '',
      title: '',
      description: '',
      liveLink: '',
      codeLink: '',
      imageSource: '',
      tags: [], // Reset to empty array
    });
    onOpenChange(false);
  };

  return (
    <div>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Fill in the details of your new project. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
         
            {/* Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Project Title"
              />
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Project Description"
                className="min-h-[100px]"
              />
            </div>

            {/* Live Link */}
            <div className="grid gap-2">
              <Label htmlFor="liveLink">Live Link (Optional)</Label>
              <Input
                id="liveLink"
                value={formData.liveLink}
                onChange={handleInputChange}
                placeholder="https://myproject.com"
              />
            </div>

            {/* Code Link */}
            <div className="grid gap-2">
              <Label htmlFor="codeLink">Code Link (Optional)</Label>
              <Input
                id="codeLink"
                value={formData.codeLink}
                onChange={handleInputChange}
                placeholder="https://github.com/myproject"
              />
            </div>

            <div className="space-y-2">
              <Label>Tags (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Add a new tag"
                />
                <Button variant="outline" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              {formData.tags && formData.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm flex items-center"
                    >
                      {tag}
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveTag(index)}>
                        &times;
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                Press Enter to add a tag. Maximum of 8 tags allowed.
              </p>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleSubmit}>
                Add Project
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Display existing projects */}
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={(id) =>console.log('jk')}
            onDelete={(id) => console.log("Delete", id)}
          />
        ))}
        {projects.length==0 && <p className=' text-muted-foreground text-center'>No project added yet.</p>}
      </div>
    </div>
  

  );
}
