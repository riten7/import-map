import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LPGridLayout } from "storybook-components";

const gridProps = {
  layouts: { lg: [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 4, h: 2},
    { i: "dark-magician", x: 1, y: 0, w: 4, h: 2 },
    { i: "kuriboh", x: 2, y: 0, w: 4, h: 2 },
    { i: "spell-caster", x: 3, y: 0, w: 4, h: 2 },
    { i: "summoned-skull", x: 4, y: 0, w: 4, h: 2 },
    { i: "summoned-banger", x: 5, y: 0, w: 4, h: 2 },
  ] }
};

function App() {
  console.log({ LPGridLayout });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <LPGridLayout label="test" gridProps={gridProps} />
    </>
  )
}

export default App
