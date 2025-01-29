'use client'
import styles from '../styles/Cart.module.css'
import CartItens from './CartItens'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const {cart, removeFromCart} = useCart()
    
    return (
        <section className={styles.cart}>
            <div className={styles.cart_itens}>
                {cart.length > 0 ? (
                    cart.map((item) => <CartItens key={item.id} data={item} removeFromCart={removeFromCart} />)
                ): (
                    <h2>Adicione item no seu carrinho</h2>
                )}

            </div>

            <div className={styles.cart_resumo}> resumo do carrinho</div>
        </section>
    )
}