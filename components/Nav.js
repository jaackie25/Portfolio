import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useState } from 'react'

export default function Nav(){
    const [on, setOn] = useState(false)

    const handleToggle = () => {
       if(on){
           setOn(false)
       } else{
           setOn(true)
       }
    }

    return (
    <nav className={styles.nav}>
       
        <div className={styles.home}>
            <Link href="/">
                <a >JD</a>
            </Link>
        </div>
        
            <div className={styles.collapse} onClick={handleToggle} >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
     
       
        
        <div className={styles.rest}>
            <Link href="#projects">
                <a style={{display: on ? "inline-block" : "none"}}>Projects</a>
            </Link>
            <Link href="#about">
                <a style={{display: on ? "inline-block" : "none"}}>About</a>
            </Link>
            <Link href="#footer">
                <a style={{display: on ? "inline-block" : "none"}}>Contact Me</a>
            </Link>
        </div>
    </nav>
    )
}