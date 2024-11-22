import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { TaskModel } from 'src/models/Tasks';

interface Props {
    className?: string;
}
const ChecklistDetail = (props: Props) => {
    const { showDialog } = useDialog();
    const { auth } = useAuth();
    const { userId, checklistId } = useParams();
    const axiosWithAuth = useAxiosWithAuth();
    const [checklist, setChecklist] = useState<ChecklistWithGuestModel>();
    const [tasks, setTasks] = useState<Array<TaskModel>>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const controller = new AbortController();

    const getChecklist = async () => {
        try {
            const response = await axiosWithAuth.get(`/checklists/${userId}/${checklistId}`, {
                signal: controller.signal
            });
            console.log("@dev ", response, auth?.user?.id);

            const _checklist = response.data.checklist;
            const _tasks = response.data.checklist.task;

            _checklist.guest = _checklist.guest[0];
            setChecklist(new ChecklistWithGuestModel(_checklist));
            console.log("@dev", checklist);

            setTasks(_tasks.map((task: any) => {
                return new TaskModel(task)
            }));
            console.log("@dev", tasks);
        } catch (err) {
            console.error(err);
            // @todo Redirect to 404 page
        }
    }
    const exitChecklist = () => {
        navigate('/', {
            state: {
                from: location,
            },
            replace: true,
        });
    }

    useEffect(() => {
        getChecklist();
    }, [])


    const openDialogEditChecklist = (checklist: ChecklistWithGuestModel) => {
        showDialog(<EditChecklistDialog onComplete={getChecklist} checklist={checklist} />);
    }
    const openDialogDeleteChecklist = (checklist: ChecklistWithGuestModel) => {
        showDialog(<DeleteChecklistDialog onComplete={exitChecklist} checklist={checklist} />);
    }
    const openDialogLeaveChecklist = (checklist: ChecklistWithGuestModel) => {
        showDialog(<LeaveChecklistDialog onComplete={getChecklist} checklist={checklist} />);
    }
    const openDialogShareChecklist = (checklist: ChecklistWithGuestModel) => {
        showDialog(<ShareChecklistDialog onComplete={getChecklist} checklistId={checklist.id} />);
    }

    const openDialogCreateTask = () => {
        showDialog(<CreateTaskDialog checklistId={checklist?.id} onComplete={getChecklist} />);
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
                <TasksList onUpdate={getChecklist} checklist={checklist} tasks={tasks} isDemo={false} />
            </div>

        </div >
    );
}
export default ChecklistDetail;