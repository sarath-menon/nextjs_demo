"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/src/components/ui/button"
import { CreateObjectiveDialog } from "@/src/app/(routes)/(main)/_components/dialogs/objective_creator"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"

import { Input } from "@/src/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"

import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { CreateAssumptionDialog } from "@/src/app/(routes)/(main)/_components/dialogs/assumption_creator"
import { CreateConstraintDialog } from "@/src/app/(routes)/(main)/_components/dialogs/constraint_creator"
import { OBJECTIVES } from "@/src/app/(routes)/(main)/data/objectives"
import { objectiveColumns } from "@/src/app/(routes)/(main)/(forms)/home/table-columns"

const profileFormSchema = z.object({
    type: z
        .string({
            required_error: "Please select a requirement type.",
        })
        .email(),

    description: z.string().max(160).min(10),

    rationale: z.string().max(160).min(10),

    test_procedure: z.string().max(160).min(10),

    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
})

type RequirementsValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<RequirementsValues> = {
    description: "Chopsticks as propellers",
    urls: [
        { value: "https://shadcn.com" },
        { value: "http://twitter.com/shadcn" },
    ],
}

export function Requirements() {

    const form = useForm<RequirementsValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
    })

    function onSubmit(data: RequirementsValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (

        <div className="">
            {/* Objectives */}
            <div className="my-6">
                <h3 className="text-3xl font-medium">
                    Objectives
                </h3>

                <div className="py-6">
                    {/* <DataTableV2 data={OBJECTIVES} columns={objectiveColumns} /> */}

                    <CreateObjectiveDialog />
                </div>
            </div>


            {/* Assumption */}

            <div className="my-6">
                <h3 className="text-3xl font-medium">
                    Assumptions
                </h3>

                <div className="py-6">
                    <CreateAssumptionDialog />
                </div>
            </div>

            {/* Constrains */}

            <div className="my-6">
                <h3 className="text-3xl font-medium">
                    Constraints
                </h3>

                <div className="py-6">
                    <CreateConstraintDialog />
                </div>
            </div>

        </div >
    )
}