"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/notion_clone/navigation";
import { Sidebar } from "./_components/sidebar";
import { playlists } from "./data/playlists"
import { Menu } from "./_components/menu";
import { Separator } from "@/components/ui/separator";


interface ObjectivesLayoutProps {
    children: React.ReactNode
}

const sidebarItems = [
    {
        title: "Profile",
        svg_link: "http://www.w3.org/2000/svg",
        href: "/examples/forms",
    },
    {
        title: "Account",
        svg_link: "http://www.w3.org/2000/svg",
        href: "/examples/forms/account",
    },
    {
        title: "Appearance",
        svg_link: "http://www.w3.org/2000/svg",
        href: "/examples/forms/appearance",
    },
    {
        title: "Notifications",
        svg_link: "http://www.w3.org/2000/svg",
        href: "/examples/forms/notifications",
    },
    {
        title: "Display",
        svg_link: "http://www.w3.org/2000/svg",
        href: "/examples/forms/display",
    },
]

export default function ObjectivesLayout({ children }: ObjectivesLayoutProps) {
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
        <div className="h-full bg-background flex">

            {/* Notion sidebar (complicated) */}
            {/* <Navigation /> */}


            {/* Shad-cn sidebar (simple) */}
            <div className="border-r flex pr-1 w-[240px]">
                <Sidebar items={sidebarItems} />
            </div>

            <div className=" flex flex-col">

                {/* Shad-cn menu */}
                <Menu />
                <div className="grid space-y-6 p-10 pb-16">

                    {/* Top heading */}
                    <div className="space-y-0.5">
                        <h2 className="text-2xl font-bold tracking-tight">Objectives</h2>
                        <p className="text-muted-foreground">
                            Manage your account settings and set e-mail preferences.
                        </p>
                    </div>
                    <Separator className="my-6" />


                    <main className="flex-1 h-full overflow-y-auto">
                        {children}
                    </main>

                </div>
            </div>
        </div >
    );
}

// export default MainLayout;

