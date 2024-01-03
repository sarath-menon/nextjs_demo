"use client"

import { SubProject } from "@/app/(main)/_components/subprojects_list/subprojects"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects"

export function TeamForm() {

    return (

        <div>
            {/* Subprojects list */}
            <div className="my-6">
                <h3 className="text-3xl font-medium">
                    List
                </h3>
                <div className="flex">
                    <SubProject
                        mails={SUB_PROJECTS}
                    />
                </div>
            </div>

        </div >
    )
}