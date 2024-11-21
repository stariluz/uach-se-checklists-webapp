import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import ITaskDialogProps from "./ITaskDialogProps.props";

const DeleteTaskDialog = (props: ITaskDialogProps) => {
    const { closeDialog } = useDialog();

    const deleteChecklist = () => {
        // @todo verify data is right and call delete checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
    }

    return <Dialog
        header={
            <h2>
                Borrar tarea
            </h2>
        }
        onConfirm={deleteChecklist}
        onCancel={closeDialog}
    >
        <form action="delete" className="form">
            <p className="center">¿Deseas eliminar la lista de tareas <i>"{props.task?.title || '(esta tarea no tiene título)'}"</i>?</p>
        </form>
    </Dialog>
}

export default DeleteTaskDialog;