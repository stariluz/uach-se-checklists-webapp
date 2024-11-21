import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink } from 'react-router-dom';
import { useDemoChecklist } from 'src/services/Checklists';
import TasksList from 'src/components/Checklists/Tasks/TasksList/TasksList';
import useDialog from 'src/hooks/useDialog';
import { ChecklistWithGuestModel } from 'src/models/Checklists';
import LeaveChecklistDialog from 'src/components/Dialogs/Checklists/LeaveChecklistDialog';
import DeleteChecklistDialog from 'src/components/Dialogs/Checklists/DeleteChecklistDialog';
import EditChecklistDialog from 'src/components/Dialogs/Checklists/EditChecklistDialog';
import CreateTaskDialog from 'src/components/Dialogs/Tasks/CreateTaskDialog';
import ShareChecklistDialog from 'src/components/Dialogs/Checklists/ShareChecklistDialog';

interface Props {
    className?: string;
}
const ChecklistDetail = (props: Props) => {
    const { showDialog } = useDialog();
    // @todo Request checklist with the id in the params of the url
    //       Remove the Demo Checklist when it is done.
    const checklist = useDemoChecklist({ role: "OWNER" });
    if (!checklist.guest?.role) {
        // @todo Redirect to 404 page
        return null;
    }

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
        showDialog(<CreateTaskDialog />);
    }

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