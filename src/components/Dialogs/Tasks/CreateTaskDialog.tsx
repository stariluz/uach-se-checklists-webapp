import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import { TaskModel } from "src/models/Tasks";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

interface CreateProps {
    onComplete?: any;
    checklistId?: number;
}

const CreateTaskDialog = (props: CreateProps) => {
    const { closeDialog } = useDialog();
    const [task, setTask] = useState(new TaskModel());
    const axiosWithAuth = useAxiosWithAuth();

    const createTask = async () => {

        try {
            const response = await axiosWithAuth.post('/tasks', {
                ...task,
                checklistId: props.checklistId,
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