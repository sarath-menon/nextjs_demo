import { ComponentProps } from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SubProject } from "@/app/(main)/data/subprojects"
import { useSubProject } from "./use-subproject"
import { CreateAssumptionDialog } from "../assumption_creator"
import { Link } from "lucide-react"
import { ViewReqDialog } from "../req_viewer"
import { SubprojectViewDialog } from "../subproject_viewer"

interface SubProjectListProps {
  items: SubProject[]
}

export function SubProjectList({ items }: SubProjectListProps) {
  const [subproject, setSubProject] = useSubProject()



  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
            )}
          >

            {/* Title and Subtitle */}
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">

                {/* Title */}
                <div className="flex items-center gap-2">

                  <div className="font-semibold">
                    <SubprojectViewDialog name={item.name} />
                  </div>

                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600">

                    </span>
                  )}
                </div>

                <div
                  className={cn(
                    "ml-auto text-xs",
                    subproject.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>

              {/* Subtitle */}
              <div className="text-xs font-medium">{item.subject}</div>
            </div>

            {/* Absract */}
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>

            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea >
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}
