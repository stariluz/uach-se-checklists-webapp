import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import Field from "src/components/Fields/Field";

const CreateChecklistDialog = () => {
    const { closeDialog } = useDialog();

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
            />
            <Field
                label="Fecha límite de realización"
                type="date"
                placeholder="dd/mm/aaaa"
            />
            <Field
                label="Completitud"
                type="toggle"
                placeholder="¿Mostrar progreso de las tareas?"
            />
        </form>
    </Dialog>
}

export default CreateChecklistDialog;