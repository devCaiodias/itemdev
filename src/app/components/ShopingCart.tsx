import styles from '../styles/ShopingCart.module.css'
import { ShoppingCart } from 'lucide-react'

export default function ShopingCart() {
    return (
        <>
            <button type='button' className={styles.carrinho}>
                <ShoppingCart size={27} />
                <span className={styles.cart_status}>1</span>
            </button>
        </>
    )
}