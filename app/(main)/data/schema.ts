import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  type: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const subprojectSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  type: z.string(),
  priority: z.string(),
})

export type SubProject = z.infer<typeof subprojectSchema>

export const objectiveSchema = z.object({
  id: z.string(),
  nature: z.string(),
  description: z.string(),
  rationale: z.string(),
  test: z.string(),
})

export type Objective = z.infer<typeof objectiveSchema>
