import { Separator } from "@/components/ui/separator"
import { Roadmap } from "./form"

export default function SettingsDisplayPage() {
    return (
        <div className="">

            {/* Top heading */}
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Roadmap</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator className="my-6" />


            <div className="space-y-6">
                <h3 className="text-lg font-medium">Display</h3>
                <p className="text-sm text-muted-foreground">
                    Turn items on or off to control what&apos;s displayed in the app.
                </p>
            </div>
            <Separator />
            <Roadmap />
        </div>
    )
}