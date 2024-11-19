import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink } from 'react-router-dom';
import { TaskItemColaborator, TaskItemOwner, TaskItemSpectator } from 'src/components/Checklists/Tasks/TaskItems';
import { useDemoChecklist } from 'src/services/Checklists';
import { useDemoTasks } from 'src/services/Tasks';
import { ChecklistWithGuestModel } from 'src/models/Checklists';
import { TaskModel } from 'src/models/Tasks';

interface Props {
    className?: string;
}
const TasksList = ({checklist, tasks}:{checklist?: ChecklistWithGuestModel, tasks?: TaskModel[]}) => {
    if (!checklist?.guest?.role) return null;
    if (checklist?.guest?.role == 'OWNER') {
        return tasks?.map((task) => <TaskItemOwner key={task.id} task={task} />);
    } else if (checklist?.guest?.role == 'COLABORATOR') {
        return tasks?.map((task) => <TaskItemColaborator key={task.id} task={task} />);
    } else if (checklist?.guest?.role == 'SPECTATOR') {
        return tasks?.map((task) => <TaskItemSpectator key={task.id} task={task} />);
    } else {
        return null;
    }
}
const ChecklistDetail = (props: Props) => {
    const checklist = useDemoChecklist({role:"OWNER"});
    const tasks = useDemoTasks(5);
    if (!checklist.guest?.role) {
        // @todo Redirect to 404 page
        return null;
    }
    return (
        <div className={`container ${props.className} ${styles["container"]}`}>
            <ChecklistActions
                role={checklist.guest?.role}
                className={`floating ${styles["checklist-actions"]}`}
            />
            <div className={styles["container-head"]}>
                <NavLink className={styles["btn-back"]} to={'/'} >
                    <IconArrowBack className={styles["icon"]} />
                </NavLink>
                <ChecklistInfo checklist={checklist} />
                <ChecklistActions role={checklist.guest?.role} className={styles["checklist-actions-sm"]} />
            </div>
            {checklist.guest?.role == 'OWNER' ?
                <div className={styles["container-actions"]}>
                    <Button
                        icon={<IconPlus />}
                        iconPos='left'
                        onClick={() => { }}
                    >
                        Nueva tarea
                    </Button>

                    <Button
                        icon={<IconLibraryPlus />}
                        iconPos='left'
                        onClick={() => { }}
                    >
                        Nuevo grupo de tareas
                    </Button>
                    <div>{/* @todo Sort by */}</div>
                </div>
                :
                null
            }
            <div className={styles["taskslist"]}>
                <TasksList checklist={checklist} tasks={tasks} />

            </div>

        </div >
    );
}
export default ChecklistDetail;