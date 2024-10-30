import reactLogo from '../assets/react.svg'
import './HomePage.css'
import ButtonsDev from '../components/Development/ButtonsDev'
import Header from '../components/Header/Header'
import ChecklistItem from '../components/ChecklistItem/ChecklistItem'
import ChecklistActions from '../components/ChecklistActions/ChecklistActions'

function HomePage() {
  return (
    <>
      <Header />
      <ChecklistItem />

      <ChecklistActions />
      <div className='relative container'>
        <ChecklistActions className='floating' />
        <ChecklistActions className='floating horizontal' />
      </div>
      <h1>SSLTC</h1>
      <ButtonsDev></ButtonsDev>
    </>
  )
}

export default HomePage
