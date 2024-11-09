import './HomePage.css'
import Header from '../components/Header/Header'
import ChecklistsList from '../components/ChecklistsList/ChecklistsList'

function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <ChecklistsList />
      </div>
    </>
  )
}

export default HomePage;