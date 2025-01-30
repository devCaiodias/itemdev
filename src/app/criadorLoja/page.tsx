import Image from "next/image"
import caio from '../../../public/image.png'
import styles from '../styles/Criador.module.css'

export default function SobreLoja() {
    return (
        <>
            <div className={styles.criador}>
                <Image src={caio} alt="perfil" width={300} className={styles.img_criador} />
            </div>
                <h1 className={styles.titleCriador}>Caio Dias Martins</h1>
                <div className={styles.criador_description}>
                    <p className={styles.decription}>Meu nome é Caio, e criei esta loja virtual como um projeto pessoal para aprimorar minhas habilidades em programação e design. Meu objetivo foi explorar novas tecnologias, entender melhor o funcionamento de uma loja online e desenvolver um design funcional e atraente para a experiência do usuário.</p>
                </div>
                    <br />
                <div className={styles.criador_description}>
                <p className={styles.decription}>Durante o desenvolvimento, trabalhei com  HTML, CSS, JavaScript, TypeScript, React, Next.js, UseContext e localStore, focando tanto na parte visual quanto na lógica por trás do funcionamento da loja. Esse projeto representa minha busca constante por aprendizado e inovação na área de desenvolvimento front-end, fortalecendo minhas habilidades para futuros desafios profissionais.</p></div>
        
        </>
    )
}