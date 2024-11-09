import './HomePage.css'
import Header from '../components/Header/Header'
import ChecklistsList from '../components/ChecklistsList/ChecklistsList'
import GoogleLoginLogic from '../components/Auth/GoogleLoginLogic'

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