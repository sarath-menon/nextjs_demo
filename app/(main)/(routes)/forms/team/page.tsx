"use client"

import { TeamForm } from "./form"
import React from "react";


const DocumentsPage = () => {

    return (
        <div className="">

            {/* Top heading */}
            <div className="">
                <h2 className="text-5xl my-4">
                    Team
                </h2>
                <p className="text-muted">
                    Manage your team here
                </p>
            </div>

            <TeamForm />

        </div>

    );
}

export default DocumentsPage;