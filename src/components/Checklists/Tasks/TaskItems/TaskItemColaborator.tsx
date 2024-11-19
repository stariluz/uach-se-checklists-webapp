import Checkbox from "src/components/Checkbox/Checkbox";
import { TaskModel } from "src/models/Tasks";
import styles from './TaskItems.module.css';

interface Props {
    task?: TaskModel;
}

const TaskItemColaborator = (props: Props) => {
    return <article className={`${styles['task']}`}>
        <div className={`${styles['task-content']}`}>
            {props.task?.title??'Title missing'}
            <Checkbox/>
        </div>
    </article>
}

export default TaskItemColaborator;