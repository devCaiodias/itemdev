import styles from '../styles/CartItens.module.css'
import Image from 'next/image'
import imagemm from '../../../public/download (2).jpg'
import { Popcorn } from 'lucide-react'

export default function CartItens() {

    return (
        <section className={styles.cart_iten}> 
            <Image src={imagemm} alt='sdadas' className={styles.cart_item_img} />

            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>ssdadsad</h3>
                
                <h3 className={styles.cart_item_price}> R$ 255</h3>

                <button type="button" className={styles.btn_remove_cart}>
                    <Popcorn />
                </button>
            </div>
        </section>
    )
}