import Link from 'next/link'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import gif from '../public/ezgif.com-gif-maker.gif'
import p2 from '../public/p2portfolio.png'
import p3 from '../public/p3mock.png'


import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';


export default function Projects(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])

    return(
        <section className={styles.contain}>
            
            <h3 className="title" data-aos="fade-right">Projects</h3>
                <div className={styles.container}>

                    <div  className={styles.item} >
                        <h2 >Good Eats</h2>
                            <div className={styles.content}>
                                <div className={styles.descrip}>

                                    <Link href="https://github.com/jaackie25/Good-Eats">
                                            <a target="_blank" >Github</a>
                                    </Link>
                                    <Link href="https://good-eats-best.herokuapp.com/">
                                            <a target="_blank" className={styles.item2}>Demo</a>
                                    </Link>    
                                    <p> Good Eats is an online cookbook that allows the user to view recipes. The user can search by ingredient name or by recipe name. Users may also create an account that will allow them to create a list of their favorite recipes. <small>You do not have to register in order to view site</small> </p>   
                                    <p>Express | EJS | PostgreSQL | Sequelize | Axios | RESTful API | BootStrap </p>
                                </div>
                                <Image layout="responsive" src={p2} height={783} alt="cooking recipe website. Has variety of images from website" />
                            </div>
                    </div>

                    <div className={styles.item} >
                        <h2 className={styles.title}>Totemize</h2>
                            <div  className={styles.content}>
                                <div className={styles.descrip}>
                                    <Link href="https://github.com/jaackie25/Totemize-server">
                                        <a target="_blank" >Backend</a>
                                    </Link>
                                    <Link href="https://github.com/jaackie25/Totemize-client">
                                        <a  target="_blank" className={styles.item1}>Frontend</a>
                                    </Link>
                                    <Link href="https://friendly-sinoussi-f96db3.netlify.app/">
                                        <a  target="_blank" className={styles.item2}>Demo</a>
                                    </Link>
                                    <p>This project was done during a hackathon collaboration with a group of software engineers and UI/UX designers. We created a mobile simulation app that allows individuals to find their friends at a specific event. The user and their friends can update their location. </p>
                                    <p>Express | React | MongoDB | Mongoose | Axios | RESTful API | Bootstrap </p>
                                </div>
                                <Image layout="responsive" src={p3} alt="iphone display of application. Shows login, map, and register" />
                            </div>
                    </div>
                </div>

            <div className={styles.item}>
                <h2 className={styles.title}>Sailormoon Run</h2>
                    <div  className={styles.content}>
                        <div className={styles.descrip}>
                            <Link href="https://github.com/jaackie25/Sailormoon-Run">
                                <a target="_blank" >Github</a>
                            </Link>
                            <Link href="https://sailormoon-run.netlify.app/">
                                <a target="_blank" className={styles.item2}>Demo</a>
                            </Link>
                            <p>
                            The game is an endless runner style game. The goal of the game is to run as far as possible and score as many points as you can. The player must press the up or down arrow to avoid obstacles, which include bats and trees.  
                            </p>
                            <p> HTML | Javascript | CSS</p>
                        </div>
                        <Image layout="responsive" src={gif} alt="gif of gameplay of sailormoon endless runner" />
                    </div>
            </div>

        </section>
    )
} 