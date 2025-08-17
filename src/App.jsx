import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import search from './components/search'

const App = () => {
    return(
        <main>
            <div className = "pattern" />

            <div className = "wrapper"> 
                <header>
                    <img src="./Hero-img.png" alt="Hero Banner"/>
                    <h1><span className="text-gradient">Movies </span>You'll Enjoy Without the Hassle</h1>
                </header>

                <search />
            </div>
        </main>
    )
}

export default App
