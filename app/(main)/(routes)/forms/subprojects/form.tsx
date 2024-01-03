"use client"

import { SubProject } from "@/app/(main)/_components/subprojects_list/subprojects"
import { SUB_PROJECTS } from "@/app/(main)/data/subprojects_"

export function SubProjectsForm() {

    return (

        <div>
            {/* Tabs */}
            {/* <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <div>
                        selva
                    </div>


                </TabsContent>

                <TabsContent value="password">
                    <div>
                        selva2
                    </div>
                </TabsContent>

            </Tabs> */}

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