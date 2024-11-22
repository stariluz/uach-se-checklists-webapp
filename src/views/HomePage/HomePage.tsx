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
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
  const { showDialog } = useDialog();
  const axiosWithAuth = useAxiosWithAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  const [checklists, setChecklists] = useState<Array<ChecklistWithGuestModel>>([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosWithAuth.get('/checklists', {
          signal: controller.signal
        });
        console.log(response);
        if (isMounted) {
          setChecklists(response.data.map((checklist:any) => new ChecklistWithGuestModel(checklist)));
        }
      } catch (err) {
        console.error(err);
        // navigate('/login', { state: { from: location }, replace: true });
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

  const openDialogCreateChecklist = () => {
    showDialog(<CreateChecklistDialog />);
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
        <ChecklistsList checklist_items={checklists} isDemo={true} />
      </div>
    </>
  );
}

export default HomePage;