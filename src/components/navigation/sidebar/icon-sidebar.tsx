import { cn } from "@/src/lib/utils"

import { Button, buttonVariants } from "@/src/components/ui/button"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { createContext, useRef, useState } from "react"

import { useCycle } from "framer-motion"
import { UserItem } from "./notion_clone/user-item"
import { DocumentList } from "./notion_clone/document-list"
import { ChevronFirst, ChevronLast, Plus } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/src/components/ui/tooltip"
import { Sidebar } from "./notion_clone/sidebar"
import { SIDEBAR_ITEMS } from "@/src/lib/constants"
import { GitNavigation } from "./notion_clone/git-navigation"


interface IconSidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        title: string
        href: string
        svg_path: string
    }[]
}

function log_msg() {
    console.log("selva")
}


export function IconSidebar({ className, items, ...props }: IconSidebarProps) {

    // variables  
    const pathname = usePathname()
    const containerRef = useRef(null);

    const [isExpanded, setExpanded] = useState(true)


    return (

        <div className="flex py-6">

            <div className="fixed">
                <nav
                    className={cn(
                        "flex flex-col space-y-3",
                        className
                    )}
                    {...props}
                >
                    {items.map((item) => (
                        <div className="">
                            <TooltipProvider>
                                <Tooltip delayDuration={300}  >
                                    <TooltipTrigger asChild>
                                        {/* <button onClick={() => setExpanded(!isExpanded)} > */}

                                        {/* If icon is change log, collapsible menu */}
                                        {item.title == "Change log" ? (

                                            <button onClick={() => setExpanded(!isExpanded)}>
                                                <div className="flex mx-3 my-1 items-center justify-center brightness-100 hover:brightness-200">
                                                    <Image src={item.svg_path} height="25" width="25" alt="" />
                                                </div>
                                            </button>

                                        ) : (

                                            <button>
                                                <div className="flex mx-3 my-1 items-center justify-center brightness-100 hover:brightness-200">
                                                    <Link href={item.href}>
                                                        <Image src={item.svg_path} height="25" width="25" alt="" />
                                                    </Link>
                                                </div>
                                            </button>

                                        )}


                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                    ))}

                </nav>
            </div>

            <div className="pl-14 ">
                <span>

                    {/* Shad-cn text sidebar  */}

                    <span> {isExpanded ?
                        <GitNavigation
                            items={SIDEBAR_ITEMS} />
                        : ""} </span>
                </span>
            </div>

        </div >
    )
}



