import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";

interface SkillBadgeProps {
  skill: {
    id: string;
    name: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function SkillBadge({ skill, onEdit, onDelete }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 px-3 py-1 space-x-2"
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-xs font-semibold">
        {skill.name.charAt(0).toUpperCase()}
      </span>
      <span>{skill.name}</span>
      <Edit
        size={16}
        className="cursor-pointer text-gray-600 hover:text-blue-500"
        onClick={() => onEdit(skill.id)}
      />
      <Trash2
        size={16}
        className="cursor-pointer text-gray-600 hover:text-red-500"
        onClick={() => onDelete(skill.id)}
      />
    </Badge>
  );
}
