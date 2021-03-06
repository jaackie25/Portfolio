import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {useState} from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faFileDownload} from '@fortawesome/free-solid-svg-icons';

import {CopyToClipboard} from 'react-copy-to-clipboard';




export default function Footer(){

    const [copy, setCopy] = useState(false);
 
   const email = "jackiedinh91@gmail.com"
  
   const onCopyText = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

    return ( 
    <footer className={styles.footer}>  
    
        <div className={styles.container}>
        <h1>Let's get in touch.</h1>
            <Link href="https://github.com/jaackie25">
                <a target="_blank"> <FontAwesomeIcon style={{marginRight: '3px', width:"20px"}} icon={faGithub} />Jaackie25</a>
            </Link>
            <Link href="https://www.linkedin.com/in/jacquelinedinh/">
                <a target="_blank" ><FontAwesomeIcon style={{marginRight: '3px', width:"20px"}} icon={faLinkedin} />Jacquelinedinh</a>
            </Link>
            <CopyToClipboard className={styles.copy} text={email} onCopy={onCopyText}>
                    <a target="_blank" >{copy ? "Email copied to clipboard" : <><FontAwesomeIcon style={{marginRight: '3px', width:"20px"}} icon={faEnvelopeOpenText} />{email}</>}</a>
            </CopyToClipboard>
            <Link href="https://drive.google.com/file/d/1xMlBbAtRil8T0U-6GxPHWtBMOSOgRZ44/view?usp=sharing">
                <a target="_blank" > <FontAwesomeIcon style={{marginRight: '3px', width:"20px"}} icon={faFileDownload} />Download Resume</a>
            </Link>    
        </div>
     
    </footer>
        
    )

}