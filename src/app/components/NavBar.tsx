import styles from '../styles/NavBar.module.css'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
    return (

        <>
            <div className={styles.navbar}>
                <h1 className={styles.logo}><span>Item</span>dev</h1>

                    <nav className={styles.nav}>
                        <Link href="/" className={styles.link_nav}>Home</Link>
                        <p>Sobre a loja</p>
                        <p>Criador da loja</p>
                    </nav>
                <h2 className={styles.carrinho}><ShoppingCart /></h2>
            </div>
        
        </>
    )
}