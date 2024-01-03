"use client"
import * as React from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { AccountSwitcher } from "./account-switcher"
import { SubProjectDisplay } from "./subprojects-display"
import { SubProjectList } from "./subprojects-list"
import { Nav } from "./nav"

import { SubProject } from "@/app/(main)/data/subprojects"
import { useSubProject } from "./use-subproject"
import { cn } from "@/lib/utils"

import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

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
