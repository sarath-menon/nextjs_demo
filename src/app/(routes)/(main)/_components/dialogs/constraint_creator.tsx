import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { TiptapEntry } from "../text-editors/tiptap/tiptap-editor"
import { DialogElement, DialogSkeleton } from "./dialog-skeleton"

function customSection() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4">

                {/* Requirement nature */}
                <div className="grid gap-2">
                    <Label htmlFor="area" className="text-lg">
                        Nature
                    </Label>

                    <Select defaultValue="budget">
                        <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="regulatory">Regulatory</SelectItem>
                            <SelectItem value="budget">Budget</SelectItem>
                            <SelectItem value="schedule">Schedule</SelectItem>
                            <SelectItem value="ethical">Ethical</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DialogElement
                title="Description"
                custom_section={TiptapEntry}
                placeholder={"what's the limiting factor ?"}
            />
        </>
    )
}


export function CreateConstraintDialog() {
    return (

        <DialogSkeleton
            button_text="Add new"
            title="Add new constraint"
            description="Limiting factors"
            custom_section={customSection}
        />
    )
}