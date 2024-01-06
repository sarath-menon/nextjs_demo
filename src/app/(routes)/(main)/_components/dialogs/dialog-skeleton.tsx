
import { Button } from "@/src/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog"

import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"

export function DialogSkeleton(props: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">
                    {props.button_text}
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[475px]">

                <DialogHeader>
                    <DialogTitle className="text-3xl">
                        {props.title}
                    </DialogTitle>

                    <DialogDescription className="text-base">
                        {props.description}
                    </DialogDescription>
                </DialogHeader>

                {props.custom_section()}

                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog >
    )
}

export function DialogElement(props: any) {

    return (
        <div className="grid gap-2 ">

            <Label className="text-lg">
                {props.title}
            </Label>

            {props.custom_section(props.placeholder)}

        </div>
    )

}