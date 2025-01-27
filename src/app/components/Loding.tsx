import { LoaderCircle } from "lucide-react";
import styles from '../styles/Loding.module.css'

export default function Loding() {
    return (
        <>
            <LoaderCircle size={40} className={styles.loding}/>
        </>
    )
}