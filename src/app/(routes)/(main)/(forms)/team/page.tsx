"use client"

import { TopHeading } from "../../_components/headings/top_heading/top-heading";
import { TeamForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            <TopHeading
                heading="Team"
                subheading="Manage your team here" />

            <TeamForm />

        </div>

    );
}

export default DocumentsPage;