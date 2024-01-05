"use client";

import { ModeToggle } from "@/src/components/mode-toggle";
import { Logo } from "@/src/app/(landing)/_componets/logo";
import { useScrollTop } from "@/src/hooks/use-scroll-top";
import { cn } from "@/src/lib/utils";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "bg-background fixed flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>

            <Logo />

            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton
                            mode="modal"
                            afterSignInUrl="/forms/home"
                        >
                            <Button variant={"ghost"} size={"sm"}>
                                Login
                            </Button>
                        </SignInButton>

                        {/* 
                        <SignInButton mode="modal">
                            <Button size={"sm"}>
                                Get Simplicyti free
                            </Button>
                        </SignInButton> */}
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant={"ghost"} size="sm" asChild>
                            <Link href="/forms/home">
                                Enter Simplicyti
                            </Link>
                        </Button>

                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )}

                <ModeToggle />
            </div>
        </div>
    )
} 