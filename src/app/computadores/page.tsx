'use client'
import Image from 'next/image'
import styles from '../styles/CarProdut.module.css'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'
import Link from 'next/link'

interface Props {
    id: number,
    thumbnail: string,
    title: string
    price: number
}

export default function Computadores() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fechProduct('computadores').then((response) => {
            setProduct(response)
        })
    }, [])

    console.log(product)

    
    return (
        <div className={styles.produtoMain}>
            {product.map((produtos: Props) => {
                return <Link href={`../Product/${produtos.id}`} key={produtos.id}>
                 <div key={produtos.id} className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={produtos.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt={produtos.title} width={150} height={150} className={styles.imgproduto} />
                </div>
                <p className={styles.titleProduct}>{produtos.title}</p>
                <p>R$ {produtos.price}</p>
            </div>
            </Link>
            })}
        </div>
    )
}