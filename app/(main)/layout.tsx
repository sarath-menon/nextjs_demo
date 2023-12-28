"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/notion_clone/navigation";
import { Sidebar } from "./_components/sidebar";
import { playlists } from "./data/playlists"


const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return (
        <div className="h-full flex">

            {/* Notion sidebar (complicated) */}
            {/* <Navigation /> */}


            {/* Notion sidebar (complicated) */}
            <div className="border-r flex bg-background pr-1 w-[240px]">
                <Sidebar playlists={playlists} className="" />
            </div>

            {/* Shad-cn sidebar (simple) */}
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;

