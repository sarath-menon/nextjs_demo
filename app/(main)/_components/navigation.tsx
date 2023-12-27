"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react"
import { usePathname } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts"

export const Navigation = () => {

    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

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

    return (
        <>
            {/* Width: width of sidebar */}
            <aside

                ref={sidebarRef}

                className={cn(
                    "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",

                    isResetting && "transition-all ease-in-out duration-300",

                    // Set sidebar width to 0 if mobile
                    isMobile && "w-0"

                )}>

                {/* Show sidebar collapse icon when hovering on navbar */}
                <div role="button"
                    className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",

                        // always show collapse icon on mobile
                        isMobile && "opacity-100"
                    )}>
                    <ChevronsLeft className="h-6 w-6 " />
                </div>

                {/* Menu items */}
                <div>
                    <p>Action Items</p>
                </div>

                <div className="mt-4">
                    <p>Documents</p>
                </div>

                {/* sidebar dragger*/}
                <div
                    onMouseDown={handleMouseDown}
                    onClick={() => { }}
                    className="opacity-0 group-hover/sidebar:opacity-100 translate cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />

            </aside >


            {/*  Make sure tha navbar position is in sync with the sidebar */}
            <div
                ref={navbarRef}
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

