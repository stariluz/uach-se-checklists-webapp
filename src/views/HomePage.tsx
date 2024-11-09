import './HomePage.css'
import Header from 'src/components/Header/Header'
import ChecklistsList from 'src/components/ChecklistsList/ChecklistsList'
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic'

function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <ChecklistsList />
      </div>
      <GoogleLoginLogic />
    </>
  )
}

export default HomePage;