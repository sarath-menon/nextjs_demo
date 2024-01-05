

export function TopHeading(props: any) {
    return (

        < div className="" >
            <h2 className="text-5xl my-4">
                {props.heading}
            </h2>

            <p className="brightness-50 text-lg">
                {props.text}
            </p>
        </div >

    )

};

export function SubHeading(props: any) {
    return (

        <div>
            <h2 className="text-3xl tracking-tight">
                {props.subheading}
            </h2>

            <p className="brightness-50 text-base mt-4">
                {props.text}
            </p>
        </div>


    )
};

