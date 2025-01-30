import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import ShopingCart from './ShopingCart'

export default function NavBar() {
    return (
        <>
            <div className={styles.navbar}>
                <h1 className={styles.logo}><span>Item</span>dev</h1>

                    <nav className={styles.nav}>
                        <Link href="/" className={styles.link_nav}>Home</Link>
                        <Link href="/criadorLoja" className={styles.link_nav}>Criador</Link>
                    </nav>
                <ShopingCart />
            </div>
        
        </>
    )
}