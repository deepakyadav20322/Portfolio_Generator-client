'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EducationRecord {
  level: string
  institution: string
  degree: string
  stream: string
  year: string
  score: string
}

interface AddEducationDialogProps {
  isOpen: boolean
  onClose: (isOpen: boolean) => void
  onSave: (newEducation: EducationRecord) => void
}

export function AddEducationDialog({ isOpen, onClose, onSave }: AddEducationDialogProps) {
  const [formData, setFormData] = useState<EducationRecord>({
    level: '',
    institution: '',
    degree: '',
    stream: '',
    year: '',
    score: ''
  })

  const handleInputChange = (field: keyof EducationRecord, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSave = () => {
    onSave(formData)
    setFormData({
      level: '',
      institution: '',
      degree: '',
      stream: '',
      year: '',
      score: ''
    })
    onClose(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Education</DialogTitle>
          <DialogDescription>Fill in the details below.</DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid gap-2">
            <Label>Level</Label>
            <Input
              placeholder="e.g., Bachelor's, Master's"
              value={formData.level}
              onChange={(e) => handleInputChange("level", e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Institution</Label>
            <Input
              placeholder="e.g., Harvard University"
              value={formData.institution}
              onChange={(e) => handleInputChange("institution", e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Degree</Label>
            <Input
              placeholder="e.g., B.Tech, MBA"
              value={formData.degree}
              onChange={(e) => handleInputChange("degree", e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Stream/Specialization</Label>
            <Input
              placeholder="e.g., Computer Science"
              value={formData.stream}
              onChange={(e) => handleInputChange("stream", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Year</Label>
              <Input
                placeholder="e.g., 2019-2023"
                value={formData.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Score</Label>
              <Input
                placeholder="e.g., 3.8 GPA"
                value={formData.score}
                onChange={(e) => handleInputChange("score", e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onClose(false)}> 
              Cancel
            </Button>
            <Button onClick={handleSave}>Add</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
