import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { useState } from "react";
import { ChecklistModel } from "src/models/Checklists";

const CreateChecklistDialog = () => {
    const { closeDialog } = useDialog();
    const [checklist, setChecklist] = useState(new ChecklistModel());

    const createChecklist = () => {
        // @todo verify data is right and call create checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
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
                value={checklist.title}
                onChange={(value) => setChecklist({ ...checklist, title: value })}
            />
            <Field
                label="Fecha límite de realización"
                type="date"
                placeholder="dd/mm/aaaa"
                value={checklist.due_date}
                onChange={(value) => setChecklist({ ...checklist, due_date: value })}
            />
            <Field
                label="Completitud"
                type="toggle"
                placeholder="¿Mostrar progreso de las tareas?"
                value={checklist.completeness}
                onChange={(value) => setChecklist({ ...checklist, completeness: value })}
            />
        </form>
    </Dialog>
}

export default CreateChecklistDialog;