
import styles from '../styles/Footer.module.css'
import { Copyright, Github, Linkedin } from "lucide-react";
import Link from 'next/link';

export default function Foter() {
    return (
        <div className={styles.footer_container}>
            <h1 className={styles.footer_title}>ITEM<span>DEV</span></h1>
            <div className={styles.link_copy} >
                <div className={styles.footer_linck}>
                    <Link href="/" className={styles.linkkk}>Home</Link>
                    <Link href="/criadorLoja" className={styles.linkkk}>Criador</Link>
                </div>
                <p className={styles.copyright}><Copyright className={styles.icon_copy} size={18} /> ITEMDEV !!</p>
            </div>
            <div className={styles.midias_social}>
                <div className={styles.rede_social}>
                    <Link href="https://github.com/devCaiodias"><Github className={styles.git} /></Link>
                    <Link href="https://www.linkedin.com/in/caio-dias-martins-26739b251/" ><Linkedin className={styles.linkedin} /></Link>
                </div>
                <p className={styles.email}><span>Email : </span> caiodiasdev@gmail.com</p>
            </div>
        </div>
    )
}