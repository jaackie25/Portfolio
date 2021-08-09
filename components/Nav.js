import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav(){
    return (
    <nav className={styles.nav}>
        <div className={styles.home}>
        <Link href="/">
            <a >JD</a>
        </Link>
        </div>
        
        <div className={styles.rest}>
        <Link href="#projects">
            <a>Projects</a>
        </Link>
        <Link href="#about">
            <a>About</a>
        </Link>
        <Link href="#footer">
            <a>Contact Me</a>
        </Link>
        </div>
    </nav>
    )
}