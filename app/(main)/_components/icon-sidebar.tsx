import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useRef } from "react"

import { useCycle } from "framer-motion"
import { UserItem } from "./notion_clone/user-item"
import { DocumentList } from "./notion_clone/document-list"
import { Plus } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function IconSidebar({ className, items, ...props }: SidebarProps) {

    // variables  
    const pathname = usePathname()
    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true)


    return (
        <div className="space-y-4 py-4">

            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Discover
            </h2>

            <nav
                className={cn(
                    "flex flex-col  space-y-1",
                    className
                )}
                {...props}
            >
                {items.map((item) => (
                    <div className="space-y-1">

                        {/* <Button asChild variant="secondary" className="w-full justify-start hover:bg-transparent">
                            <Link href={item.href}>{item.title}</Link>
                        </Button> */}

                        <TooltipProvider>
                            <Tooltip delayDuration={150}>
                                <TooltipTrigger asChild>
                                    <button>
                                        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                                            <Plus
                                                className="group-hover:text-white transition text-emerald-500"
                                                size={25}
                                            />
                                        </div>
                                    </button>

                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>


                    </div>
                ))}
            </nav>
        </div>
    )
}

