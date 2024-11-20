import './HomePage.css'
import ChecklistsList from 'src/components/Checklists/ChecklistsList/ChecklistsList'
import Button from 'src/components/Buttons/Button'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus'
import useDialog from 'src/hooks/useDialog';
import CreateChecklistDialog from 'src/components/Dialogs/CreateChecklistDialog/CreateChecklistDialog';

function HomePage() {
  const { showDialog } = useDialog();
  const openDialogCreateChecklist=()=>{
    console.log("show dialog")
    showDialog(<CreateChecklistDialog/>);
  }
  return (
    <>
      <div className="container">
        <div className="container-head">
          <Button
            icon={<IconLibraryPlus />}
            iconPos='left'
            onClick={()=>openDialogCreateChecklist()}
          >
            Crear nueva checklist
          </Button>
          <div>{/* @todo Select control */}</div>
        </div>
        <ChecklistsList />
      </div>
    </>
  );
}

export default HomePage;