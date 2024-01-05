import { Metadata } from "next"

import { taskColumns } from "./table-columns"
import { DataTableV1 } from "@/src/app/(routes)/(main)/_components/datatable_v1/data-table"
import { TASKS } from "@/src/app/(routes)/(main)/data/tasks"

import { ReactFlowDemo } from "@/src/app/(routes)/(main)/_components/react_flow/simple_demo/app"
import { DragHandleFlow } from "@/src/app/(routes)/(main)/_components/react_flow/DragHandle/app"
import { EasyConnectExample } from "@/src/app/(routes)/(main)/_components/react_flow/EasyConnect/app"
import { NestedFlow } from "@/src/app/(routes)/(main)/_components/react_flow/NestedFlow/app"
import { StyledComponents } from "@/src/app/(routes)/(main)/_components/react_flow/StyledComponents/App"

import { Editor } from "../../_components/text-editors/lexical/lexical-editor"
import Tiptap from "../../_components/text-editors/tiptap/tiptap-editor"

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

                {/* Datatable V1 */}
                {/* <div className="flex">
                    <DataTableV1 data={TASKS} columns={taskColumns} />
                </div> */}

                {/* React flow demo */}
                <div className=" h-[500px] rounded border-2 border-dark/dark-8">
                    {/* <ReactFlowDemo /> */}
                    {/* <DragHandleFlow /> */}
                    {/* <EasyConnectExample /> */}
                    {/* <NestedFlow /> */}
                    <StyledComponents />
                </div>

                <div className="">
                    <Tiptap />
                </div>
            </div >
        </>
    )
}