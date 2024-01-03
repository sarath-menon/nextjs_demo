"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/notion_clone/navigation";
import { Sidebar } from "./_components/sidebar";
import { Menu } from "./_components/menu";
import { Separator } from "@/components/ui/separator";
import { ICON_SIDEBAR_ITEMS, SIDEBAR_ITEMS } from "@/lib/constants";
import TeamSwitcher from "./_components/project-switcher";
import { IconSidebar } from "./_components/icon-sidebar";
import { UserNav } from "./_components/user-nav";


interface ObjectivesLayoutProps {
    children: React.ReactNode
}


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


            {/* Shad-cn text sidebar  */}
            {/* <div className="border-r flex pr-1 w-[240px]">
                <Sidebar items={SIDEBAR_ITEMS} />
            </div> */}

            {/* Shad-cn icon sidebar*/}
            <div className="absolute h-full border-r flex">
                <IconSidebar items={ICON_SIDEBAR_ITEMS} />
            </div>

            <div className="justify-end flex-grow ">

                {/* top navbar */}
                <div className="flex items-center p-4 px-16">

                    {/* Dropdown menu */}
                    <Menu />

                    {/* Team switcher  */}
                    <div className="flex w-full justify-end">
                        <TeamSwitcher />
                    </div>

                    {/* User icon */}
                    <div className="flex items-center mx-16">
                        <UserNav />
                    </div>

                </div>


                <div className="grid mx-[200px] my-16">

                    <main className="flex-1 h-full overflow-y-auto">
                        {children}
                    </main>

                </div>
            </div>
        </div >
    );
}


// export default MainLayout;

