import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Field from "src/components/Fields/Field";
import '../Form.css'
import { ChecklistModel } from "src/models/Checklists";
import { useState } from "react";
import IChecklistDialogProps from "./IChecklistDialogProps.props";

const EditChecklistDialog = (props: IChecklistDialogProps) => {
    const { closeDialog } = useDialog();
    const [checklist, setChecklist] = useState(new ChecklistModel(props.checklist));

    const updateChecklist = () => {
        // @todo verify data is right and call update checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
    }

    return <Dialog
        header={
            <h2>
                Editar lista de tareas
            </h2>
        }
        onConfirm={updateChecklist}
        onCancel={closeDialog}
    >
        <form action="put" className="form">
            <Field
                label="Título de la lista"
                type="text"
                placeholder="Escribe el título..."
                value={checklist?.title}
                onChange={(value) => setChecklist({ ...checklist, title: value })}
            />
            <Field
                label="Fecha límite de realización"
                type="date"
                placeholder="dd/mm/aaaa"
                value={checklist?.due_date}
                onChange={(value) => setChecklist({ ...checklist, due_date: value })}
            />
            <Field
                label="Completitud"
                type="toggle"
                placeholder="¿Mostrar progreso de las tareas?"
                value={checklist?.completeness}
                onChange={(value) => setChecklist({ ...checklist, completeness: value })}
            />
        </form>
    </Dialog>
}

export default EditChecklistDialog;