"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/src/components/ui/button"
import { CreateObjectiveDialog } from "@/src/app/(routes)/(main)/_components/dialogs/objective_creator"


import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { CreateAssumptionDialog } from "@/src/app/(routes)/(main)/_components/dialogs/assumption_creator"
import { CreateConstraintDialog } from "@/src/app/(routes)/(main)/_components/dialogs/constraint_creator"
import { OBJECTIVES } from "@/src/app/(routes)/(main)/data/objectives"
import { objectiveColumns } from "@/src/app/(routes)/(main)/(forms)/home/table-columns"
import { SubHeading } from "../../../_components/headings/page-style"
import { DataTableV2 } from "../../../_components/datatable_v2/data-table"
import { SUB_PROJECTS } from "../../../data/subprojects"
import { subprojectColumns } from "../../subprojects/table-columns"


export function Requirements() {

    return (

        <div className="">

            {/* Objectives */}
            <div className="my-6">
                {/* <h3 className="text-3xl font-medium">
                    Objectives
                </h3> */}

                <SubHeading
                    subheading="Objectives"
                    text="" />

                <div className="flex">
                    <DataTableV2 data={SUB_PROJECTS} columns={subprojectColumns} />
                </div>


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

        </div >
    )
}