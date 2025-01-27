'use client'
import styles from '../styles/ItemSecundario.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import fechProduct from '../api/fechProduct'
import Link from 'next/link'
import Loding from './Loding'

interface Props {
    id: string | number,
    title: string,
    price: number,
    thumbnail: string
}

export default function ItemSecundario() {
    const [teclado, setTeclado] = useState<Props | null>(null)
    const [mouse, setMouse] = useState<Props | null>(null)
    const [monitor, setMonitor] = useState<Props | null>(null)

    useEffect(() => {
        fechProduct('hedset').then((response) => {
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
                                <Link href={`../Product/${teclado.id}`} key={teclado.id}>
                                    <h2>{teclado.title}</h2>
                                    <p className={styles.priceItem}>R$ {teclado.price}</p>
                                </Link>
                            </div>
                            <Image src={teclado.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                        </div>
                    
                    </>
                ): (
                    <Loding />
                )}
                


                {mouse ? (
                    <>
                        <div className={styles.infoitem}>
                            <div className={styles.infotext}>
                            <Link href={`../Product/${mouse.id}`} key={mouse.id}>
                                <h2>{mouse.title}</h2>
                                <p className={styles.priceItem}>R$ {mouse.price}</p>
                            </Link>
                            </div>
                            <Image src={mouse.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                        </div>
                    
                    </>
                ): (
                    <Loding />
                )}

                {monitor ? (
                    <>
                        <div className={styles.infoitem}>
                            <div className={styles.infotext}>
                            <Link href={`../Product/${monitor.id}`} key={monitor.id}>
                                <h2>{monitor.title}</h2>
                                <p className={styles.priceItem}>R$ {monitor.price}</p>
                            </Link>
                            </div>
                            <Image src={monitor.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt='img' width={150} height={150} className={styles.imgSecundaria} />
                        </div>
                    
                    </>
                ): (
                    <Loding />
                )}
            </div>
        </>
    )
}