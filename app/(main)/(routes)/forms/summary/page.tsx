import { Metadata } from "next"

import { taskColumns } from "./table-columns"
import { DataTableV1 } from "@/app/(main)/_components/datatable_v1/data-table"
import { TASKS } from "@/app/(main)/data/tasks"

import { ReactFlowDemo } from "@/app/(main)/_components/react_flow/simple_demo/app"
import { DragHandleFlow } from "@/app/(main)/_components/react_flow/DragHandle/app"
import { EasyConnectExample } from "@/app/(main)/_components/react_flow/EasyConnect/app"
import { NestedFlow } from "@/app/(main)/_components/react_flow/NestedFlow/app"
import { StyledComponents } from "@/app/(main)/_components/react_flow/StyledComponents/App"

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
                    <DataTableV1 data={TASKS} columns={taskColumns} />
                </div> */}

                <div className="bg-dark/dark-3 h-[500px]">
                    {/* <ReactFlowDemo /> */}
                    {/* <DragHandleFlow /> */}
                    {/* <EasyConnectExample /> */}
                    {/* <NestedFlow /> */}
                    <StyledComponents />
                </div>
            </div>
        </>
    )
}