import Image from "next/image";
import TopProdut from "./components/TopProdut";
import ItemSecundario from "./components/ItemSecundario";
import AllProduct from "./components/AllProduct";

export default function Home() {
  return (
    <>
      <TopProdut />
      <ItemSecundario />
      <AllProduct />
    </>
  );
}
