"use client"

import { Button } from "@/src/components/ui/button"
import Image from "next/image"
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { update } from "@/convex/documents";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Requirements } from "./form"
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { DashboardCard } from "@/src/app/(routes)/(main)/_components/dashboard-card";


const DocumentsPage = () => {

    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" })
        // .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    };

    if (document === null) {
        return <div>Not found</div>
    }

    return (
        <>
            {/* Top heading */}
            <div className="">
                <h2 className="text-5xl my-4">
                    Project Home
                </h2>
                <p className="text-muted">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>

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

export default DocumentsPage;