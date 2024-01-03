"use client"
import { SubProjectList } from "./subprojects-list"
import { SubProject } from "@/app/(main)/data/subprojects"

interface SubProjectProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]

  mails: SubProject[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function SubProject({
  mails,
}: SubProjectProps) {


  return (

    // Tabs
    <div className="py-8">
      <SubProjectList items={mails} />
    </div>


  )
}
