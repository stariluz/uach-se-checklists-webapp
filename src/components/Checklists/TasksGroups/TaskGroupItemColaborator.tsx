import Checkbox from "src/components/Checkbox/Checkbox";
import { TaskModel } from "src/models/Tasks";
import styles from './TasksGroups.module.css';

interface Props {
    task?: TaskModel;
}

const TasksGroupColaborator = (props: Props) => {
    return <article className={`${styles['task']}`}>
        <div className={`${styles['task-content']}`}>
            {props.task?.title??'Title missing'}
            <Checkbox/>
        </div>
    </article>
}

export default TasksGroupColaborator;