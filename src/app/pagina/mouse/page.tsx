'use client'
import Image from 'next/image'
import styles from '../../styles/CarProdut.module.css'
import { useEffect, useState } from 'react'
import fechProduct from '../../api/fechProduct'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import Loding from '@/app/components/Loding'
import { useCart } from '@/app/context/CartContext'

interface Props {
    id: number,
    thumbnail: string,
    title: string
    price: number
}

export default function Mouse() {
    const [product, setProduct] = useState([])
    const [lodin, setLodin] = useState(true)

    const { addToCart } = useCart()

    useEffect(() => {
        fechProduct('mouse').then((response) => {
            setProduct(response)
            setLodin(false)
        })
    }, [])

    
    return (
        <>
            {lodin ? <Loding /> : <>
            <div className={styles.produtoMain}>
                {product.map((produtos: Props) => {
                    return <div key={produtos.id} className={styles.produtoCart}>
                        <Link href={`../Product/${produtos.id}`}>
                            <div className={styles.produto}>
                                <Image src={produtos.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt={produtos.title} width={150} height={150} className={styles.imgproduto} />
                            </div>
                            <p className={styles.titleProduct}>{produtos.title}</p>
                            <p>R$ {produtos.price}</p>
                        </Link><button type="button" className={styles.cart_add_cart} onClick={() => addToCart(produtos)}>
                                <ShoppingCart />
                        </button>
                </div>
                
                })}
            </div></>}
        </>
    )
}