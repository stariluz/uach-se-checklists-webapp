import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import IChecklistDialogProps from "./IChecklistDialogProps.props";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

const DeleteChecklistDialog = (props: IChecklistDialogProps&{needNavigate?:boolean}) => {
    const { closeDialog } = useDialog();
    const axiosWithAuth = useAxiosWithAuth();

    const deleteChecklist = async () => {
        try {
            const response = await axiosWithAuth.delete(`/checklists/${props.checklist?.id}`);
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
                Borrar lista de tareas
            </h2>
        }
        onConfirm={deleteChecklist}
        onCancel={closeDialog}
    >
        <form action="delete" className="form">
            <p className="center">¿Deseas eliminar la lista de tareas <i>"{props.checklist?.title || '(esta checklist no tiene título)'}"</i>?</p>
        </form>
    </Dialog>
}

export default DeleteChecklistDialog;