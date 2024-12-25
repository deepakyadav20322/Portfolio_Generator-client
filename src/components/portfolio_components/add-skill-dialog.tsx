'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SkillBadge } from './SkillBAdge';

interface Skill {
  id: string;
  name: string;
  proficiency: string;
  experience?: string;
}

interface AddSkillDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddSkillDialog({ open, onOpenChange }: AddSkillDialogProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState<Partial<Skill>>({
    name: '',
    proficiency: '',
    experience: '',
  });

  const handleInputChange = (field: keyof Skill, value: string) => {
    setNewSkill({ ...newSkill, [field]: value });
  };

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.proficiency) {
      setSkills([
        ...skills,
        {
          id: crypto.randomUUID(),
          name: newSkill.name,
          proficiency: newSkill.proficiency,
          experience: newSkill.experience || 'N/A',
        },
      ]);
      setNewSkill({ name: '', proficiency: '', experience: '' });
      onOpenChange(false);
    } else {
      alert('Please fill out the required fields (name and proficiency).');
    }
  };

  const handleEditSkill = (id: string) => {
    const skillToEdit = skills.find((skill) => skill.id === id);
    if (skillToEdit) {
      setNewSkill(skillToEdit);
      onOpenChange(true);
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Skill</DialogTitle>
            <DialogDescription>
              Add a new skill to your profile. Rate your proficiency from beginner to expert.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="skillName">Skill Name</Label>
                <Input
                  id="skillName"
                  placeholder="e.g. React, JavaScript, UI Design"
                  value={newSkill.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="proficiency">Proficiency Level</Label>
                <Select
                  onValueChange={(value) => handleInputChange('proficiency', value)}
                  value={newSkill.proficiency || ''}
                >
                  <SelectTrigger id="proficiency">
                    <SelectValue placeholder="Select your proficiency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="yearsExperience">Years of Experience</Label>
                <Input
                  id="yearsExperience"
                  type="number"
                  min={0}
                  step={0.5}
                  placeholder="e.g. 2.5"
                  value={newSkill.experience || ''}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleAddSkill}>
                Add Skill
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="mt-6 flex justify-start items-center flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.id}
            skill={skill}
            onEdit={() => handleEditSkill(skill.id)}
            onDelete={() => handleDeleteSkill(skill.id)}
          />
        ))}
        {skills.length==0 && <p className='text-center text-muted-foreground w-full'>No skill added yet</p>}
      </div>
    </div>
  );
}
