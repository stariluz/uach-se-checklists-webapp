import './DevPage.css'
import ButtonsDev from '../../components/Development/ButtonsDev'
import Header from '../../components/Header/Header'
import ChecklistItem from '../../components/ChecklistItem/ChecklistItem'
import ChecklistActions from '../../components/ChecklistActions/ChecklistActions'
import GoogleLoginLogic from '../../components/Auth/GoogleLoginLogic'

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
