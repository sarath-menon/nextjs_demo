import { SubHeading, TopHeading } from "../../_components/headings/page-style"
import { CreateObjectiveDialog } from "../../_components/dialogs/objective_creator"
import { CreateAssumptionDialog } from "../../_components/dialogs/assumption_creator"
import { CreateConstraintDialog } from "../../_components/dialogs/constraint_creator"
import { TableTimeline } from "../../_components/timeline.tsx/table-timeline"
import { CreateChallengeDialog } from "../../_components/dialogs/challenge_creator"
import { CreateWeeklyUpdateDialog } from "../../_components/dialogs/weekly_update_creator"

export const Page = () => {
    return (
        <div className="mb-32">

            {/* Top heading */}
            <TopHeading
                heading="Eagle Inspired Grasping With a Fixed-Wing Drone"
                text="Master thesis" />



            <div className="mx-6 py-2">

                {/* <div className="my-6">
                    <SubHeading
                        subheading="Timeline"
                        text="" />
                </div> */}


                <div className="flex justify-center mt-4">
                    <TableTimeline />
                </div>

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
                        subheading="Challenges"
                        text="" />

                    <div className="py-6">
                        <CreateChallengeDialog />
                    </div>
                </div>


                <div className="my-6">
                    <SubHeading
                        subheading="Weekly updates"
                        text="" />


                    <CreateWeeklyUpdateDialog />
                </div>

            </div>


        </div>
    )
}

export default Page;