"use client"

import { TopHeading } from "../../_components/headings/page-style";
import { SubProjectsForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            <TopHeading
                heading="Subprojects"
                text=" Manage your account settings and set e-mail preferences." />

            <SubProjectsForm />

        </div>

    );
}

export default DocumentsPage;