import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import IChecklistDialogProps from "./IChecklistDialogProps.props";

const DeleteChecklistDialog = (props: IChecklistDialogProps) => {
    const { closeDialog } = useDialog();

    const deleteChecklist = () => {
        // @todo verify data is right and call delete checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
    }

    return <Dialog
        header={
            <h2>
                Borrar lista de tareas
            </h2>
        }
        onConfirm={deleteChecklist}
        onCancel={closeDialog}
    >
        <form action="delete" className="form">
            <p className="center">¿Deseas eliminar la lista de tareas <i>"{props.checklist?.title || '(esta checklist no tiene titulo)'}"</i>?</p>
        </form>
    </Dialog>
}

export default DeleteChecklistDialog;