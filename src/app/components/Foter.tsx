
import styles from '../styles/Footer.module.css'
import { Copyright, Github, Linkedin } from "lucide-react";

export default function Foter() {
    return (
        <div className={styles.footer_container}>
            <h1 className={styles.footer_title}>ITEM<span>DEV</span></h1>
            <div className={styles.link_copy} >
                <div className={styles.footer_linck}>
                    <p>Home</p>
                    <p>Sobre a Loja</p>
                    <p>Criador da Loja</p>
                    <p>Carrinho</p>
                </div>
                <p className={styles.copyright}><Copyright className={styles.icon_copy} size={18} /> ITEMDEV !!</p>
            </div>
            <div className={styles.midias_social}>
                <div className={styles.rede_social}>
                    <Github className={styles.git} />
                    <Linkedin className={styles.linkedin} />
                </div>
                <p className={styles.email}><span>Email : </span> caiodiasdev@gmail.com</p>
            </div>
        </div>
    )
}