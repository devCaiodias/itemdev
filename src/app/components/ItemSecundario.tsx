import styles from '../styles/ItemSecundario.module.css'
import img from '../../../public/download (2).jpg'
import Image from 'next/image'

export default function ItemSecundario() {
    return (
        <>
            <div className={styles.containerItem}>

                <div className={styles.infoitem}>
                    <div className={styles.infotext}>
                        <h2>Tablet</h2>
                        <h2>Smartphones</h2>
                        <p>price $90.90</p>
                    </div>
                    <Image src={img} alt='img' width={150} />
                </div>
                <div className={styles.infoitem}>
                    <div className={styles.infotext}>
                        <h2>Tablet</h2>
                        <h2>Smartphones</h2>
                        <p>price $90.90</p>
                    </div>
                    <Image src={img} alt='img' width={150} />
                </div>
                <div className={styles.infoitem}>
                    <div className={styles.infotext}>
                        <h2>Tablet</h2>
                        <h2>Smartphones</h2>
                        <p>price $90.90</p>
                    </div>
                    <Image src={img} alt='img' width={150} />
                </div>
            </div>
        </>
    )
}