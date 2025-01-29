'use client'
import styles from '../styles/TopProdut.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'
import Link from 'next/link'
import Loding from './Loding'
import { useCart } from '../context/CartContext'

interface Props {
    id: string | number,
    title: string,
    thumbnail: string
}

export default function TopProdut() {
    const [topProduct, setTopProduct] = useState<Props | null>(null)
    const index = 0

    useEffect(() => {
        fechProduct('computadores').then((response) => {
            setTopProduct(response[index])
        })
    }, [])

    const {addToCart} = useCart()
    
    return (
        <div className={styles.topcontainer}>
            {topProduct ? (
                <>
                <div className={styles.info} key={topProduct.id}>
                    <Link href={`../Product/${topProduct.id}`} key={topProduct.id} className={styles.link_titletop}>
                        <h2>{topProduct.title}</h2>
                        <p>Nosso Top Produto da loja</p>
                    </Link>
                    <button className={styles.btnAddCart} onClick={() => addToCart(topProduct)}>add Cart</button>
                </div>

                <Image src={topProduct.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='produto' width={400} height={400} className={styles.imgtopitem} />
                
                </>
                
            ): (
                <Loding />
            )}

        </div>
    )
}