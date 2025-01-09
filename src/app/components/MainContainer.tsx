import NavBar from "./NavBar"


interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}