import styles from '../styles/CartItens.module.css'
import Image from 'next/image'
import imagemm from '../../../public/download (2).jpg'
import { Popcorn } from 'lucide-react'

interface CartItemProps {
    data: {
        id: number | string
        title: string
        price: number
        thumbnail: string
    }
    removeFromCart: (id: number | string) => void
}

export default function CartItens({data, removeFromCart}: CartItemProps) {

    return (
        <section className={styles.cart_iten}> 
            <Image src={data.thumbnail} width={50} height={50} alt={data.title} className={styles.cart_item_img} />

            <div className={styles.cart_item_content}>
                <h3 className={styles.cart_item_title}>{data.title}</h3>
                
                <h3 className={styles.cart_item_price}> R$ {data.price}</h3>

                <button type="button" className={styles.btn_remove_cart} onClick={() => removeFromCart(data.id)}>
                    <Popcorn />
                </button>
            </div>
        </section>
    )
}