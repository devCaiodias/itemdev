import NavBar from "./NavBar"
import Foter from "./Foter"



interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
            <NavBar />
            {children}
            <Foter />
        </>
    )
}