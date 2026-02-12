import { main } from "framer-motion/client";


export default function AboutLayout({children}:{children:React.ReactNode}){
    return (
        <main className="min-h-screen">{children}</main>
    )
}