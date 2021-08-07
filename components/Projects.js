import Link from 'next/link'
import styles from '../styles/Projects.module.css'

import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';


export default function Projects(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])

    return(
        <section className={styles.projects}>
            <h3 data-aos="fade-right">Projects</h3>
        
            <div className={styles.container}>

                <div className={styles.item} >
                    <div className={styles.content}>
                        <h2 className={styles.title}>Good Eats</h2>
                       
                        <p className={styles.descrip}>Good Eats is an online cookbook that allows the user to view recipes. The user can search by ingredient name or by recipe name. 
                        Users may also create an account which will allow them to create a list of their favorite recipes. 
                        </p>
                        <h5 className={styles.stack}> Express.js |EJS |PostgreSQL | Sequelize | Axios | RESTful API | BootStrap 4 </h5>
                        
                        <div className={styles.link}>
                            <Link href="/">
                                <a>Github</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.item2}>LiveSite</a>
                            </Link>
                        </div>
                            <img className={styles.img} src="https://i.imgur.com/mxmnKpN.png" alt="test" />
                    </div>
                </div>

                <div className={styles.item} >
                    <div className={styles.content}>
                        <h2 className={styles.title}>Sailormoon Run</h2>
                        <p className={styles.descrip}>The game is an endless runner style game. The goal of the game is to run as far as possible and score as many points as you can. The player must press the up or down arrow to avoid obstacles, which include bats and trees.  </p>
                        <h5 className={styles.stack}> HTML | Javascript | CSS</h5>
                        <div className={styles.link}>
                            <Link href="/">
                                <a>Github</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.item2}>LiveSite</a>
                            </Link>
                        </div>
                            <img src="https://i.imgur.com/1lIFHCS.png" alt="test" />
                    </div>
                 </div>


                <div className={styles.item} >
                    <div className={styles.content}>
                        <h2 className={styles.title}>Totemize</h2>
                        <p className={styles.descrip}>This project was done during a hackathon collaboration with a group of software engineers and UI/UX designers. We created a mobile simulation app that allows individuals to find their friends at a specific event. The user and their friends can update their location.  </p>
                        <h5 className={styles.stack}>  Express | React | MongoDB | Mongoose | Axios | RESTful API | Bootstrap 4 </h5>
                        <div className={styles.link}>
                            <Link href="/">
                                <a>Github</a>
                            </Link>
                            <Link href="/">
                                <a className={styles.item2}>LiveSite</a>
                            </Link>
                        </div>
                            <img src="https://i.imgur.com/8dalG3d.png" alt="test" />
                    </div>
                </div>



                {/* <div data-aos="zoom-in" className={styles.item} className={styles.project2}>
                    <p>Project 2 description</p>
                    <img />
                </div>

                <div data-aos="zoom-in" className={styles.item} className={styles.project3}>
                    <img />
                    <p>Project 3 description</p>
                </div> */}

            </div>
           
        </section>
    )
} 