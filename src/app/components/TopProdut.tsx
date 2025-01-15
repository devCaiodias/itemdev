'use client'
import styles from '../styles/TopProdut.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'

interface Props {
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

    console.log(topProduct)
    
    return (
        <div className={styles.topcontainer}>
            {topProduct ? (
                <>
                <div className={styles.info}>
                    <h2>{topProduct.title}</h2>
                    <p>Nosso Top Produto da loja</p>
                    <button className={styles.btnAddCart}>add Cart</button>
                </div>

                <Image src={topProduct.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='produto' width={400} height={400} className={styles.imgtopitem} />
                </>
                
            ): (
                <p>carregando</p>
            )}

        </div>
    )
}