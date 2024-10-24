import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './HomePage.css'
import Button from '../components/Buttons/Button'
import { Icon12Hours, IconPencilPlus } from '@tabler/icons-react'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <div className="card">
        <Button
          icon={<IconPencilPlus/>}
        >
        </Button>
        <Button
          iconPos={"left"}
          icon={<Icon12Hours/>}
          onClick={() => console.log("Button clicked")}
        >
          Holaa
        </Button>
        <Button
          iconPos={"right"}
          icon={<Icon12Hours/>}
        >
          Holaa
        </Button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/HomePage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default HomePage
