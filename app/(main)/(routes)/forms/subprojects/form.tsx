"use client"

import { SubProject } from "@/app/(main)/_components/subprojects_list/subprojects"
import { subprojectColumns } from "@/app/(main)/(routes)/forms/subprojects/table-columns"
import { DataTableV2 } from "@/app/(main)/_components/subprojects_list_filtered/data-table"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects"

export function SubProjectsForm() {

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

                <div className="flex">
                    <DataTableV2 data={SUB_PROJECTS} columns={subprojectColumns} />
                </div>

            </div>
        </>
    )
}