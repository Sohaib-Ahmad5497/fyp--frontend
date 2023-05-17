import React from 'react'
import '../styles/herosection.css'
import Navigation from './Navigation'
import MainView from './MainView'
function HeroSection() {
    return (
        <>
            <div className='hero-section'>
                {/* <Navigation /> */}
                <MainView />
            </div>
        </>
    )
}

export default HeroSection