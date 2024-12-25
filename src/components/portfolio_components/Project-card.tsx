import Image from "next/image"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {Project} from '@/types/Project'

interface ProjectCardProps {
  project: Project
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-[200px] w-full md:h-[270px] md:w-[300px] md:min-w-[300px] md:max-w-[300px]">
          <Image
            src={project.imageSource ||"/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover border-gray-500 bg-slate-300 rounded"
            priority
          />
        </div>
        <CardContent className="flex flex-col gap-4 p-6">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div className="relative mt-2">
              <p className={`text-muted-foreground ${!isExpanded ? "line-clamp-3" : ""}`}>
                {project.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-sm text-primary hover:underline mt-1"
              >
                {isExpanded ? (
                  <>
                    show less
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    show more
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.liveLink && (
              <Button asChild variant="default">
                <a href={project.liveLink ||'/abc'} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
            {project.codeLink && (
              <Button asChild variant="outline">
                <a href={project.codeLink ||'/abc'} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </Button>
            )}
            {onEdit && (
              <Button
                variant="outline"
                onClick={() => onEdit(project.id)}
              >
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="outline"
                onClick={() => onDelete(project.id)}
                className="text-destructive hover:text-destructive"
              >
                Delete
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

