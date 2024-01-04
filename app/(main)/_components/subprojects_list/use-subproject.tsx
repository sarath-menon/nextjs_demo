import { atom, useAtom } from "jotai"

import { SubProject, SUB_PROJECTS } from "@/app/(main)/data/subprojects"

type Config = {
    selected: SubProject["id"] | null
}

const configAtom = atom<Config>({
    selected: SUB_PROJECTS[0].id,
})

export function useSubProject() {
    return useAtom(configAtom)
}