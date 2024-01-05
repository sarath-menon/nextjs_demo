'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapToolbar } from './tiptap-toolbar'

import { Toggle } from '@/src/components/ui/toggle'

export function TiptapEntry() {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: "Enter description",
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] border-input bg-back"
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
