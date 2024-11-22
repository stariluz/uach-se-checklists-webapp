import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import ITaskDialogProps from "./ITaskDialogProps.props";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

const EditTaskDialog = (props: ITaskDialogProps) => {
    const { closeDialog } = useDialog();
    const [task, setTask] = useState(props.task);
    const axiosWithAuth = useAxiosWithAuth();

    const editTask = async () => {

        try {
            const response = await axiosWithAuth.patch(`/tasks/${task?.id}`, {
                ...task,
            });
            if (props.onComplete) props.onComplete();
            console.log("@dev ", response);
            closeDialog();
        } catch (err) {
            console.error(err);
            // @todo add error alert
        }
    }

    return <Dialog
        header={
            <h2>
                Editar tarea
            </h2>
        }
        onConfirm={editTask}
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