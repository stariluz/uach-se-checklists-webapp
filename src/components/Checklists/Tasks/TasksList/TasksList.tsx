import { ChecklistWithGuestModel } from "src/models/Checklists";
import { TaskModel } from "src/models/Tasks";
import { TaskItemColaborator, TaskItemOwner, TaskItemSpectator } from "../TaskItems";
import DemoTasksList from "./DemoTasksList/DemoTasksList";

interface Props {
    className?: string;
    checklist?: ChecklistWithGuestModel;
    tasks?: TaskModel[];
    isDemo?: boolean;
}

const TasksList = (props: Props) => {
    if (props.tasks) {
        if (!props.checklist?.guest?.role) return null;
        if (props.checklist?.guest?.role == 'OWNER') {
            return props.tasks?.map((task) => <TaskItemOwner key={task.id} task={task} />);
        } else if (props.checklist?.guest?.role == 'COLABORATOR') {
            return props.tasks?.map((task) => <TaskItemColaborator key={task.id} task={task} />);
        } else if (props.checklist?.guest?.role == 'SPECTATOR') {
            return props.tasks?.map((task) => <TaskItemSpectator key={task.id} task={task} />);
        } else {
            return null;
        }
    } else if(props.isDemo){
        return <DemoTasksList {...props} />
    }else{
        // @todo Show no results message
        return null;
    }
}
export default TasksList;