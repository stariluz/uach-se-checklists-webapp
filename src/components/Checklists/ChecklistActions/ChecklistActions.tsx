import Button from 'src/components/Buttons/Button';
import './ChecklistActions.css'
import { IconShare, IconDoorExit, IconEdit, IconTrashXFilled } from 'src/components/Icons';
import { RoleType } from 'src/models/Roles';

interface Props {
    className?: string;
    role?: RoleType;
    onShare?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onLeave?: () => void;
}

const ChecklistActions = (props: Props) => {
    const handleShare = () => {
        if (props.onShare) props.onShare();
    }
    const handleEdit = () => {
        if (props.onEdit) props.onEdit();
    }
    const handleDelete = () => {
        if (props.onDelete) props.onDelete();
    }
    const handleLeave = () => {
        if (props.onLeave) props.onLeave();
    }
    if (!props.role) return null

    return <div className={`actions ${props.className || ''}`}>
        {
            props.role == 'OWNER' ?
                <>
                    <Button
                        className='btn-ghost btn-secondary'
                        icon={<IconShare />}
                        onClick={() => handleShare()}
                    ></Button>
                    <Button
                        className='btn-ghost btn-secondary'
                        icon={<IconEdit />}
                        onClick={() => handleEdit()}
                    ></Button>
                    <Button
                        className='btn-ghost btn-danger'
                        icon={<IconTrashXFilled />}
                        onClick={() => handleDelete()}
                    ></Button>
                </>
                :
                <Button
                    className='btn-ghost btn-danger'
                    icon={<IconDoorExit />}
                    onClick={() => handleLeave()}
                ></Button>
        }
    </div>
}

export default ChecklistActions;