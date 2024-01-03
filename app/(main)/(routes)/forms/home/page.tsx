"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { update } from "@/convex/documents";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Requirements } from "./form"
import React from "react";


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
        <div className="">

            {/* Top heading */}
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">
                    Project Home
                </h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator className="my-6" />

            <Requirements />

        </div>

    );
}

export default DocumentsPage;