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
import { useSubProject } from "./use-mail"
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
    < Tabs defaultValue="all" >

      <div className="flex items-center px-4 py-2">
        <h1 className="text-xl font-bold">Inbox</h1>
        <TabsList className="ml-auto">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">All mail</TabsTrigger>
          <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">Unread</TabsTrigger>
        </TabsList>
      </div>

      <Separator />

      <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>

      <TabsContent value="all" className="m-0">
        <SubProjectList items={mails} />
      </TabsContent>

      <TabsContent value="unread" className="m-0">
        <SubProjectList items={mails.filter((item) => !item.read)} />
      </TabsContent>

    </Tabs >
  )
}
