import './DevPage.css'
import ButtonsDev from '../components/Development/ButtonsDev'
import Header from '../components/Header/Header'
import ChecklistItem from '../components/Checklists/ChecklistItem/ChecklistItem'
import GoogleLoginLogic from '../components/Auth/GoogleLoginLogic'
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions'

function DevPage() {
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

export default DevPage
