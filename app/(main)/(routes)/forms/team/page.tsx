import { Separator } from "@/components/ui/separator"
import { Team } from "./form"

export default function SettingsAccountPage() {
    return (
        <div className="">

            {/* Top heading */}
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Team</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator className="my-6" />


            <div className="space-y-6">
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">
                    Update your account settings. Set your preferred language and
                    timezone.
                </p>
            </div>
            <Separator />
            <Team />
        </div>
    )
}