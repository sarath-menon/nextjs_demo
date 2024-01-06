"use client"

import { Requirements } from "./form"
import React from "react";
import { DashboardCard } from "@/src/app/(routes)/(main)/_components/dashboard-card";
import { SubHeading, TopHeading } from "../../_components/headings/page-style";
import { KanbanBoard } from "../../_components/kanban_board_v2/KanbanBoard";


export const Page = () => {

    return (
        <>
            {/* Top heading */}
            <TopHeading
                heading="Flying carpet"
                text=" Manage your project here" />

            {/* Dashboard Cards row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 m-6">

                {/* Publications */}
                <DashboardCard
                    path="/icons/scholar.svg"
                    title="Publications"
                    metric="0"
                    subtitle="0 last year">
                </DashboardCard>

                {/* {Active projects} */}
                <DashboardCard
                    path="/icons/folder.svg"
                    title="Active projects"
                    metric="0"
                    subtitle="0 total">
                </DashboardCard>

                {/* Current members */}
                <DashboardCard
                    path="/icons/organization.svg"
                    title="Current members"
                    metric="0"
                    subtitle="0 since the start">
                </DashboardCard>

                {/* Money spent */}
                <DashboardCard
                    path="/icons/symbol-file.svg"
                    title=" Money spent"
                    metric="0"
                    subtitle="0 last month">
                </DashboardCard>
            </div>

            <div className="mx-6 py-2">
                <Requirements />

                <div className="my-6">
                    <SubHeading
                        subheading="Progress tracker"
                        text="Keep track of your progress here" />
                </div>

                <div className="mx-6 py-6">
                    <KanbanBoard />
                </div>
            </div>



        </>

    );
}

export default Page;