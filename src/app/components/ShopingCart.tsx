'use client'
import styles from '../styles/ShopingCart.module.css'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ShopingCart() {
    const {cart, isCartVisible, setIsCartVisible } = useCart()

    return (
        <>
            <button type='button' className={styles.carrinho} onClick={() => setIsCartVisible(!isCartVisible)}>
                <ShoppingCart size={27} />
                {cart.length > 0 && <span className={styles.cart_status}>{cart.length}</span>}
            </button>
        </>
    )
}