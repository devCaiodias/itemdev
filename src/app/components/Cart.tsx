'use client'
import styles from '../styles/Cart.module.css'
import CartItens from './CartItens'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const {cart, removeFromCart, isCartVisible } = useCart()
    

    const totalPrice = cart.reduce((acc, item) => {
        return item.price + acc
    }, 0.0)
    
    return (
        <>
            <section className={`${styles.cart} ${isCartVisible ? `${styles.cart__active} `:` ''`}`}>
                <div className={styles.cart_itens}>
                    {cart.length > 0 ? (
                        cart.map((item) => <CartItens key={item.id} data={item} removeFromCart={removeFromCart} />)
                    ): (
                        <h2></h2>
                    )}

                </div>

                <div className={styles.cart_resumo}> valor Total: R$ {totalPrice} </div>
            </section>
        </>
        
    )
}