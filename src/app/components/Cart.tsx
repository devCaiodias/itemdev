'use client'
import styles from '../styles/Cart.module.css'
import CartItens from './CartItens'

export default function Cart() {
    
    return (
        <section className={styles.cart}>
            <div className={styles.cart_itens}>
            <CartItens data={{thumbnail: '', title: '', price: 10}}  />
            </div>

            <div className={styles.cart_resumo}> resumo do carrinho</div>
        </section>
    )
}