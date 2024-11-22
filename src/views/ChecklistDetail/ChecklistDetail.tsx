import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDemoChecklist } from 'src/services/Checklists';
import TasksList from 'src/components/Checklists/Tasks/TasksList/TasksList';
import useDialog from 'src/hooks/useDialog';
import { ChecklistWithGuestModel } from 'src/models/Checklists';
import LeaveChecklistDialog from 'src/components/Dialogs/Checklists/LeaveChecklistDialog';
import DeleteChecklistDialog from 'src/components/Dialogs/Checklists/DeleteChecklistDialog';
import EditChecklistDialog from 'src/components/Dialogs/Checklists/EditChecklistDialog';
import CreateTaskDialog from 'src/components/Dialogs/Tasks/CreateTaskDialog';
import ShareChecklistDialog from 'src/components/Dialogs/Checklists/ShareChecklistDialog';
import { useEffect, useState } from 'react';
import useAxiosWithAuth from 'src/hooks/useAxiosAuth';
import useAuth from 'src/hooks/useAuth';

interface Props {
    className?: string;
}
const ChecklistDetail = (props: Props) => {
    const { showDialog } = useDialog();
    const { auth } = useAuth();
    const {checklist_id, user_id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosWithAuth = useAxiosWithAuth();
    const [checklist, setChecklist] = useState<ChecklistWithGuestModel>();
    const controller = new AbortController();

    const getChecklist = async () => {
        try {
            const response = await axiosWithAuth.get(`/checklist/${user_id}/${checklist_id}`, {
                signal: controller.signal
            });
            console.log("@dev ", response);
            const _checklist = response.data.checklist.guest;
            if (_checklist.userId == auth?.user?.id) {
                _checklist.guest = {
                    role: 'OWNER'
                };
            } else if (_checklist.guest?.role) {
                navigate('/', {
                    state: {
                        from: location,
                    },
                    replace: true,
                })
            }
            setChecklist(new ChecklistWithGuestModel(_checklist));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getChecklist();
        // @todo Redirect to 404 page
    }, [])


    const openDialogEditChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<EditChecklistDialog checklist={checklist_item} />);
    }
    const openDialogDeleteChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<DeleteChecklistDialog checklist={checklist_item} />);
    }
    const openDialogLeaveChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<LeaveChecklistDialog checklist={checklist_item} />);
    }
    const openDialogShareChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<ShareChecklistDialog checklist_id={checklist_item.id} />);
    }

    const openDialogCreateTask = () => {
        showDialog(<CreateTaskDialog onCreate={getChecklist} />);
    }
    if (!checklist) return null;
    return (
        <div className={`container ${props.className ?? ''} ${styles["container"]}`}>
            <ChecklistActions
                className={`floating ${styles["checklist-actions"]}`}
                role={checklist.guest?.role}
                onShare={() => openDialogShareChecklist(checklist)}
                onEdit={() => openDialogEditChecklist(checklist)}
                onDelete={() => openDialogDeleteChecklist(checklist)}
                onLeave={() => openDialogLeaveChecklist(checklist)} />
            <div className={styles["container-head"]}>
                <NavLink className={styles["btn-back"]} to={'/'} >
                    <IconArrowBack className={styles["icon"]} />
                </NavLink>
                <ChecklistInfo checklist={checklist} />
                <ChecklistActions
                    className={styles["checklist-actions-sm"]}
                    role={checklist.guest?.role}
                    onShare={() => openDialogShareChecklist(checklist)}
                    onEdit={() => openDialogEditChecklist(checklist)}
                    onDelete={() => openDialogDeleteChecklist(checklist)}
                    onLeave={() => openDialogLeaveChecklist(checklist)} />
            </div>
            {checklist.guest?.role == 'OWNER' ?
                <div className={styles["container-actions"]}>
                    <Button
                        icon={<IconPlus />}
                        iconPos='left'
                        onClick={() => { openDialogCreateTask() }}
                    >
                        Nueva tarea
                    </Button>

                    {/*
                    @update Discarted for prototype November 20
                    */}
                    {/* <Button
                        icon={<IconLibraryPlus />}
                        iconPos='left'
                        onClick={() => { }}
                    >
                        Nuevo grupo de tareas
                    </Button> */}
                    <div>{/*
                    @todo Sort by
                    @update Discarted for prototype November 20
                    */}</div>
                </div>
                :
                null
            }
            <div className={styles["taskslist-container"]}>
                <TasksList isDemo={true} checklist={checklist} />
            </div>

        </div >
    );
}
export default ChecklistDetail;