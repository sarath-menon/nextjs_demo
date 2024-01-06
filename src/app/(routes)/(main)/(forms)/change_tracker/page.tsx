import { Separator } from "@/src/components/ui/separator"
import { Financial } from "./form"
import { SubHeading, TopHeading } from "../../_components/headings/page-style"
import { DataTableV1 } from "../../_components/datatable_v1/data-table"
import { TASKS } from "../../data/tasks"
import { taskColumns } from "./table-columns"

export default function FinancialPage() {
    return (
        <div className="">

            <div className="">

                <TopHeading
                    heading="Change tracker"
                    text="Generate presentations and reports automatically" />

                <div className="mx-6 my-12">

                    {/* <div className="my-6">
                    <SubHeading
                        subheading="Change tracker"
                        text="Keep track of all changes since project inception" />
                    </div> */}

                    {/* Datatable V1 */}
                    <div className="flex ">
                        <DataTableV1 data={TASKS} columns={taskColumns} />
                    </div>

                </div>


            </div>

        </div>
    )
}