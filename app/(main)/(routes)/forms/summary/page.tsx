import { Metadata } from "next"
import { cookies } from "next/headers"
import Image from "next/image"

import { columns } from "@/app/(main)/_components/req_table/columns"
import { DataTable } from "@/app/(main)/_components/req_table/data-table"
import { DataTableV2 } from "@/app/(main)/_components/subprojects_list_filtered/data-table"
import { columnsV2 } from "@/app/(main)/_components/subprojects_list_filtered/columns"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}


export default async function TaskPage() {
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>

                </div>

                {/* <div className="flex">
                    <DataTable data={tasks} columns={columns} />
                </div> */}
            </div>
        </>
    )
}