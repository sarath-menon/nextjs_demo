"use client"

import { Button } from "@/components/ui/button";
import { Metadata } from "next"
import pptxgen from "pptxgenjs";

export const QTRS = ["Q1", "Q2", "Q3", "Q4"];

export const arrDataLineStat = [
    { name: "Red", labels: QTRS, values: [1, 3, 5, 7] },
    { name: "Yellow", labels: QTRS, values: [5, 26, 32, 30] },
    { name: "Green", labels: QTRS, values: [7, 52, 18, 67] },
    { name: "Complete", labels: QTRS, values: [3, 5, 17, 1] },
];

function generate_ppt() {

    let pptx = new pptxgen();
    let slide = pptx.addSlide();

    slide.addText(
        "React Demo!",
        { x: 1, y: 0.5, w: '80%', h: 1, fontSize: 36, align: 'center', fill: { color: 'D3E3F3' }, color: '008899' }
    );

    slide.addChart(
        pptx.ChartType.line, arrDataLineStat, { x: 1.0, y: 1.9, w: 8, h: 3 }
    );

    slide.addText(
        "PpptxGenJS version:",
        { x: 0, y: 5.3, w: '100%', h: 0.33, align: 'center', fill: { color: 'E1E1E1' }, color: 'A1A1A1' }
    );

    pptx.writeFile({ fileName: 'pptxgenjs-demo-react.pptx' });

}

export default function TaskPage() {

    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                </div>

                <Button onClick={generate_ppt}>
                    Create PPT
                </Button>


            </div>
        </>
    )
}