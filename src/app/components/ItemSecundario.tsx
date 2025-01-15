'use client'
import styles from '../styles/ItemSecundario.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'

interface Props {
    title: string,
    price: number,
    thumbnail: string
}

export default function ItemSecundario() {
    const [teclado, setTeclado] = useState<Props | null>(null)
    const [mouse, setMouse] = useState<Props | null>(null)
    const [monitor, setMonitor] = useState<Props | null>(null)

    useEffect(() => {
        fechProduct('teclados').then((response) => {
            setTeclado(response[11])
        })
    }, [])
    
    useEffect(() => {
        fechProduct('mouse').then((response) => {
            setMouse(response[2])
        })
    }, [])

    useEffect(() => {
        fechProduct('monitor').then((response) => {
            setMonitor(response[0])
        })
    }, [])
    
    return (
        <>
            <div className={styles.containerItem}>
                {teclado ? (
                    <>
                    <div className={styles.infoitem}>
                        <div className={styles.infotext}>
                            <h2>{teclado.title}</h2>
                            <p className={styles.priceItem}>$ {teclado.price}</p>
                        </div>
                        <Image src={teclado.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                    </div>
                    </>
                ): (
                    <p>Carregando</p>
                )}
                


                {mouse ? (
                    <>
                    <div className={styles.infoitem}>
                        <div className={styles.infotext}>
                            <h2>{mouse.title}</h2>
                            <p className={styles.priceItem}>$ {mouse.price}</p>
                        </div>
                        <Image src={mouse.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                    </div>
                    </>
                ): (
                    <p>Carregando</p>
                )}

                {monitor ? (
                    <>
                    <div className={styles.infoitem}>
                        <div className={styles.infotext}>
                            <h2>{monitor.title}</h2>
                            <p className={styles.priceItem}>$ {monitor.price}</p>
                        </div>
                        <Image src={monitor.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                    </div>
                    </>
                ): (
                    <p>Carregando</p>
                )}
            </div>
        </>
    )
}