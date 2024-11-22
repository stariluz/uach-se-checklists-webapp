import { ChecklistWithGuestModel } from "src/models/Checklists";
import { TaskModel } from "src/models/Tasks";
import { TaskItemColaborator, TaskItemOwner, TaskItemSpectator } from "../TaskItems";
import DemoTasksList from "./DemoTasksList/DemoTasksList";
import DeleteTaskDialog from "src/components/Dialogs/Tasks/DeleteTaskDialog";
import EditTaskDialog from "src/components/Dialogs/Tasks/EditTaskDialog";
import useDialog from "src/hooks/useDialog";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

interface Props {
    className?: string;
    checklist?: ChecklistWithGuestModel;
    tasks?: TaskModel[];
    isDemo?: boolean;
    onUpdate?: any;
}

const TasksList = (props: Props) => {
    const { showDialog } = useDialog();
    const axiosWithAuth = useAxiosWithAuth();
    const openDialogEditTask = (task_item: TaskModel) => {
        showDialog(<EditTaskDialog onComplete={props.onUpdate} task={task_item} />);
    }
    const openDialogDeleteTask = (task_item: TaskModel) => {
        showDialog(<DeleteTaskDialog onComplete={props.onUpdate} task={task_item} />);
    }
    const changeCompleteTask = async (task: TaskModel, value:boolean) => {
        try {
            const response = await axiosWithAuth.patch(`/tasks/changeComplete/${task?.id}`, {
                is_complete: value,
                completed_at: value?new Date():undefined,
            });
            if (props.onUpdate) props.onUpdate();
            console.log("@dev ", response);
        } catch (err) {
            console.error(err);
            // @todo add error alert
        }

    }
    if (props.tasks && props.tasks.length > 0) {
        if (!props.checklist?.guest?.role) return null;
        if (props.checklist?.guest?.role == 'OWNER') {
            return props.tasks?.map((task) => <TaskItemOwner
                onEdit={() => openDialogEditTask(task)}
                onDelete={() => openDialogDeleteTask(task)}
                onChangeComplete={(value) => changeCompleteTask(task, value)}
                key={task.id}
                task={task}
            />);
        } else if (props.checklist?.guest?.role == 'COLABORATOR') {
            return props.tasks?.map((task) => <TaskItemColaborator
                onChangeComplete={(value) => changeCompleteTask(task, value)}
                key={task.id}
                task={task}
            />);
        } else if (props.checklist?.guest?.role == 'SPECTATOR') {
            return props.tasks?.map((task) => <TaskItemSpectator key={task.id} task={task} />);
        } else {
            return null;
        }
    } else if (props.isDemo) {
        return <DemoTasksList {...props} />
    } else {
        if (!props.checklist?.guest?.role) return null;
        if (props.checklist?.guest?.role == 'OWNER') {
            return <div className='init-list'>
                ¡Agrega la primer tarea a tu checklist nueva!
            </div>;
        } else if (props.checklist?.guest?.role == 'COLABORATOR') {

            return <div className='init-list'>
                Esta checklist aún no tiene tareas.
            </div>;
        } else if (props.checklist?.guest?.role == 'SPECTATOR') {

            return <div className='init-list'>
                Esta checklist aún no tiene tareas.
            </div>;
        } else {
            return null;
        }
    }
}
export default TasksList;