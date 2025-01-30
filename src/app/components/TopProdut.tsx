'use client'
import styles from '../styles/TopProdut.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'
import Link from 'next/link'
import Loding from './Loding'
import { useCart } from '../context/CartContext'

// Definindo a estrutura completa do produto
interface Product {
    id: string | number;
    title: string;
    price: number;
    thumbnail: string;
}

export default function TopProdut() {
    const [topProduct, setTopProduct] = useState<Product | null>(null) // Agora topProduct tem o tipo completo
    const index = 0

    useEffect(() => {
        fechProduct('computadores').then((response) => {
            const product = response[index];
            if (product) {
                // Garantindo que o produto tenha todas as propriedades necessárias
                setTopProduct({
                    id: product.id,
                    title: product.title,
                    price: product.price, // Certificando-se de que o preço está presente
                    thumbnail: product.thumbnail
                });
            }
        })
    }, [])

    const { addToCart } = useCart()
    
    return (
        <div className={styles.topcontainer}>
            {topProduct ? (
                <>
                    <div className={styles.info} key={topProduct.id}>
                        <Link href={`../Product/${topProduct.id}`} key={topProduct.id} className={styles.link_titletop}>
                            <h2>{topProduct.title}</h2>
                            <p>Nosso Top Produto da loja</p>
                        </Link>
                        <button className={styles.btnAddCart} onClick={() => addToCart(topProduct)}>
                            Add to Cart
                        </button>
                    </div>

                    <Image src={topProduct.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="produto" width={400} height={400} className={styles.imgtopitem} />
                </>
            ) : (
                <Loding />
            )}
        </div>
    )
}
