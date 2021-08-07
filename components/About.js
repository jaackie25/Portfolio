import styles from '../styles/About.module.css'
import Image from 'next/image'
import icon from '../public/icon.png'


import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';


export default function About(){

    useEffect(() => {
        Aos.init({duration:2000})
      },[])

    return (
      
        <div  className={styles.aboutContainer}>
            <div  className={styles.content}>
                
                <div data-aos="fade-right"  className={styles.profile}>
                    <img src="https://i.imgur.com/vA1HmRF.png" />
                </div>
            
             
                <div data-aos="fade-right" className={styles.profile}>
                    <h3>
                    I am a full-stack developer who is passionate about creating and designing beautiful and user-friendly applications
                    </h3>
                
                
                    <p>
                    As a former nurse I have learned to effectively communicate with my team, learn quickly and efficiently, and utilize my multi-tasking and organizational skills to ensure that all tasks are completed safely and accurately.
                    I also enjoy the problem solving aspect of coding and the ability to create meaningful applications. 
                    </p>
                    <p>
                    When I am not coding, you can find my either in the kitchen trying to recreate random recipes that I found on youtube, playing with my shiba(his name is deku), building mechnical keyboards, paddleboarding, snowboarding, 
                    or travelling in search of breathe-taking sights and all the tasty dishes of the world. 
                    </p>
                </div>
                
               
            </div>
              
          
               
                <div data-aos="fade-left" data-aos-duration="1000" className={styles.skills}>
                    <div className={styles.front}>
                    <img src="https://i.imgur.com/7lV4mhl.png" />
                    <h4>Front End/Templates</h4>
                    <p>
                    HTML 
                    </p>
                    <p>
                    CSS 
                    </p>
                    <p>
                    Javascript 
                    </p>
                    <p>
                   React.js 
                    </p>
                    <p>
                    Next.js 
                    </p>
                    <p>
                    Typescript
                    </p>
                    <p>
                    EJS
                    </p>
                    <p>
                    SASS
                    </p>
                    </div>
                    <div className={styles.front}>
                    <img src="https://i.imgur.com/m4Db6Ab.png" />
                    <h4> Back End</h4>
                    <p>
                    Node.js 
                    </p>
                    <p>
                    Express.js 
                    </p>
                    <p>
                    Python 
                    </p>
                    <p>
                    PostgreSQL
                    </p>
                    <p>
                    Sequlieze 
                    </p>
                    <p>
                    MongoDB 
                    </p>
                    <p>
                    Mongoose
                    </p>
                    </div>
                    <div className={styles.front}>
                    <img src="https://i.imgur.com/x8YOZjD.png" />
                    <h4>Dev Tools/Design Platforms</h4>
                    <p>
                    Github 
                    </p>
                    <p>
                    Heroku 
                    </p>
                    <p>
                    Netlify 
                    </p>
                    <p>
                    Adobe Lightroom
                    </p>
                    <p>
                    Figma
                    </p>
                    </div>
                  
                  
                   
                   
                     
                   
                </div>
              
            
              
               
          
      
            </div>
    
    
    )

}