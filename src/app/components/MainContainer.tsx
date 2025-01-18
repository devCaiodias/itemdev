import NavBar from "./NavBar"
import Foter from "./Foter"
import TopProdut from "./TopProdut"
import ItemSecundario from "./ItemSecundario"
import AllProduct from "./AllProduct"



interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
            <NavBar />
            <TopProdut />
            <ItemSecundario />
            <AllProduct />
            {children}
            <Foter />
        </>
    )
}