import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { TiptapEntry } from "../text-editors/tiptap/tiptap-editor"
import { DialogElement, DialogSkeleton } from "./dialog-skeleton"
import { CalendarDateRangePicker } from "../date-range-picker"

function customSection() {
    return (
        <>

            <div className="flex  ">
                <CalendarDateRangePicker />
            </div>


            <DialogElement
                title="Achievements"
                custom_section={TiptapEntry}
                placeholder={""}
            />

            <DialogElement
                title="Hurdles"
                custom_section={TiptapEntry}
                placeholder={""}
            />

            <DialogElement
                title="Questions"
                custom_section={TiptapEntry}
                placeholder={""}
            />

        </>
    )
}


export function CreateWeeklyUpdateDialog() {
    return (

        <DialogSkeleton
            button_text="Add new"
            title="Add new update"
            description=""
            custom_section={customSection}
        />
    )
}