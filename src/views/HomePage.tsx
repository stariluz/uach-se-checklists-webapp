import './HomePage.css'
import Header from 'src/components/Header/Header'
import ChecklistsList from 'src/components/ChecklistsList/ChecklistsList'
import Button from 'src/components/Buttons/Button'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus'

function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-head">
          <Button
            icon={<IconLibraryPlus />}
            iconPos='left'
          >
            Crear nueva checklist
          </Button>
          <div>{/* @todo Select control */}</div>
        </div>
        <ChecklistsList />
      </div>
    </>
  )
}

export default HomePage;