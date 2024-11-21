import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import ITaskDialogProps from "./ITaskDialogProps.props";
import { TaskModel } from "src/models/Tasks";

const EditTaskDialog = (props: ITaskDialogProps) => {
    const { closeDialog } = useDialog();
    const [task, setTask] = useState(new TaskModel(props.task));

    const updateTask = () => {
        // @todo verify data is right and call update checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
    }

    return <Dialog
        header={
            <h2>
                Editar tarea
            </h2>
        }
        onConfirm={updateTask}
        onCancel={closeDialog}
    >
        <form action="put" className="form">
            <Field
                label="Título de la tarea"
                type="text"
                placeholder="Escribe el título..."
                value={task.title}
                onChange={(value) => setTask({ ...task, title: value })}
            />
            <Field
                label="Fecha límite de realización"
                type="date"
                placeholder="dd/mm/aaaa"
                value={task.due_date}
                onChange={(value) => setTask({ ...task, due_date: value })}
            />
        </form>
    </Dialog>
}

export default EditTaskDialog;