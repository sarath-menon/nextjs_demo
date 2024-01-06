"use client"

import { TopHeading } from "../../_components/headings/page-style";
import { SubProjectsForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            <TopHeading
                heading="Subprojects"
                text=" Manage your subprojects here" />

            <SubProjectsForm />

        </div>

    );
}

export default DocumentsPage;