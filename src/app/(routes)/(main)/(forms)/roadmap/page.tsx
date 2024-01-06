import { Separator } from "@/src/components/ui/separator"
import { Roadmap } from "./form"
import { SubHeading, TopHeading } from "../../_components/headings/page-style"
import { CreateObjectiveDialog } from "../../_components/dialogs/objective_creator"
import { CreateAssumptionDialog } from "../../_components/dialogs/assumption_creator"
import { CreateConstraintDialog } from "../../_components/dialogs/constraint_creator"
import { DataTableV1 } from "../../_components/datatable_v1/data-table"
import { TASKS } from "../../data/tasks"
import { taskColumns } from "../change_tracker/table-columns"

export default function SettingsDisplayPage() {
    return (
        <div className="">

            {/* Top heading */}
            <TopHeading
                heading="Eagle Inspired Grasping With a Fixed-Wing Drone"
                text="Master thesis" />

            <div className="mx-6 py-2">

                {/* Objectives */}
                <div className="my-6">

                    <SubHeading
                        subheading="Objectives"
                        text="" />

                    <div className="py-6">
                        {/* <DataTableV2 data={OBJECTIVES} columns={objectiveColumns} /> */}
                        <CreateObjectiveDialog />
                    </div>
                </div>


                {/* Assumption */}

                <div className="my-6">

                    <SubHeading
                        subheading="Assumptions"
                        text="" />

                    <div className="py-6">
                        <CreateAssumptionDialog />
                    </div>
                </div>

                {/* Constrains */}

                <div className="my-6">

                    <SubHeading
                        subheading="Constraints"
                        text="" />

                    <div className="py-6">
                        <CreateConstraintDialog />
                    </div>
                </div>


                <div className="my-6">
                    <SubHeading
                        subheading="Progress tracker"
                        text="Keep track of your progress here" />
                </div>


                <div className="flex my-8">
                    <Roadmap />
                </div>

            </div>
        </div>
    )
}