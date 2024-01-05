'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapToolbar } from './tiptap-toolbar'

import { Toggle } from '@/src/components/ui/toggle'
import { Heading } from '@tiptap/extension-heading'

export function TiptapEntry() {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({

            }),
            Heading.configure({
                HTMLAttributes: {
                    class: "text-xl font-bold",
                    levels: [2],
                }
            }
            )],
        content: "",
        editorProps: {
            attributes: {
                class: "p-2 text-sm rounded-md border min-h-10 border-input bg-back"
            }
        }
    })

    return (
        <>
            <TipTapToolbar editor={editor} />
            <EditorContent editor={editor} />

        </>
    )
}
