import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import IntroSection from '../components/IntroSection'
import CustomTitle from '../components/CustomTitle'
import { pageAnimation } from '../animations'
import { Container } from 'react-bootstrap'
import Wave from '../components/Wave'
import AboutSection from '../components/AboutSection'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    let debounce
    const measurements = () => {
      if (debounce) {
        clearTimeout(debounce)
      }
      debounce = setTimeout(() => {
        setInnerWidth(window.innerWidth)
      }, 100)
    }

    window.addEventListener('resize', measurements)

    return () => {
      window.removeEventListener('resize', measurements)
    }
  }, [innerWidth])

  
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <CustomTitle title='Welcome To Vroom' />
      <Container>
        <Wave />
        <IntroSection />
        <AboutSection innerWidth={innerWidth} />
        <ContactForm innerWidth={innerWidth} />
      </Container>
    </motion.div>
  )
}

export default HomePage
