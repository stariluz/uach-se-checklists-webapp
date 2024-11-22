import Button from "src/components/Buttons/Button";
import Checkbox from "src/components/Checkbox/Checkbox";
import { IconEdit, IconTrashXFilled } from "src/components/Icons";
import { TaskModel } from "src/models/Tasks";
import styles from './TaskItems.module.css';

interface Props {
    task?: TaskModel;
    onEdit?: () => void;
    onDelete?: () => void;
    onChangeComplete?: (value: boolean) => void;
}

const TaskItemOwner = (props: Props) => {
    const handleEdit = () => {
        if (props.onEdit) props.onEdit();
    }
    const handleDelete = () => {
        if (props.onDelete) props.onDelete();
    }
    return <article className={`${styles['task']}`}>
        <Button
            className="btn-danger btn-ghost"
            icon={<IconTrashXFilled />}
            onClick={handleDelete}
        />
        <Button
            className="btn-secondary btn-ghost"
            icon={<IconEdit />}
            onClick={handleEdit}
        />
        <div className={`${styles['task-content']}`}>
            {props.task?.title ?? 'Title missing'}
            <Checkbox checked={props.task?.is_complete} onChange={props.onChangeComplete} />
        </div>
    </article>
}

export default TaskItemOwner;