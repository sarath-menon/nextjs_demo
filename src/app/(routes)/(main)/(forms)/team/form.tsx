"use client"

import { SubProject } from "@/app/(main)/_components/subprojects_list/subprojects"
import { TeamMembersList } from "@/src/app/(routes)/(main)/_components/team-members"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects_"

export function TeamForm() {

    return (

        <div>
            {/* Subprojects list */}
            <div className="my-6">
                <h3 className="text-3xl font-medium">
                    List
                </h3>
                <div className="flex">
                    <TeamMembersList />
                </div>
            </div>

        </div >
    )
}