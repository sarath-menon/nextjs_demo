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


interface IconSidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        title: string
        href: string
        svg_path: string
    }[]
}

export function IconSidebar({ className, items, ...props }: IconSidebarProps) {

    // variables  
    const pathname = usePathname()
    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true)


    return (

        <div className=" py-6">

            <nav
                className={cn(
                    "flex flex-col space-y-3",
                    className
                )}
                {...props}
            >
                {items.map((item) => (
                    <div className="space-y-1">
                        <TooltipProvider>
                            <Tooltip delayDuration={300}  >
                                <TooltipTrigger asChild>
                                    <button >
                                        <div className="flex mx-3  items-center justify-center brightness-100 hover:brightness-200">

                                            <Link href={item.href}>
                                                <Image src={item.svg_path} height="30" width="30" alt="" />
                                            </Link>

                                        </div>
                                    </button>

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
    )
}

