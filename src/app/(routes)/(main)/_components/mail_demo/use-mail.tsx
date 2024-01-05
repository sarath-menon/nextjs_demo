import { atom, useAtom } from "jotai"

import { Mail, mails } from "@/src/app/(routes)/(main)/data/mail"

type Config = {
    selected: Mail["id"] | null
}

const configAtom = atom<Config>({
    selected: mails[0].id,
})

export function useMail() {
    return useAtom(configAtom)
}