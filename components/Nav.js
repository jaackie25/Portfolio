import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';

export default function Nav(){
    const [on, setOn] = useState(false)

    const handleToggle = () => setOn(!on)
    const mobile = () => setOn(false)
    
    return (
    <nav className={styles.nav}>
       
        <div className={styles.home}>
            <Link href="/" onClick={mobile}>
                <a >JD</a>
            </Link>
        </div>
        
        <div className={styles.collapse} onClick={handleToggle} >
            <div>
                {on ? <FontAwesomeIcon style={{color:"white"}} icon={faTimes}/> : <FontAwesomeIcon style={{color:"white"}} icon={faBars} />}
            </div>
        </div>
     
        <div className={on ? "active" : "menu"}>
            <div className={styles.rest}>
                <Link href="#projects" >
                    <a onClick={mobile} className={styles.anchor} >Projects</a>
                </Link>
                <Link href="#about">
                    <a onClick={mobile} className={styles.anchor} >About</a>
                </Link>
                <Link href="#footer" >
                    <a onClick={mobile} className={styles.anchor}>Contact</a>
                </Link>
            </div>
        </div>
        
        <style jsx>{`
        @media only screen and (max-width: 640px) {
         .menu {
            position: absolute;
            top: 80px;
            right: -100%;
            opacity: 1;
           
          }
          .active {
            border-radius: 50%;
            margin: 10rem 1.2rem 0 0;
            height: 150px;
            width: 150px;
            opacity: 1;
            text-align: center;
            right: 10%;
            z-index: 1;
          }
        }
      `}</style>
    </nav>
    )
}
