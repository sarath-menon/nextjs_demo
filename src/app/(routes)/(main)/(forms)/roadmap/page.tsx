import { Separator } from "@/src/components/ui/separator"
import { Roadmap } from "./form"

export default function SettingsDisplayPage() {
    return (
        <div className="">

            {/* Top heading */}
            <div className="space-y-0.5 pb-10">
                <h2 className="text-2xl font-bold tracking-tight">Roadmap</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>

            <div className="flex">
                <Roadmap />
            </div>

        </div>
    )
}