'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapToolbar } from './tiptap-toolbar'

import { Heading } from '@tiptap/extension-heading'
import { BulletList } from '@tiptap/extension-bullet-list'
import { Placeholder } from '@tiptap/extension-placeholder'
import React from 'react'

// Define the prop types for the component
interface MyComponentProps {
    placeholder: string
};

export const TiptapEntry: React.FC<MyComponentProps> = ({ placeholder }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },

            }),
            Heading.configure({
                HTMLAttributes: {
                    class: "text-xl font-bold",
                    levels: [2],
                }
            }),

            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc pl-4',
                }
            }),

            Placeholder.configure({
                placeholder: placeholder
            }),

        ],
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
