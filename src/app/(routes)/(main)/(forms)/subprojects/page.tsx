"use client"

import { TopHeading } from "../../_components/headings/top_heading/top-heading";
import { SubProjectsForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            <TopHeading
                heading="Subprojects"
                subheading=" Manage your account settings and set e-mail preferences." />

            <SubProjectsForm />

        </div>

    );
}

export default DocumentsPage;