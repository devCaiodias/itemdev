import styles from '../styles/TopProdut.module.css'
import img from '../../../public/download (2).jpg'
import Image from 'next/image'

export default function TopProdut() {
    return (
        <div className={styles.topcontainer}>
            <div className={styles.info}>
                <h2>Xp - 21</h2>
                <h2>Eletronic system</h2>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>add Cart</button>
            </div>
            
            <Image src={img} alt='produto' width={400} />

        </div>
    )
}