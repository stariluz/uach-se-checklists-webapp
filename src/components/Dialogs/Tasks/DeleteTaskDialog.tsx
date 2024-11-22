import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import ITaskDialogProps from "./ITaskDialogProps.props";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";

const DeleteTaskDialog = (props: ITaskDialogProps) => {
    const { closeDialog } = useDialog();
    const axiosWithAuth = useAxiosWithAuth();

    const deleteTask = async () => {
        try {
            const response = await axiosWithAuth.delete(`/tasks/${props.task?.id}`);
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
                Borrar tarea
            </h2>
        }
        onConfirm={deleteTask}
        onCancel={closeDialog}
    >
        <form action="delete" className="form">
            <p className="center">¿Deseas eliminar la tarea <i>"{props.task?.title || '(esta tarea no tiene título)'}"</i>?</p>
        </form>
    </Dialog>
}

export default DeleteTaskDialog;