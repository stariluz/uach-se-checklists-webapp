import './HomePage.css'
import ChecklistsList from 'src/components/Checklists/ChecklistsList/ChecklistsList'
import Button from 'src/components/Buttons/Button'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus'
import './HomePage.css';
import useDialog from 'src/hooks/useDialog';
import CreateChecklistDialog from 'src/components/Dialogs/Checklists/CreateChecklistDialog';
import { useEffect, useState } from 'react';
import useAxiosWithAuth from 'src/hooks/useAxiosAuth';
import { ChecklistWithGuestModel } from 'src/models/Checklists';

function HomePage() {
  const { showDialog } = useDialog();
  const axiosWithAuth = useAxiosWithAuth();
  const [checklists, setChecklists] = useState<Array<ChecklistWithGuestModel>>([]);
  const controller = new AbortController();

  useEffect(() => {
    getChecklists();
  }, [])
  
  const getChecklists = async () => {
    try {
      const response = await axiosWithAuth.get('/checklists', {
        signal: controller.signal
      });
      console.log("@dev ", response);

      setChecklists(response.data.map((checklist: any) => {
        checklist.guest = checklist.guest[0];
        return new ChecklistWithGuestModel(checklist)
      }
      ));
    } catch (err) {
      console.error(err);
      // @todo Redirect to 404 page
    }
  }


  const openDialogCreateChecklist = () => {
    showDialog(<CreateChecklistDialog onComplete={getChecklists} />);
  }

  return (
    <>
      <div className="container">
        <div className="container-head">
          <Button
            icon={<IconLibraryPlus />}
            iconPos='left'
            onClick={() => openDialogCreateChecklist()}
          >
            Crear nueva checklist
          </Button>
          <div>{/* @todo Select control */}</div>
        </div>
        <ChecklistsList onComplete={getChecklists} checklist_items={checklists} isDemo={false} />
      </div>
    </>
  );
}

export default HomePage;