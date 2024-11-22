import Checkbox from "src/components/Checkbox/Checkbox";
import { TaskModel } from "src/models/Tasks";
import styles from './TaskItems.module.css';

interface Props {
    task?: TaskModel;
    onChangeComplete?: (value: boolean) => void;
}

const TaskItemColaborator = (props: Props) => {
    return <article className={`${styles['task']}`}>
        <div className={`${styles['task-content']}`}>
            {props.task?.title ?? 'Title missing'}
            <Checkbox checked={props.task?.is_complete} onChange={props.onChangeComplete} />
        </div>
    </article>
}

export default TaskItemColaborator;