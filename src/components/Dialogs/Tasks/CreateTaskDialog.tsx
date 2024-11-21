import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import { TaskModel } from "src/models/Tasks";

const CreateTaskDialog = () => {
    const { closeDialog } = useDialog();
    const [task, setTask] = useState(new TaskModel());

    const createTask = () => {
        // @todo verify data is right and call create task methods
        // @todo check exceptions and show alerts with them
        closeDialog();
    }

    return <Dialog
        header={
            <h2>
                Crear tarea
            </h2>
        }
        onConfirm={createTask}
        onCancel={closeDialog}
    >
        <form action="post" className="form">
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

export default CreateTaskDialog;