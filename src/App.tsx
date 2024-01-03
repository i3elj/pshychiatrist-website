import { useState } from 'react'
import './App.css'

function Button() {
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(c => c + 1)}>
			   count is {count}
		   </button>
}

function App() {
    return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<Button />
				<p>Edit <code>src/App.tsx</code> and save to test HMR</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
    )
}

export default App
