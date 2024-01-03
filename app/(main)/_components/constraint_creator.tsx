import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreateConstraintDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">
                    Add new constraint
                </Button>

            </DialogTrigger>

            <DialogContent className="sm:max-w-[475px]">

                <DialogHeader>
                    <DialogTitle>
                        Add new constraint
                    </DialogTitle>

                    <DialogDescription>
                        This will save the current playground state as a preset which you
                        can access later or share with others.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4">

                    {/* Requirement nature */}
                    <div className="grid gap-2">
                        <Label htmlFor="area">Nature</Label>

                        <Select defaultValue="billing">
                            <SelectTrigger id="area">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="team">Scientific question</SelectItem>
                                <SelectItem value="billing">Engineering goal</SelectItem>
                                <SelectItem value="account">Mixed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    {/* Requirement type */}
                    <div className="grid gap-2">
                        <Label htmlFor="area">Area</Label>
                        <Select defaultValue="billing">
                            <SelectTrigger id="area">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="team">Functional</SelectItem>
                                <SelectItem value="billing">Financial</SelectItem>
                                <SelectItem value="account">Regulatory</SelectItem>
                                <SelectItem value="deployments">Performance</SelectItem>
                                <SelectItem value="support">Environment</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid gap-4 py-4">

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Rationale</Label>
                        <Input id="name" autoFocus />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">How to test</Label>
                        <Input id="name" autoFocus />
                    </div>

                </div>

                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog >
    )
}