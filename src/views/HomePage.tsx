import reactLogo from '../assets/react.svg'
import './HomePage.css'
import ButtonsDev from '../components/Development/ButtonsDev'
import Header from '../components/Header/Header'
import ChecklistItem from '../components/ChecklistItem/ChecklistItem'

function HomePage() {
  return (
    <>
      <Header/>
      <ChecklistItem/>
      <h1>SSLTC</h1>
      <ButtonsDev></ButtonsDev>
    </>
  )
}

export default HomePage
