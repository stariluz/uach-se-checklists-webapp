import { ChecklistWithGuestModel } from "src/models/Checklists";
import { TaskModel } from "src/models/Tasks";
import { TaskItemColaborator, TaskItemOwner, TaskItemSpectator } from "../TaskItems";
import { useDemoTasks } from "src/services/Tasks";
import { useEffect } from "react";
import TasksList from "../TasksList";

interface Props {
    className?: string;
    checklist?: ChecklistWithGuestModel;
    tasks?: TaskModel[];
}

const DemoTasksList = (props: Props) => {
    const tasks = useDemoTasks(5);
    useEffect(() => {
        console.warn("@dev Displaying demo tasks items");
    }, []);
    return (
        <TasksList className={props.className} checklist={props.checklist} tasks={tasks} />
    );
}
export default DemoTasksList;