import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import Input from "src/components/Input/Input";
import '../Form.css'

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
            <Input
                type="text"
                placeholder="Escribe el título..."
            />
            <Input
                type="date"
                placeholder="dd/mm/aaaa"
            />
            <Input
                type="toggle"
                placeholder="¿Mostrar progreso de las tareas?"
            />
        </form>
    </Dialog>
}

export default CreateChecklistDialog;