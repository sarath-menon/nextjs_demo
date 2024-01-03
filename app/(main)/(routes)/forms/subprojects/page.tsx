"use client"

import { SubProjectsForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            {/* Top heading */}
            <div className="">
                <h2 className="text-5xl my-4">
                    Subprojects
                </h2>
                <p className="text-muted">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>

            <SubProjectsForm />

        </div>

    );
}

export default DocumentsPage;