import Link from 'next/link'
import styles from '../styles/AllProduct.module.css'

export default function AllProduct() {
    return (
        <div>
            <h1 className={styles.textomain}>All Package</h1>

            <div className={styles.navCategoria}>
                <Link href='../hedset' >Hedset</Link>
                <Link href='../computadores' >Computadores</Link>
                <Link href='../teclado' >Teclado</Link>
                <Link href='../monitor' >Monitor</Link>
                <Link href='../mouse' >Mouse</Link>
            </div>
        </div>
    )
}