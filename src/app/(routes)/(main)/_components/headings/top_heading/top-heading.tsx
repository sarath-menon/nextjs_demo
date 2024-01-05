

export function TopHeading(props: any) {
    return (

        < div className="" >
            <h2 className="text-5xl my-4">
                {props.heading}
            </h2>
            <p className="text-muted">
                {props.subheading}
            </p>
        </div >

    )

};