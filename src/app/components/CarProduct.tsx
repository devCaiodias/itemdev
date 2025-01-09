import img from '../../../public/download (2).jpg'
import Image from 'next/image'
import styles from '../styles/CarProdut.module.css'

export default function CartProduct() {
    return (
        <div className={styles.produtoMain}>
            <div className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={img} alt='produto' width={150} className={styles.imgproduto} />
                </div>
                <p>Produto</p>
                <p>$ 99.99</p>
            </div>
            <div className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={img} alt='produto' width={150} className={styles.imgproduto} />
                </div>
                <p>Produto</p>
                <p>$ 99.99</p>
            </div>
            <div className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={img} alt='produto' width={150} className={styles.imgproduto} />
                </div>
                <p>Produto</p>
                <p>$ 99.99</p>
            </div>
            <div className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={img} alt='produto' width={150} className={styles.imgproduto} />
                </div>
                <p>Produto</p>
                <p>$ 99.99</p>
            </div>
            <div className={styles.produtoCart}>
                <div className={styles.produto}>
                    <Image src={img} alt='produto' width={150} className={styles.imgproduto} />
                </div>
                <p>Produto</p>
                <p>$ 99.99</p>
            </div>
        </div>
    )
}