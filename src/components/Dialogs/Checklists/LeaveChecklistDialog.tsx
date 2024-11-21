import useDialog from "src/hooks/useDialog";
import Dialog from "../Dialog"
import '../Form.css'
import IChecklistDialogProps from "./IChecklistDialogProps.props";

const LeaveChecklistDialog = (props: IChecklistDialogProps) => {
    const { closeDialog } = useDialog();

    const leaveChecklist = () => {
        // @todo verify data is right and call leave checklist methods
        // @todo check exceptions and show alerts with them
        closeDialog();
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