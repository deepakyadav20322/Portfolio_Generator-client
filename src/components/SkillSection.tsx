import { SkillRecord } from '@/types/Skill';
import React, { useState } from 'react'
import { AddSkillDialog } from './portfolio_components/add-skill-dialog';
import { Button } from './ui/button';

const SkillSection = () => {
    const [skillList, setSlillList] = useState<SkillRecord[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    const handleAddEducation = (newEducation: SkillRecord) => {
      setSlillList([...skillList, newEducation]);
    };
  
    const handleDeleteEducation = (index: number) => {
      const updatedList = skillList.filter((_, i) => i !== index);
      setSlillList(updatedList);
    };
  return (
    
    <div className="p-2 bg-white text-black ">
    <div className="flex items-center justify-between">
    <h2 className = "text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Skills
        {/* <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
          Pro
        </span> */}
      </h2>
      <Button onClick={() => setIsDialogOpen(true)}>Add Skills</Button>
    </div>

    <AddSkillDialog
       open={isDialogOpen}
       onOpenChange={setIsDialogOpen}
    />
  </div>
);
}

export default SkillSection