import Button from "src/components/Buttons/Button";
import Checkbox from "src/components/Checkbox/Checkbox";
import { IconEdit, IconTrashXFilled } from "src/components/Icons";
import { TaskModel } from "src/models/Tasks";
import styles from './TasksGroups.module.css';

interface Props {
    task?: TaskModel;
}

const TasksGroupOwner = (props: Props) => {
    return <article className={`${styles['task']}`}>
        <Button
            className="btn-danger btn-ghost"
            icon={<IconTrashXFilled />}
        />
        <Button
            className="btn-secondary btn-ghost"
            icon={<IconEdit />}
        />
        <div className={`${styles['task-content']}`}>
            {props.task?.title??'Title missing'}
            <Checkbox/>
        </div>
    </article>
}

export default TasksGroupOwner;