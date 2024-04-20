import "./App.css"
import { useState } from "react"
import { Icon } from "@/shared/ui"
import ViteIcon from "./vite.svg?react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <ViteIcon className="logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <Icon name="common/react" className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(prev => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
