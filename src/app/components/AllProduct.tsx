'use client'
import Computadores from '../pagina/computadores/page';
import Hedset from '../pagina/hedset/page';
import Monitor from '../pagina/monitor/page';
import Mouse from '../pagina/mouse/page';
import styles from '../styles/AllProduct.module.css'
import { useState } from 'react';

export default function AllProduct() {
    const [category, setCategory] = useState<String>("hedset");
    return (
        <div>
            <h1 className={styles.textomain}>All Package</h1>

            <div className={styles.navCategoria}>
                <button onClick={() => setCategory("hedset")}>Headset</button>
                <button onClick={() => setCategory("computadores")}>Computadores</button>
                <button onClick={() => setCategory("monitor")}>Monitor</button>
                <button onClick={() => setCategory("mouse")}>Mouse</button>
            </div>
            <div>
                {category === 'hedset' && (
                    <Hedset />
                )},
                {category === "computadores" && (<Computadores/>)}
                {category === "monitor" && (<Monitor/>)}
                {category === "mouse" && (<Mouse/>)}
            </div>
        </div>
    )
}