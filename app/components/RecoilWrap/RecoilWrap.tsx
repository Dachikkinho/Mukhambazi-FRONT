'use client'

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export function RecoilWrap(props: {children: ReactNode}) {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
} 