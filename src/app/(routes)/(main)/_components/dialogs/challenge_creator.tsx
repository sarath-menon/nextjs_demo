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
                            <SelectItem value="team">Modelling</SelectItem>
                            <SelectItem value="billing">Environment</SelectItem>
                            <SelectItem value="account">Feasibility</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DialogElement
                title="Description"
                custom_section={TiptapEntry}
                placeholder={"what's the assumption?"}
            />

            <DialogElement
                title="Rationale"
                custom_section={TiptapEntry}
                placeholder={"why do you think so ?"}
            />
        </>
    )
}


export function CreateChallengeDialog() {
    return (

        <DialogSkeleton
            button_text="Add new"
            title="Add new challenge"
            description=""
            custom_section={customSection}
        />
    )
}