
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
import { TiptapEntry } from "../text-editors/tiptap/tiptap-editor"

export function DialogSkeleton(props: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex flex-col items-center mt-8 mb-4">
                    <Button variant="secondary" className="w-48">
                        {props.button_text}
                    </Button>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[475px] shadow-lg shadow-slate-800">

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

// Define the prop types for the component
interface MyComponentProps {
    custom_section: Function;
    title: string;
    placeholder: string
};

export const DialogElement: React.FC<MyComponentProps> = ({ custom_section, title, placeholder }) => {

    return (
        <div className="mt-2">

            <Label className="text-lg">
                {title}
            </Label>

            {/* {custom_section(placeholder)} */}

            <TiptapEntry placeholder={placeholder} />

        </div>
    )
};