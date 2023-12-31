import { cn } from "@/src/lib/utils"

import { Button, buttonVariants } from "@/src/components/ui/button"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import { UserItem } from "./user-item"
import { DocumentList } from "./document-list"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useRef } from "react"

import { useCycle } from "framer-motion"


interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function Sidebar({ className, items, ...props }: SidebarProps) {

    // variables  
    const pathname = usePathname()
    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true)


    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">


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

                                <Button asChild variant="secondary" className="w-full justify-start hover:bg-transparent">

                                    <Link href={item.href}>{item.title}</Link>

                                </Button>
                            </div>
                        ))}
                    </nav>

                    <div className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            Library
                        </h2>

                        <div className="mt-4">
                            <DocumentList />
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

