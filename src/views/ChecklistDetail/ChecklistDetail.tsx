import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink } from 'react-router-dom';
import TaskItem from 'src/components/Checklists/Tasks/TaskItem/TaskItem';

const ChecklistDetail = () => {

    return (
        <div className={`container ${styles["container"]}`}>
            <ChecklistActions
                className={`floating ${styles["checklist-actions"]}`}
            />
            <div className={styles["container-head"]}>
                <NavLink className={styles["btn-back"]} to={'/'} >
                    <IconArrowBack className={styles["icon"]} />
                </NavLink>
                <ChecklistInfo />
                <ChecklistActions className={styles["checklist-actions-sm"]} />
            </div>
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
            <div className={styles["taskslist"]}>
                <TaskItem/>
            </div>
        </div>
    );
}
export default ChecklistDetail;