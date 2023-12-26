"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your ideas, Documents and Plans unified. Welcome to <span
                    className="underline">Simplcyti</span>
            </h1>

            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Simplicyti is the connected workspace where better , faster work happens
            </h3>

            <Button className="h-8 s w-30 ml-2">
                Enter Simplicity <ArrowRight />
            </Button>
        </div>
    );
}

export default Heading;