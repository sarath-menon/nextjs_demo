import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { cookies } from "next/headers"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/app/(main)/_components/req_table/columns"
import { DataTable } from "@/app/(main)/_components/req_table/data-table"
import { UserNav } from "@/app/(main)/_components/user-nav"
import { taskSchema } from "@/app/(main)/data/schema"
import { Mail } from "@/app/(main)/_components/projects_list/mail"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "app/(main)/data/tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {

    const tasks = await getTasks()

    const layout = cookies().get("react-resizable-panels:layout")
    const collapsed = cookies().get("react-resizable-panels:collapsed")

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>

                </div>

                <div className="flex">
                    <DataTable data={tasks} columns={columns} />
                </div>

                <div className="flex">
                    <Mail
                        mails={SUB_PROJECTS}
                    />
                </div>

            </div>
        </>
    )
}