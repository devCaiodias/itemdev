import NavBar from "../NavBar"
import Foter from "../Foter"
import Cart from "../Cart"

interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
                <Cart />
                <NavBar />
                {children}
                <Foter />
        </>
    )
}