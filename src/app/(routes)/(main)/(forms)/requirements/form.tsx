"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/src/lib/utils"
import { Button } from "@/src/components/ui/button"
import { CreateReqDialog } from "@/src/app/(routes)/(main)/_components/dialogs/objective_creator"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"

import { Input } from "@/src/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"

import { Textarea } from "@/src/components/ui/textarea"
import { toast } from "@/src/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

const profileFormSchema = z.object({
    type: z
        .string({
            required_error: "Please select a requirement type.",
        })
        .email(),

    description: z.string().max(160).min(10),

    rationale: z.string().max(160).min(10),

    test_procedure: z.string().max(160).min(10),

    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
})

type RequirementsValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<RequirementsValues> = {
    description: "Chopsticks as propellers",
    urls: [
        { value: "https://shadcn.com" },
        { value: "http://twitter.com/shadcn" },
    ],
}

export function Requirements() {

    const form = useForm<RequirementsValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
    })

    function onSubmit(data: RequirementsValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (

        <div>

            {/* Tabs */}
            {/* <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <div>
                        selva
                    </div>


                </TabsContent>

                <TabsContent value="password">
                    <div>
                        selva2
                    </div>
                </TabsContent>

            </Tabs> */}

            {/* Create new requirement */}
            <div className="py-6">
                <CreateReqDialog />
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name. It can be your real name or a
                                    pseudonym. You can only change this once every 30 days.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    {/* Requirement type */}
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>

                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a requirement type" />
                                        </SelectTrigger>
                                    </FormControl>

                                    {/* List of type */}
                                    <SelectContent>
                                        <SelectItem value="functional">Functional</SelectItem>
                                        <SelectItem value="budget">Budget</SelectItem>
                                        <SelectItem value="regulatory">Regulatory</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can manage verified email addresses in your{" "}
                                    <Link href="/examples/forms">email settings</Link>.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>

                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    You can <span>@mention</span> other users and organizations to
                                    link to them.
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Rationale */}
                    <FormField
                        control={form.control}
                        name="rationale"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rationale</FormLabel>

                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    You can <span>@mention</span> other users and organizations to
                                    link to them.
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Test procedure */}
                    <FormField
                        control={form.control}
                        name="test_procedure"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Test procedure</FormLabel>

                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>

                                <FormDescription>
                                    You can <span>@mention</span> other users and organizations to
                                    link to them.
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <div>
                        {fields.map((field, index) => (
                            <FormField
                                control={form.control}
                                key={field.id}
                                name={`urls.${index}.value`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn(index !== 0 && "sr-only")}>
                                            URLs
                                        </FormLabel>
                                        <FormDescription className={cn(index !== 0 && "sr-only")}>
                                            Add links to your website, blog, or social media profiles.
                                        </FormDescription>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => append({ value: "" })}
                        >
                            Add URL
                        </Button>
                    </div>

                    <Button type="submit">Update profile</Button>
                </form>
            </Form>


        </div >
    )
}