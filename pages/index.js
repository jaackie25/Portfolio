import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import useInView from "react-cool-inview";
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../components/Footer'))
const About = dynamic(() => import('../components/About'))
const Projects = dynamic(() => import('../components/Projects'))


export default function Home() {
  const { observe, inView, scrollDirection, entry } = useInView({
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      unobserve()
    },
  })

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.circle}>
        
          <h2>JD</h2>
        </div>
        <div className={styles.content}>
        
          <h1>Jacqueline Dinh</h1>
          <p>Full Stack Developer</p> 
          <p>I'll help bring your ideas to life</p>
          {/* <button>DOWN ARROW or LINK to something</button> */}
        </div>
      </div>
    
      
      <div id="about" ref={observe}>
          {inView && <About />}
      </div>

     

      <div id="projects" ref={observe}>
          {inView && <Projects />}
      </div>
    
      <div id="footer" ref={observe}>
        {inView && <Footer />}
      </div>
      
    </div>
  
  )
}
