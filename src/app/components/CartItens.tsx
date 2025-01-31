'use client'
import styles from '../styles/CartItens.module.css'
import Image from 'next/image'
import { Popcorn } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface CartItemProps {
    data: {
        id: number | string
        title: string
        price: number
        thumbnail: string
        quantity: number
    }
}

export default function CartItens({ data }: CartItemProps) {
    const { incrementItem, decrementItem, removeFromCart } = useCart()

    return (
        <section className={styles.cart_iten}> 
            <Image src={data.thumbnail} width={50} height={50} alt={data.title} className={styles.cart_item_img} />

            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>{data.title}</h3>
                <h3 className={styles.cart_item_price}> R$ {data.price}</h3>

                <div className={styles.cart_controls}>
                    <span>{data.quantity}</span>
                    <button onClick={() => incrementItem(data.id)} className={styles.imcrement__item}>+</button>
                    <button onClick={() => decrementItem(data.id)} className={styles.decrement__item}>-</button>
                </div>

                <button type="button" className={styles.btn_remove_cart} onClick={() => removeFromCart(data.id)}>
                    <Popcorn />
                </button>
            </div>
        </section>
    )
}
