'use client'
import Image from "next/image";
import styles from "../../styles/ProdutoDetalhe.module.css";
import { useState, useEffect } from "react";

type Props = {
  params: { idproduto: string | number };
};

export default function ProdutoDetalhe({ params }: Props) {
  const [produto, setProduto] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.mercadolibre.com/items/${params.idproduto}`);
        const data = await res.json();
        setProduto(data);
        setSelectedImage(data.pictures?.[0]?.secure_url || null); // Define a primeira imagem como padrão
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, [params.idproduto]);

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
        {produto.pictures.map((picture: any) => (
          <button
            key={picture.id}
            onClick={() => setSelectedImage(picture.secure_url)}
            className={styles.btn_img}
          >
            <Image src={picture.secure_url} alt={produto.title} width={60} height={60} />
          </button>
        ))}
      </div>
        <button type="button" className={styles.add_cart}>Add Carrinho</button>
      </div>
    </div>
  );
}
