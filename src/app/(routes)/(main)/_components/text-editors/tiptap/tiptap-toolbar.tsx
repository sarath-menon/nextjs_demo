"use client"

import { Editor } from "@tiptap/react"

import {
    Heading2
} from "lucide-react"

import { Toggle } from "@/src/components/ui/toggle"

import {
    FontBoldIcon,
    FontItalicIcon,
    ListBulletIcon,
    UnderlineIcon,
} from "@radix-ui/react-icons"

import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/src/components/ui/toggle-group"

type Props = {
    editor: Editor | null
}

export function TipTapToolbar({ editor }: Props) {

    if (!editor) {
        return null
    }

    return (

        <div className="border border-input bg-transparent">

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
                <FontBoldIcon className="h-4 w-4" />
            </Toggle>


            {/* Italic */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <FontItalicIcon className="h-4 w-4" />
            </Toggle>


            {/* Underline */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("underline")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <UnderlineIcon className="h-4 w-4" />
            </Toggle>

            {/* Bullerlist */}
            <Toggle
                size={"sm"}
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <ListBulletIcon className="h-4 w-4" />
            </Toggle>


        </div >
    )
}