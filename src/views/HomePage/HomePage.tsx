import './HomePage.css'
import ChecklistsList from 'src/components/ChecklistsList/ChecklistsList'
import Button from 'src/components/Buttons/Button'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus'
import useDialog from 'src/hooks/useDialog';
import Dialog from 'src/components/Dialogs/Dialog';

function HomePage() {
  const { showDialog, closeDialog } = useDialog();
  const createChecklist=()=>{
    // @todo verify data is right and call create checklist methods
    // @todo check exceptions and show alerts with them
    closeDialog();
  }
  const openDialogCreateChecklist=()=>{
    console.log("show dialog")
    showDialog(
      <Dialog
          header={
              <h2>
                  Titulo del dialog
              </h2>
          }
          onConfirm={createChecklist}
          onCancel={closeDialog}
      >
          Este es un dialog
      </Dialog>
    );
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
  )
}

export default HomePage;