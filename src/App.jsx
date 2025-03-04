import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'


const App = () => {
  return (
    <>
        <Background />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
    </>
  )
}

export default App