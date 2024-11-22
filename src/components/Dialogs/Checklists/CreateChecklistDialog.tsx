import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import { ChecklistModel } from "src/models/Checklists";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

interface CreateProps {
    onCreate?: any;
}
const CreateChecklistDialog = (props: CreateProps) => {
    const { closeDialog } = useDialog();
    const [checklist, setChecklist] = useState(new ChecklistModel());
    const axiosWithAuth = useAxiosWithAuth();

    const createChecklist = async () => {

        try {
            const response = await axiosWithAuth.post('/checklists', {
                ...checklist
            });
            if (props.onCreate) props.onCreate();
            console.log("@dev ", response);
            closeDialog();
        } catch (err) {
            console.error(err);
            // @todo add error alert
        }
    }

    const changeTitle = (value: string) => {
        setChecklist((prev) => {
            console.log(prev, value);
            return { ...prev, title: value }
        })
    }
    const changeDueDate = (value: string) => {
        setChecklist((prev) => {
            console.log(prev, value);
            return { ...prev, due_date: new Date(value) }
        })
    }
    const changeCompleteness = (value: boolean) => {
        setChecklist((prev) => {
            console.log(prev, value);
            return { ...prev, completeness: value }
        })
    }

    return <Dialog
        header={
            <h2>
                Crear lista de tareas
            </h2>
        }
        onConfirm={createChecklist}
        onCancel={closeDialog}
    >
        <form action="post" className="form">
            <Field
                label="Título de la lista"
                type="text"
                placeholder="Escribe el título..."
                name="title"
                value={checklist.title}
                onChange={(value) => changeTitle(value)}
            />
            <Field
                label="Fecha límite de realización"
                type="date"
                placeholder="dd/mm/aaaa"
                name="due_date"
                value={checklist.due_date}
                onChange={(value) => changeDueDate(value)}
            />
            <Field
                label="Completitud"
                type="toggle"
                placeholder="¿Mostrar progreso de las tareas?"
                name="completeness"
                value={checklist.completeness}
                onChange={(value) => changeCompleteness(value)}
            />
        </form>
    </Dialog>
}

export default CreateChecklistDialog;