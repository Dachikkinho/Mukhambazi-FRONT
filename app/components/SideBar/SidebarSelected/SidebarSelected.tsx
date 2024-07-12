'use client'
import styles from "./SidebarSelected.module.scss"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function SidebarSelected() {

    const path = usePathname();
    const [position, setPosition] = useState("179px");

    useEffect(() => {
        switch (path) {
            case "/":
                setPosition("179px");
                break;
            case "/artists":
                setPosition("228px");
                break;
            case '/albums':
                setPosition("240px");
                break;
            case "/songs":
                setPosition("323px");
                break;
            case "/playlist":
                setPosition("407px");
                break;
            case "/specials":
                setPosition("451px");
                break;
            case "/favorites":
                setPosition("546px");
                break;
            case "/podcasts":
                setPosition("540px");
                break;
            default:
                setPosition("179px");
        }
    }, [path])

    return (
        <div className={styles.main} style={{
            top: position
        }}>
        </div>
    )
}