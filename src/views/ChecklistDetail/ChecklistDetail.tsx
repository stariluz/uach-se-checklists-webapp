import Button from 'src/components/Buttons/Button';
import styles from './ChecklistDetail.module.css'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
import ChecklistInfo from 'src/components/Checklists/ChecklistInfo/ChecklistInfo';
import { IconArrowBack, IconPlus } from 'src/components/Icons';
import ChecklistActions from 'src/components/Checklists/ChecklistActions/ChecklistActions';
import { NavLink } from 'react-router-dom';
import { useDemoChecklist } from 'src/services/Checklists';
import TasksList from 'src/components/Checklists/Tasks/TasksList/TasksList';

interface Props {
    className?: string;
}
const ChecklistDetail = (props: Props) => {
    // @todo Request checklist with the id in the params of the url
    //       Remove the Demo Checklist when it is done.
    const checklist = useDemoChecklist({role:"OWNER"});
    if (!checklist.guest?.role) {
        // @todo Redirect to 404 page
        return null;
    }
    return (
        <div className={`container ${props.className??''} ${styles["container"]}`}>
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
            <div className={styles["taskslist-container"]}>
                <TasksList isDemo={true} checklist={checklist}/>
            </div>

        </div >
    );
}
export default ChecklistDetail;