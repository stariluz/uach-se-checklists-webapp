import reactLogo from '../assets/react.svg'
import './HomePage.css'
import ButtonsDev from '../components/Development/ButtonsDev'
import Header from '../components/Header/Header'

function HomePage() {
  return (
    <>
      <Header/>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ButtonsDev></ButtonsDev>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default HomePage
