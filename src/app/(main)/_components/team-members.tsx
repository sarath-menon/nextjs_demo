import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/src/components/ui/avatar"

import { Button } from "@/src/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/src/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/src/components/ui/popover"

export function TeamMembersList() {
    return (
        <Card>

            {/* Heading and description */}
            <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                    Invite your team members to collaborate.
                </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6">

                {/* Team member 1 */}
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>

                        {/* Name and email */}
                        <div>
                            <p className="text-sm font-medium leading-none">Di Selva</p>
                            <p className="text-sm text-muted-foreground">selva@ethz.ch</p>
                        </div>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Owner{" "}
                                <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="end">
                            <Command>
                                <CommandInput placeholder="Select new role..." />
                                <CommandList>
                                    <CommandEmpty>No roles found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Viewer</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view and comment.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Developer</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view, comment and edit.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Billing</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view, comment and manage billing.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Owner</p>
                                            <p className="text-sm text-muted-foreground">
                                                Admin-level access to all resources.
                                            </p>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>


                {/* Team member 2 */}
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/avatars/02.png" />
                            <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">Jackson Lee</p>
                            <p className="text-sm text-muted-foreground">lee@ethz.ch</p>
                        </div>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Member{" "}
                                <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="end">
                            <Command>
                                <CommandInput placeholder="Select new role..." />
                                <CommandList>
                                    <CommandEmpty>No roles found.</CommandEmpty>
                                    <CommandGroup className="p-1.5">
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Viewer</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view and comment.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Developer</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view, comment and edit.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Billing</p>
                                            <p className="text-sm text-muted-foreground">
                                                Can view, comment and manage billing.
                                            </p>
                                        </CommandItem>
                                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                            <p>Owner</p>
                                            <p className="text-sm text-muted-foreground">
                                                Admin-level access to all resources.
                                            </p>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </CardContent>
        </Card>
    )
}