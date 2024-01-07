import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table"

import { Checkbox } from "@/src/components/ui/checkbox"

export function TableTimeline() {

    return (
        <div className="py-4 w-[500px]">
            <Table className="text-base">
                <TableCaption>Timeline</TableCaption>
                <TableHeader className="text-lg">
                    <TableRow>
                        <TableHead className="">Month</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Deliverable</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow>
                        <TableCell>June</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Eagle Inspired Grasping</TableCell>
                        <TableCell className="text-center">
                            <Checkbox id="terms" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>June</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Eagle Inspired Grasping</TableCell>
                        <TableCell className="text-center">
                            <Checkbox id="terms" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>June</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Eagle Inspired Grasping</TableCell>
                        <TableCell className="text-center">
                            <Checkbox id="terms" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>June</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Eagle Inspired Grasping</TableCell>
                        <TableCell className="text-center">
                            <Checkbox id="terms" />
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}