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

                    <Select defaultValue="billing">
                        <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="team">Regulatory</SelectItem>
                            <SelectItem value="billing">Budget</SelectItem>
                            <SelectItem value="billing">Schedule</SelectItem>
                            <SelectItem value="account">Ethical</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DialogElement
                title="Description"
                custom_section={TiptapEntry}
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