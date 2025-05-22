import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact']
      const scrollPosition = window.scrollY + 120 // Adjusted for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Height of the fixed navbar
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  // Technology Icons Components
  const AWSIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.208.072-.08 0-.16-.04-.239-.112-.112-.12-.248-.248-.384-.384-.08-.144-.16-.296-.256-.472-.647.767-1.463 1.151-2.447 1.151-.7 0-1.255-.2-1.671-.599-.416-.4-.624-.936-.624-1.615 0-.712.255-1.287.775-1.727.52-.44 1.215-.66 2.087-.66.287 0 .583.024.895.072.312.048.632.12.967.2v-.648c0-.673-.144-1.151-.424-1.423-.288-.272-.775-.408-1.463-.408-.312 0-.632.04-.967.112-.335.072-.66.168-.975.288-.144.064-.248.104-.32.128-.071.024-.127.032-.167.032-.144 0-.215-.104-.215-.32v-.504c0-.168.024-.295.08-.375.056-.08.16-.16.312-.24.312-.16.688-.295 1.128-.408.44-.112.912-.168 1.415-.168 1.08 0 1.871.248 2.375.744.496.496.751 1.264.751 2.304v3.048zm-3.359 1.256c.279 0 .567-.048.871-.152.304-.104.575-.272.791-.52.128-.152.224-.32.279-.52.056-.2.088-.44.088-.712v-.344c-.248-.064-.504-.112-.768-.144-.264-.032-.528-.048-.792-.048-.56 0-.967.112-1.231.344-.264.232-.4.56-.4.984 0 .408.104.712.32.912.207.2.52.296.842.296zm6.647.872c-.184 0-.312-.032-.391-.104-.08-.064-.144-.2-.2-.391l-2.223-7.308c-.056-.191-.088-.32-.088-.375 0-.152.072-.24.215-.24h.88c.192 0 .32.032.391.104.08.064.136.2.184.391l1.591 6.26 1.479-6.26c.04-.191.104-.327.184-.391.08-.072.207-.104.391-.104h.719c.184 0 .312.032.391.104.08.064.144.2.184.391l1.495 6.348 1.631-6.348c.048-.191.112-.327.184-.391.08-.072.2-.104.391-.104h.832c.144 0 .215.072.215.24 0 .048-.008.104-.024.168-.016.064-.04.144-.08.248l-2.279 7.308c-.056.191-.12.327-.2.391-.08.072-.207.104-.391.104h-.775c-.184 0-.312-.032-.391-.104-.08-.072-.144-.208-.184-.408l-1.463-6.084-1.447 6.084c-.04.2-.104.336-.184.408-.08.072-.207.104-.391.104h-.775zm12.239.168c-.88 0-1.583-.248-2.119-.744-.536-.496-.808-1.192-.808-2.072 0-.912.256-1.648.775-2.2.52-.552 1.215-.832 2.087-.832.816 0 1.463.272 1.943.816.48.544.719 1.24.719 2.088 0 .128-.008.248-.024.36-.016.112-.032.2-.056.264-.024.064-.056.112-.096.144-.04.032-.096.048-.168.048h-4.215c.048.48.2.832.456 1.056.256.224.616.336 1.08.336.232 0 .472-.024.719-.08.248-.056.472-.128.671-.216.096-.04.168-.064.215-.08.048-.016.088-.024.12-.024.104 0 .16.072.16.215v.48c0 .112-.016.2-.056.264-.04.064-.112.128-.215.192-.248.128-.544.232-.888.312-.344.08-.696.12-1.055.12zm-.12-4.36c-.4 0-.719.104-.967.312-.248.208-.4.504-.456.888h2.735c0-.384-.104-.68-.312-.888-.208-.208-.504-.312-.888-.312z"/>
    </svg>
  )

  const KubernetesIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .485.606zm-.833-2.129a.44.44 0 0 1 .173-.756l.002-.011 2.456-1.251a5.197 5.197 0 0 1 .055 2.95l-2.405.639-.007-.001a.44.44 0 0 1-.274-.57zm.173-2.983a.44.44 0 0 1-.173-.756l.007-.001 2.405.639a5.197 5.197 0 0 1-.055 2.95l-2.456-1.251-.002-.011a.44.44 0 0 1 .274-.57zm2.456 5.652l2.456 1.251.002.011a.44.44 0 0 1-.274.57.44.44 0 0 1-.173.756l-.007.001-2.405-.639a5.197 5.197 0 0 1 .055-2.95l.346-.001zm1.685-2.139l-.007-.01.999-2.413a5.171 5.171 0 0 1 2.075 2.597l-2.578.437-.004-.005a.44.44 0 0 1-.485-.606zm.833 2.129a.44.44 0 0 1-.173.756l-.002.011-2.456 1.251a5.197 5.197 0 0 1-.055-2.95l2.405-.639.007.001a.44.44 0 0 1 .274.57zm-.173 2.983a.44.44 0 0 1 .173.756l-.007.001-2.405-.639a5.197 5.197 0 0 1 .055-2.95l2.456 1.251.002.011a.44.44 0 0 1-.274.57zm-2.456-5.652l-2.456-1.251-.002-.011a.44.44 0 0 1 .274-.57.44.44 0 0 1 .173-.756l.007-.001 2.405.639a5.197 5.197 0 0 1-.055 2.95l-.346.001z"/>
    </svg>
  )

  const DockerIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.97-.084 2.944-.25 1.32-.225 2.595-.642 3.763-1.231 1.077-.543 2.061-1.284 2.922-2.201 1.543-1.648 2.426-3.667 2.644-6.036q.068-.022.136-.044c.88-.334 1.543-1.108 1.617-1.2l.211-.33-.302-.235a5.065 5.065 0 00-1.54-.607z"/>
    </svg>
  )

  const TerraformIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.733 0v6.367l5.506 3.178V3.178L8.733 0zM0 3.178v6.367l5.506 3.178V6.356L0 3.178zm8.733 9.545v6.367l5.506 3.178v-6.367l-5.506-3.178zm6.928-4L24 12.723v6.367l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  )

  const GitHubIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )

  const JenkinsIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.355 0c.214 0 .423.01.632.03.627.06 1.24.18 1.83.36.59.18 1.15.42 1.67.72.52.3.99.66 1.41 1.08.42.42.78.89 1.08 1.41.3.52.54 1.08.72 1.67.18.59.3 1.203.36 1.83.02.209.03.418.03.632 0 .214-.01.423-.03.632-.06.627-.18 1.24-.36 1.83-.18.59-.42 1.15-.72 1.67-.3.52-.66.99-1.08 1.41-.42.42-.89.78-1.41 1.08-.52.3-1.08.54-1.67.72-.59.18-1.203.3-1.83.36-.209.02-.418.03-.632.03-.214 0-.423-.01-.632-.03-.627-.06-1.24-.18-1.83-.36-.59-.18-1.15-.42-1.67-.72-.52-.3-.99-.66-1.41-1.08-.42-.42-.78-.89-1.08-1.41-.3-.52-.54-1.08-.72-1.67-.18-.59-.3-1.203-.36-1.83C.01 12.423 0 12.214 0 12c0-.214.01-.423.03-.632.06-.627.18-1.24.36-1.83.18-.59.42-1.15.72-1.67.3-.52.66-.99 1.08-1.41.42-.42.89-.78 1.41-1.08.52-.3 1.08-.54 1.67-.72.59-.18 1.203-.3 1.83-.36C10.932.01 11.141 0 11.355 0z"/>
    </svg>
  )

  const PrometheusIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.64 0-8.4 3.76-8.4 8.4s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4-3.76-8.4-8.4-8.4zm0 2.4c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
    </svg>
  )

  const PythonIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.39-.2.61 0 .22.07.43.2.61.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.39.2-.61 0-.22-.07-.43-.2-.61-.13-.18-.3-.27-.5-.27z"/>
    </svg>
  )

  return (
    <>
      <Head>
        <title>Asttle Joseph - DevOps Engineer</title>
        <meta name="description" content="DevOps Engineer specializing in cloud infrastructure, containerization, and CI/CD automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              AJ
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="text-center"
            >
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100">
                  <Image
                    src="/images/profile/developer-pic-2.jpg"
                    alt="Asttle Joseph"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Asttle Joseph
                </span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                DevOps Engineer specializing in cloud infrastructure, containerization, and CI/CD automation
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>London, UK</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>asttle1997@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+447424727309</span>
                </div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6"
              >
                <a
                  href="mailto:asttle1997@gmail.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="/Asttle_Joseph_CV.pdf"
                  target="_blank"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                      <Image
                        src="/images/profile/developer-pic-2.jpg"
                        alt="Asttle Joseph"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 font-medium">DevOps Engineer</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Versatile DevOps Engineer with over 5 years of experience in the software industry specializing in cloud infrastructure, containerization, CI/CD automation, and observability solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recently completed an MSc in Computing and Technology from Northumbria University with first-class honours. Authorized to work in the UK.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">MSc</div>
                    <div className="text-sm text-gray-600">First Class Honours</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="space-y-12">
              {/* SigTech */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <AWSIcon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">DevOps Engineer</h3>
                      <p className="text-xl text-blue-600 font-semibold">SigTech</p>
                    </div>
                  </div>
                  <div className="text-gray-600 mt-4 md:mt-0">
                    <p className="font-medium">August 2024 - Present</p>
                    <p>London</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Successfully deployed AI services and AI models in cloud environments, establishing infrastructure for model training, serving, and monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented comprehensive observability stack using OpenTelemetry with Jaeger, Prometheus/Mimir, and Fluentbit/Loki across multiple environments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Architected GitOps workflow automation using ArgoCD that standardized deployment processes and enabled automatic image updates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Orchestrated multi-cloud migration strategy achieving 99.99% uptime during the transition process
                  </li>
                </ul>
              </motion.div>

              {/* WorkHall */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <KubernetesIcon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">DevOps Engineer</h3>
                      <p className="text-xl text-blue-600 font-semibold">WorkHall</p>
                    </div>
                  </div>
                  <div className="text-gray-600 mt-4 md:mt-0">
                    <p className="font-medium">July 2022 - April 2023</p>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Migrated to AWS cloud infrastructure resulting in 40% reduction in infrastructure management time
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed EKS clusters using Terraform, cutting provisioning time from 4 hours to 2 hours per cluster
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Created CI/CD pipelines with GitHub Actions, increasing deployment frequency from 10 to 17 times per week
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implemented Istio service mesh resulting in 50% reduction in security breaches
                  </li>
                </ul>
              </motion.div>

              {/* WNS-Vuram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <PythonIcon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Software Engineer</h3>
                      <p className="text-xl text-blue-600 font-semibold">WNS-Vuram</p>
                    </div>
                  </div>
                  <div className="text-gray-600 mt-4 md:mt-0">
                    <p className="font-medium">May 2018 - June 2022</p>
                    <p>Chennai, India</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enabled donations exceeding 1 crore with real-time tracking features, increasing efficiency by 30%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Administered shell scripting for database migration reducing manual effort by more than 50%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Incorporated real-time tracking resulting in 50% increase in app downloads and 100% surge in active users
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Applied code optimization techniques, reducing application size from 15 MB to 5 MB
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600">MSc in Computing and Technology</h4>
                    <p className="text-gray-700 font-medium">First Class Honours</p>
                    <p className="text-gray-600">Northumbria University • London • 2023 - 2024</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Modules: Information Governance and Cyber Security (1st), Database and Analytics Principles (1st)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      AWS
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AWS Solutions Architect Associate C03</h4>
                      <p className="text-gray-600">2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      K8s
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Certified Kubernetes Administrator</h4>
                      <p className="text-gray-600">2024</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Cloud Platforms",
                  skills: ["AWS", "Azure"],
                  color: "from-orange-400 to-red-500",
                  icon: <AWSIcon />
                },
                {
                  category: "Containerization",
                  skills: ["Docker", "Kubernetes (EKS)"],
                  color: "from-blue-400 to-blue-600",
                  icon: <DockerIcon />
                },
                {
                  category: "Infrastructure as Code",
                  skills: ["Terraform", "CloudFormation"],
                  color: "from-purple-400 to-purple-600",
                  icon: <TerraformIcon />
                },
                {
                  category: "CI/CD",
                  skills: ["Jenkins", "GitHub Actions"],
                  color: "from-green-400 to-green-600",
                  icon: <JenkinsIcon />
                },
                {
                  category: "Monitoring & Logging",
                  skills: ["Prometheus", "Grafana", "ELK", "AWS CloudWatch"],
                  color: "from-yellow-400 to-orange-500",
                  icon: <PrometheusIcon />
                },
                {
                  category: "Programming",
                  skills: ["Python", "JavaScript", "Shell Scripting"],
                  color: "from-indigo-400 to-indigo-600",
                  icon: <PythonIcon />
                }
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4 text-white`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Ready to bring your DevOps infrastructure to the next level? Let's discuss how I can help your team achieve scalable, reliable, and efficient cloud solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-blue-100">asttle1997@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-blue-100">+447424727309</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-blue-100">London, UK</p>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://linkedin.com/in/asttle-joseph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://asttle.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:border-white/50 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Asttle Joseph. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
