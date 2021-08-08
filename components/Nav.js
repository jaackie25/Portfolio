import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav(){
    return (
    <nav className={styles.nav}>
        <Link href="/">
            <a>JD</a>
        </Link>
        <Link href="#projects">
            <a>Projects</a>
        </Link>
        <Link href="#about">
            <a>About</a>
        </Link>
        <Link href="#footer">
            <a>Contact Me</a>
        </Link>
        <Link href="/">
            <a>Resume</a>
        </Link>

    </nav>
    )

}