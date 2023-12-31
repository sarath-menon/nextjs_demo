import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Playlist } from "../data/playlists"
import { UserItem } from "./notion_clone/user-item"
import { DocumentList } from "./notion_clone/document-list"
import Link from "next/link"
import { usePathname } from "next/navigation"

// interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
//     playlists: Playlist[]
// }

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function Sidebar({ className, items, ...props }: SidebarProps) {

    const pathname = usePathname()

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">

                    {/* Github user tag */}
                    <div className="py-4">
                        <UserItem />
                    </div>


                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>

                    <div className="space-y-1">
                        <Button variant="secondary" className="w-full justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            Listen Now
                        </Button>
                    </div>

                    <nav
                        className={cn(
                            "flex space-x-2 flex-col  space-y-1",
                            className
                        )}
                        {...props}
                    >
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    pathname === item.href
                                        ? "bg-muted hover:bg-muted"
                                        : "hover:bg-transparent hover:underline",
                                    "justify-start"
                                )}
                            >
                                {item.title}
                            </Link>
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

