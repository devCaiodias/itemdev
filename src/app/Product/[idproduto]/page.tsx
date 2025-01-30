'use client'
import Image from "next/image";
import styles from "../../styles/ProdutoDetalhe.module.css";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";

// Adicionando a propriedade thumbnail na interface
interface Product {
  id: string;
  title: string;
  price: number;
  pictures: { id: string; secure_url: string }[];
  thumbnail: string; // Adicionando a propriedade thumbnail
}

type Props = {
  params: Promise<{ idproduto: string | number }>;
};

export default function ProdutoDetalhe({ params }: Props) {
  const [produto, setProduto] = useState<Product | null>(null); // Usando o tipo Product com thumbnail
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { isCartVisible, setIsCartVisible, addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.idproduto;

        const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await res.json();
        
        setProduto(data); // Agora o 'data' deve ter a propriedade thumbnail
        setSelectedImage(data.pictures?.[0]?.secure_url || null);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, [params]); // Reexecuta o efeito se `params` mudar

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className={styles.produtoDetalhe}>
      <div className={styles.imagemGrande}>
        {selectedImage && (
          <Image src={selectedImage} alt={produto.title} width={400} height={400} />
        )}
      </div>

      <div className={styles.info_product}>
        <h2>{produto.title}</h2>
        <p>R$ {produto.price}</p>
        <div className={styles.imagensPequenas}>
          {produto.pictures.map((picture) => (
            <button
              key={picture.id}
              onClick={() => setSelectedImage(picture.secure_url)}
              className={styles.btn_img}
            >
              <Image src={picture.secure_url} alt={produto.title} width={60} height={60} />
            </button>
          ))}
        </div>
        <button type="button" className={styles.add_cart} onClick={() => addToCart(produto)}>
          Add Carrinho
        </button>
        <button type="button" className={styles.add_cart} onClick={() => setIsCartVisible(!isCartVisible)}>
          Ver Carrinho
        </button>
      </div>
    </div>
  );
}
