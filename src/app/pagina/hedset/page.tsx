'use client'
import Image from 'next/image'
import styles from '../../styles/CarProdut.module.css'
import { useEffect, useState } from 'react'
import fechProduct from '../../api/fechProduct'
import Link from 'next/link'

interface Props {
    id: number,
    thumbnail: string,
    title: string
    price: number
}

export default function Hedset() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fechProduct('hedset').then((response) => {
            setProduct(response)
        })
    }, [])

    
    return (
        <div className={styles.produtoMain}>
            {product.map((produtos: Props) => {
                return <div key={produtos.id} className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={produtos.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt={produtos.title} width={150} height={150} className={styles.imgproduto} />
                </div>
                <Link href={`../Product/${produtos.id}`} key={produtos.id}>
                    <p className={styles.titleProduct}>{produtos.title}</p>
                    <p>R$ {produtos.price}</p>
                </Link>
            </div>
            
            })}
        </div>
    )
}