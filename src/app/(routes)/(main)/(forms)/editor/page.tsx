
import { ReactFlowDemo } from "@/src/app/(routes)/(main)/_components/react_flow/simple_demo/app"
import { DragHandleFlow } from "@/src/app/(routes)/(main)/_components/react_flow/DragHandle/app"
import { EasyConnectExample } from "@/src/app/(routes)/(main)/_components/react_flow/EasyConnect/app"
import { NestedFlow } from "@/src/app/(routes)/(main)/_components/react_flow/NestedFlow/app"
import { StyledComponents } from "@/src/app/(routes)/(main)/_components/react_flow/StyledComponents/App"
import { TopHeading } from "../../_components/headings/page-style"



export default async function TaskPage() {
    return (
        <>
            <div className="">

                <TopHeading
                    heading="Editor"
                    text="Fantastic tools for analyzing robustness and reliability" />

                {/* React flow demo */}
                <div className=" h-[500px] rounded border-2 border-dark/dark-8 mt-12">
                    {/* <ReactFlowDemo /> */}
                    {/* <DragHandleFlow /> */}
                    {/* <EasyConnectExample /> */}
                    {/* <NestedFlow /> */}
                    <StyledComponents />
                </div>
            </div >
        </>
    )
}