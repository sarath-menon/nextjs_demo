import React from "react";

interface TitleSectionProps {
    title: string;
    subheading?: string;
    pill: string;
}


const TitleSection: React.FC<TitleSectionProps> = ({ title, subheading, pill }) => {
    return (

        <React.Fragment>
            <section className="flex flex-col gap-4 justify-center md:items-center mb-6">
                <article className="rounded-full p-[1px] text-base dark:bg-gradient-to-r dark:from-brand/primaryPurple dark:to-brand/primaryBlue">
                    <div className="rounded-full px-4 py-2 dark:bg-black">
                        {pill}
                    </div>
                </article>

                {subheading ? (
                    <>
                        <h2 className="text-left text-3xl sm-text-5xl sm-max-w-[750px] md:text-center font-semibold">
                            {title}
                        </h2>

                        <p className="dark:text-washed-purple/washed-purple-700 sm:max-w-[450px] md-text-center"></p>

                    </>) : (
                    <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text:center font-semibold mt-6">
                        {title}
                    </h1>
                )}

            </section>
        </React.Fragment>
    );
}

export default TitleSection;