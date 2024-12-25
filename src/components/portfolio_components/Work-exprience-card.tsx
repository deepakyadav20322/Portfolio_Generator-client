'use client'
import { CalendarDays, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WorkExperience } from "@/types/WorkExprience";
import { useState } from "react";

// interface WorkExperience {
//   jobTitle: string;
//   companyName: string;
//   location: string;
//   startDate: string;
//   endDate?: string;
//   isCurrentRole?: boolean;
//   description: string;
  
// }

interface WorkExperienceCardProps {
  experience: WorkExperience;
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export function WorkExperienceCard({ experience,onEdit, onDelete }: WorkExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={''}>
    <Card className="w-full hover:bg-gray-100 transition-colors duration-100">
      <CardContent className="p-6">
        
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
              {experience.isCurrentRole?
              <Badge className="bg-black">Present</Badge>
                 :""
            }
              </div>
              <p className="text-lg text-muted-foreground">
                {experience.companyName}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>
                  {experience.startDate} -{" "}
                  {experience.isCurrentRole ? "Present" : experience.endDate || "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
            <div className="relative mt-2">
            <p  className={`text-muted-foreground ${!isExpanded ? "line-clamp-3" : ""}`}>{experience.description}</p>
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
        

      </CardContent>
    </Card>
    </div>
  );
}
