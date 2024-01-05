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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { TiptapEntry } from "../text-editors/tiptap/tiptap-editor"
import { DialogSkeleton } from "./dialog-skeleton"

function customSection() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">

                {/* Requirement nature */}
                <div className="grid gap-2">
                    <Label htmlFor="area" className="text-lg">
                        Nature
                    </Label>

                    <Select defaultValue="billing">
                        <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="team">Scientific question</SelectItem>
                            <SelectItem value="billing">Engineering goal</SelectItem>
                            <SelectItem value="account">Mixed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <TiptapEntry />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="name">Rationale</Label>
                <Input id="name" autoFocus />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="name">How to test</Label>
                <Input id="name" autoFocus />
            </div>
        </>
    )
}


export function CreateObjectiveDialog() {
    return (

        <DialogSkeleton
            button_text="Add new"
            title="Add new objective"
            description="This will save the current playground state as a preset which you can access later or share with others."
            custom_section={customSection}
        />
    )
}