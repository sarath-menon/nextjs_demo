"use client"

import { Editor } from "@tiptap/react"

import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2
} from "lucide-react"

import { Toggle } from "@/src/components/ui/toggle"
import { FontBoldIcon } from "@radix-ui/react-icons"


type Props = {
    editor: Editor | null
}

export function TipTapToolbar({ editor }: Props) {

    if (!editor) {
        return null
    }

    return (

        <div className="border border-input bg-transparent">

            <Toggle aria-label="Toggle italic">
                <FontBoldIcon className="h-4 w-4" />
            </Toggle>


            {/* Heading */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>

            {/* Bold */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="h-4 w-4" />
            </Toggle>


            {/* Italic */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className="h-4 w-4" />
            </Toggle>



        </div >
    )
}