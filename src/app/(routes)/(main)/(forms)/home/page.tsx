"use client"

import { Requirements } from "./form"
import React from "react";
import { DashboardCard } from "@/src/app/(routes)/(main)/_components/dashboard-card";
import { TopHeading } from "../../_components/headings/page-style";


export const Page = () => {

    return (
        <>
            {/* Top heading */}
            <TopHeading
                heading="Project Home"
                text=" Manage your account settings and set e-mail preferences." />

            {/* Dashboard Cards row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 m-6">

                {/* Publications */}
                <DashboardCard
                    path="/icons/symbol-file.svg"
                    title="Publications"
                    metric="12"
                    subtitle="4 last year">
                </DashboardCard>

                {/* {Active projects} */}
                <DashboardCard
                    path="/icons/symbol-file.svg"
                    title="Active projects"
                    metric="5"
                    subtitle="12 total">
                </DashboardCard>

                {/* Current members */}
                <DashboardCard
                    path="/icons/symbol-file.svg"
                    title="Current members"
                    metric="7"
                    subtitle="18 since the start">
                </DashboardCard>

                {/* Money spent */}
                <DashboardCard
                    path="/icons/symbol-file.svg"
                    title=" Money spent"
                    metric="$ 10,500"
                    subtitle=" $890 last month">
                </DashboardCard>
            </div>

            <div className="mx-6 py-2">
                <Requirements />
            </div>

        </>

    );
}

export default Page;