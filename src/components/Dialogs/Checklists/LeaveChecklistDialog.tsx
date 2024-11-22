import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import IChecklistDialogProps from "./IChecklistDialogProps.props";
import useAxiosWithAuth from "src/hooks/useAxiosAuth";
import useAuth from "src/hooks/useAuth";

const LeaveChecklistDialog = (props: IChecklistDialogProps) => {
    const { closeDialog } = useDialog();
    const axiosWithAuth = useAxiosWithAuth();
    const { auth } = useAuth();

    const leaveChecklist = async () => {

        try {
            const response = await axiosWithAuth.delete(`/checklists-guests/${auth?.user?.id}/${props.checklist?.id}`, {});
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
                Abandonar lista de tareas
            </h2>
        }
        onConfirm={leaveChecklist}
        onCancel={closeDialog}
    >
        <form action="delete" className="form">
            <p className="center">¿Deseas abandonar la lista de tareas <i>"{props.checklist?.title || '(esta checklist no tiene título)'}"</i>?</p>
        </form>
    </Dialog>
}

export default LeaveChecklistDialog;