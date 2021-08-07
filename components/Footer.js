import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {useRef, useState, useEffect } from 'react'


export default function Footer(){

    // useEffect(() => {
    //     const footer = document.getElementsByClassName("footer")
    //     footer.addEventListener('mousemove', handleMove)
    //     return () => footer.removeEventListener('mousemove', handleMove)
    // })

    // const handleMove = (e) => {
    //     console.log('mouse event:', MouseEvent)
    // }
   

    return (
       
    <footer className={styles.footer}>  
             
        <div className={styles.container}>
        <h1>Lets get in touch</h1>
            <Link href="https://github.com/jaackie25">
                <a className={styles.link}>GITHUB</a>
            </Link>
            <Link href="https://www.linkedin.com/in/jacquelinedinh/">
                <a>LINKED</a>
            </Link>
            <Link  href="/">
                <a>Jackiedinh91@gmail.com</a>
            </Link>
            <Link href="/">
                <a>Contact Me</a>
            </Link>
            <Link href="/">
                <a>Resume</a>
            </Link>
        </div>
     





        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
            <stop stop-color="#3498db" offset="0"/>
            <stop stop-color="#9b59b6" offset="100%"/>
        </linearGradient>
            <path fill="url(#gradient)" fill-opacity="1" d="M0,192L30,165.3C60,139,120,85,180,85.3C240,85,300,139,360,170.7C420,203,480,213,540,192C600,171,660,117,720,85.3C780,53,840,43,900,42.7C960,43,1020,53,1080,74.7C1140,96,1200,128,1260,128C1320,128,1380,96,1410,80L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
            </path>
        </svg> */}

        {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 750">
        <linearGradient x1="0" y1="0" x2="100%" y2="100%"  id="gradient">
            <stop stop-color="#3498db" offset="0"/>
            <stop stop-color="#9b59b6" offset="100%"/>
        </linearGradient>
            <path fill="url(#gradient)" fill-opacity="1" d="M0,64L30,101.3C60,139,120,213,180,240C240,267,300,245,360,213.3C420,181,480,139,540,106.7C600,75,660,53,720,69.3C780,85,840,139,900,160C960,181,1020,171,1080,154.7C1140,139,1200,117,1260,90.7C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
            </path>
            
        </svg> */}

    </footer>
        
        
 
    )

}