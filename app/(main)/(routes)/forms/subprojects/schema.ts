import { z } from "zod"

export const subprojectSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    label: z.string(),
    type: z.string(),
    priority: z.string(),
  })
  
  export type SubProject = z.infer<typeof subprojectSchema>
  