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
                            <SelectItem value="team">Scientific question</SelectItem>
                            <SelectItem value="billing">Engineering goal</SelectItem>
                            <SelectItem value="account">Mixed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DialogElement
                title="Description"
                custom_section={TiptapEntry}
            />

            <DialogElement
                title="Rationale"
                custom_section={TiptapEntry}
            />

            <DialogElement
                title="How to test"
                custom_section={TiptapEntry}
            />
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