import styles from '../styles/AllProduct.module.css'
import CartProduct from './CarProduct'

export default function AllProduct() {
    return (
        <div>
            <h1 className={styles.textomain}>All Package</h1>

            <div className={styles.navCategoria}>
                <p>Hedset</p>
                <p>Computadores</p>
                <p>teclado</p>
                <p>Monitor</p>
            </div>

            <CartProduct />
        </div>
    )
}