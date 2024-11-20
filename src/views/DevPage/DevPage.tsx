import './DevPage.css'
import ButtonsDev from 'src/components/Development/ButtonsDev'
import Header from 'src/components/Header/Header'
import ChecklistItem from 'src/components/Checklists/ChecklistItem/ChecklistItem'
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic'
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
