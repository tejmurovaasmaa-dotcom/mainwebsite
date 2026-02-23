

export default function ContactLayout({children}:{children:React.ReactNode}){
    return(
        <>
          <main className="min-h-screen flex flex-col items-center justify-center mt-20">{children}</main>
        </>
    )
}