"use client"

import { TopHeading } from "../../_components/headings/page-style";
import { TeamForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            <TopHeading
                heading="Team"
                text="Manage your team here" />

            <TeamForm />

        </div>

    );
}

export default DocumentsPage;