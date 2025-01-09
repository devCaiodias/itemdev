import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    return (

        <>
            <div className={styles.navbar}>
                <h1 className={styles.logo}><span>Item</span>dev</h1>

                    <nav className={styles.nav}>
                        <p>Home</p>
                        <p>Sobre a loja</p>
                        <p>Criador da loja</p>
                    </nav>
                <h2 className={styles.carrinho}>Carrinho</h2>
            </div>
        
        </>
    )
}