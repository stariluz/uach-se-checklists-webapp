import './HomePage.css'
import ButtonsDev from '../components/Development/ButtonsDev'
import Header from 'src/components/Header/Header'
import ChecklistItem from 'src/components/ChecklistItem/ChecklistItem'
import ChecklistActions from 'src/components/ChecklistActions/ChecklistActions'
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic'

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
      <GoogleLoginLogic />
    </>
  )
}

export default HomePage
