"use client";

import { cn } from "@/src/lib/utils";
import { ChevronsLeft, MenuIcon, PlusCircle, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts"
import { UserItem } from "./user-item";
import { Item } from "./item";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { DocumentList } from "./document-list";
import { Button } from "@/src/components/ui/button";
import Link from "next/link"
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/src/components/ui/input";

import { ChevronsUpDown, Plus, X } from "lucide-react"
import * as React from "react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/src/components/ui/collapsible"

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export const GitNavigation = ({ className, items, ...props }: SidebarProps) => {

    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const create = useMutation(api.documents.create);

    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

    // changes menu
    const [isOpen, setIsOpen] = React.useState(false)

    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            collapse();
        }
    }, [pathname, isMobile]);


    // callback function for mouse down
    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    }

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = event.clientX;

        // set max and min width for navbar
        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        // apply properties
        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.setProperty("left", `${newWidth}px`);
            navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100% - 240px)"
            );
            navbarRef.current.style.setProperty(
                "left",
                isMobile ? "100%" : "240px"
            );
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    }

    const handleCreate = () => {
        const promise = create({ title: "Untitled" })
        // .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    };

    return (
        <>

            <div className="mx-2 mb-2">
                Source Control
            </div>

            {/* Width: width of sidebar */}
            <aside

                ref={sidebarRef}

                className={cn(
                    "group/sidebar h-full bg-dark/dark-11 overflow-y-auto relative flex w-60 flex-col z-[9999]",

                    isResetting && "transition-all ease-in-out duration-300",

                    // Set sidebar width to 0 if mobile
                    isMobile && "w-0"
                )}>



                {/* Menu items */}
                <div className="space-y-2">


                    {/* To enter commit msg */}
                    <Input placeholder="Message" />


                    <Button className="w-full text">
                        Commit
                    </Button>

                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className=""
                    >
                        <div className="flex items-center justify-start">

                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    <ChevronsUpDown className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>

                            <div className="text-sm">
                                Changes
                            </div>

                        </div>

                        <CollapsibleContent className="space-y-2 pl-8 pb-2">

                            <div className="rounded-md border px-2 text-sm">
                                objectives
                            </div>

                            <div className="rounded-md border px-2 text-sm">
                                assumptions
                            </div>

                        </CollapsibleContent>
                    </Collapsible>

                </div>

                {/* sidebar dragger*/}
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className="opacity-0 group-hover/sidebar:opacity-100 translate cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />

            </aside >


            {/*  Make sure tha navbar position is in sync with the sidebar */}
            <div
                ref={navbarRef}
                onClick={resetWidth}
                className={cn("absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",

                    isResetting && "transition-all ease-in-out duration - 300",
                    isMobile && "left-0 w-full"

                )}>


                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && <MenuIcon className="h-6 w-6 text-muted-foreground" />}
                </nav>

            </div >
        </>
    )
}

