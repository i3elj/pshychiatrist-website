import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.tsx'
import HeroSection from './components/HeroSection/HeroSection.tsx'
import AboutUsSection from './components/AboutUsSection/AboutUsSection.tsx'
import HowSection from './components/HowSection/HowSection.tsx'
import ProfessionalsSection from './components/Professionals/ProfessionalsSection.tsx'
import './App.css'

const WaveSeparator = () => (
	<svg width="2000" height="147" viewBox="0 0 1728 147" fill="none">
		<path d="M1648 124.852L1728 146.114V1.52588e-05L-192 1.52588e-05V114.171L-112 108.88C-32.0001 103.191 128 93.2084 288 76.9375C448 61.2654 608 39.3046 768 29.0229C928 18.342 1088 18.342 1248 39.6041C1408 61.2654 1568 103.191 1648 124.852Z" fill="#F2BDB9"/>
	</svg>
)

const WaveSeparator2 = () => (
	<svg width="2000" height="312" viewBox="0 0 1728 312" fill="none" style={{placeSelf: "center"}}>
		<path d="M66.6667 101.313L0 96.0123V311.5H2000V0L1933.33 37.3048C1866.67 75.0096 1733.33 149.019 1600 197.325C1466.67 245.031 1333.33 267.034 1200 234.73C1066.67 203.026 933.333 117.015 800 90.7116C666.667 64.0082 533.333 96.0123 400 106.714C266.667 117.015 133.333 107.014 66.6667 101.313Z" fill="#E7A656"/>
	</svg>
)

const App = () => (
	<>
		<img src="src/assets/background.jpeg" />
		<Navbar/>
		<HeroSection />
		<button id="tour-button" class="btn-secondary">Start Tour</button>
		<AboutUsSection />
		<HowSection />
		<WaveSeparator />
		<ProfessionalsSection />
		<WaveSeparator2 />
	</>
)

export default App
