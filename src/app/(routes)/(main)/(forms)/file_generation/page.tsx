"use client"

import { Button } from "@/src/components/ui/button";
import ReactPDF, { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import pptxgen from "pptxgenjs";
import { SubHeading, TopHeading } from "../../_components/headings/page-style";
import { CreateObjectiveDialog } from "../../_components/dialogs/objective_creator";

export const QTRS = ["Q1", "Q2", "Q3", "Q4"];

export const arrDataLineStat = [
    { name: "Red", labels: QTRS, values: [1, 3, 5, 7] },
    { name: "Yellow", labels: QTRS, values: [5, 26, 32, 30] },
    { name: "Green", labels: QTRS, values: [7, 52, 18, 67] },
    { name: "Complete", labels: QTRS, values: [3, 5, 17, 1] },
];

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

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


function generate_pdf() {
    ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
}

export default function TaskPage() {

    return (
        <>
            <div className="">


                <TopHeading
                    heading="File generator"
                    text="Generate presentations and reports automatically" />



                <div className="mx-6 py-2">

                    {/* slides*/}
                    <div className="my-6">

                        <SubHeading
                            subheading="Slides"
                            text="" />

                        <div className="py-6">
                            <Button variant={"secondary"} onClick={generate_ppt}>
                                Download
                            </Button>
                        </div>
                    </div>

                    {/* pdf report*/}
                    <div className="my-6">

                        <SubHeading
                            subheading="Proposal PDF"
                            text="" />

                        <div className="py-6">
                            {/* Need to clik on the text ! */}
                            <Button variant={"secondary"} >
                                <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
                                    {({ blob, url, loading, error }) =>
                                        loading ? 'Loading document...' : 'Download'
                                    }
                                </PDFDownloadLink>
                            </Button>
                        </div>
                    </div>

                </div>

                {/* 
                <PDFViewer>
                    <MyDocument />
                </PDFViewer> */}


            </div>
        </>
    )
}

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);