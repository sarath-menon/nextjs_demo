import { z } from "zod"


export const objectiveSchema = z.object({
  id: z.string(),
  nature: z.string(),
  description: z.string(),
  rationale: z.string(),
  test: z.string(),
})

export type Objective = z.infer<typeof objectiveSchema>
