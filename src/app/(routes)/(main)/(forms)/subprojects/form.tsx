"use client"

import { subprojectColumns } from "@/src/app/(routes)/(main)/(forms)/subprojects/table-columns"
import { DataTableV2 } from "@/src/app/(routes)/(main)/_components/datatable_v2/data-table"
import { SUB_PROJECTS } from "@/src/app/(routes)/(main)/data/subprojects"
import { SubHeading } from "../../_components/headings/page-style"

export function SubProjectsForm() {

    return (
        <div className="flex space-y-6 m-16 ">
            <div className="flex items-center justify-center">

                {/* <SubHeading
                        subheading="Subheading"
                        text="tasks for this month" /> */}

                <DataTableV2 data={SUB_PROJECTS} columns={subprojectColumns} />

            </div>
        </div>
    )
}