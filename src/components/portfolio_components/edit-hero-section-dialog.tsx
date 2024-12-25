'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle,DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X } from 'lucide-react'
import { HeroData } from '@/types/HeroData'
 

interface EditHeroSectionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  heroData: HeroData;
  setHeroData: (data: HeroData) => void;
  initialData?: HeroData,
  onSave: (updatedData: any) => void; 

}

export function EditHeroSectionDialog({ 
  open, 
  onOpenChange,
  initialData = {
    fullName: '',
    title: '',
    tagline: '',
    description: '',
    email: '',
    phone: '',
    skills: [],
    linkedinUrl: '',
    githubUrl: '',
    youtubeUrl: ''
  },
  setHeroData
}: EditHeroSectionDialogProps) {
  const [formData, setFormData] = useState<HeroData>(initialData)
  const [newSkill, setNewSkill] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setHeroData(formData)
    console.log('Hero Section Form Data:', formData)
    onOpenChange(false)
  }

  const handleGenerateWithAI = (field: 'tagline' | 'description') => {
    // Simulating AI generation
    console.log(`Generating ${field} with AI`)
    const aiContent = field === 'tagline' 
      ? 'AI Generated Tagline Example'
      : 'AI Generated Description Example'
    setFormData(prev => ({ ...prev, [field]: aiContent }))
  }

  const addSkill = () => {
    if (newSkill && formData.skills.length < 20) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
   
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-3">
            <span>Update Hero Section</span>
            <Button type='button' size="sm" className='cursor-not-allowed mt-2'>
              Edit Avatar
            </Button>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="Jhon deep"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="hjgjhg high"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tagline">
              Tagline (max 50 characters) (optional)
              <span className="float-right text-muted-foreground text-sm">
                {formData.tagline.length}/50
              </span>
            </Label>
            <div className="grid gap-2">
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => {
                  if (e.target.value.length <= 50) {
                    setFormData(prev => ({ ...prev, tagline: e.target.value }))
                  }
                }}
                placeholder="nmbnmbnb"
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => handleGenerateWithAI('tagline')}
              >
                Generate With AI
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">
              Description (max 250 characters)
              <span className="float-right text-muted-foreground text-sm">
                {formData.description.length}/250
              </span>
            </Label>
            <div className="grid gap-2">
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => {
                  if (e.target.value.length <= 250) {
                    setFormData(prev => ({ ...prev, description: e.target.value }))
                  }
                }}
                placeholder="bjjhnjkh kjhkjh jhjkhjkhk kjhkjhjk hk"
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => handleGenerateWithAI('description')}
              >
                Generate With AI
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="deep01@gmail.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="123456789"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Skills</Label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a new skill"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addSkill()
                  }
                }}
              />
              <Button 
                type="button"
                onClick={addSkill}
                disabled={formData.skills.length >= 20}
              >
                Add Skill
              </Button>
            </div>
            {formData.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-2 py-1">
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-sm text-muted-foreground">Maximum of 20 skills allowed.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="linkedinUrl">LinkedIn URL (optional)</Label>
              <Input
                id="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                placeholder="http://drhfkjdhsfk.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
              <Input
                id="githubUrl"
                value={formData.githubUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                placeholder="http://drhfkjdhsfk.com123456"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="youtubeUrl">YouTube URL (optional)</Label>
            <Input
              id="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, youtubeUrl: e.target.value }))}
              placeholder="https://myYutubechannel.com"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Update Hero Section
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

