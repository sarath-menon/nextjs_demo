import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";

export function DashboardCard(props: any) {
    return (
        <>
            <Card className="border-2 bg-dark/dark-12">
                <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {props.title}
                    </CardTitle>

                    <div className="brightness-50">
                        <Image src={props.path} height={20} width={20} alt="" />
                    </div>

                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold py-1">
                        {props.metric}
                    </div>

                    <p className="text-sm brightness-50">
                        {props.subtitle}
                    </p>
                </CardContent>
            </Card>
        </>
    );
}

