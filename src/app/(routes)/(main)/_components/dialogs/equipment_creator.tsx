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

                    <Select defaultValue="fabrication">
                        <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="team">Fabrication</SelectItem>
                            <SelectItem value="billing">Real world testing</SelectItem>
                            <SelectItem value="account">Logistics</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <DialogElement
                title="Challenge"
                custom_section={TiptapEntry}
                placeholder={"what challenges do you expect ?"}
            />

            <DialogElement
                title="Mitigation"
                custom_section={TiptapEntry}
                placeholder={"why solution do you have in mind ?"}
            />
        </>
    )
}


export function CreateEquipmentDialog() {
    return (

        <DialogSkeleton
            button_text="Add new"
            title="Add new equipment"
            description=""
            custom_section={customSection}
        />
    )
}