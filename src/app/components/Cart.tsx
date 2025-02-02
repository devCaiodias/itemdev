'use client'
import styles from '../styles/Cart.module.css'
import CartItens from './CartItens'
import { useCart } from '../context/CartContext'
import ShopingCart from './ShopingCart'

export default function Cart() {
    const { cart, isCartVisible } = useCart()

    const totalPrice = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)

    return (
        <>
            <section className={`${styles.cart} ${isCartVisible ? `${styles.cart__active} ` : ''}`}>
                <div className={styles.icon_shoping}>
                    <ShopingCart />
                </div>
                <div className={styles.cart_itens}>
                    {cart.length > 0 ? (
                        cart.map((item) => <CartItens key={item.id} data={item} />)
                    ) : (
                        <h2></h2>
                    )}
                </div>

                <div className={styles.cart_resumo}>Valor Total: R$ {totalPrice.toFixed(2)} </div>
            </section>
        </>
    )
}
