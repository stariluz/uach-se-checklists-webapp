import { IconDoorExit, IconEdit, IconShare, IconTrashXFilled } from '@tabler/icons-react'
import Button from '../Buttons/Button'
import './ChecklistActions.css'

class ChecklistRole {
    title?: string;
    operation?: 'OWNER' | 'COLABORATOR' | 'SPECTATOR';
}

class ChecklistActionsModel {
    title?: string
    completeness?: boolean
    due_date?: Date = new Date()
    updated_at?: Date = new Date()
    url?: string
    role?: ChecklistRole;
}
interface Props {
    className?: string
    checklist?: ChecklistActionsModel
}

const ChecklistActions = (props: Props) => {
    const handleShare = () => {

    }
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    const handleLeave = () => {

    }
    return <div className={`actions ${props.className || ''}`}>
        {
            props.checklist?.role?.operation == 'OWNER' ?
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
                        onClick={() => handleDelete}
                    ></Button>
                </>
                :
                <Button
                    className='btn-ghost btn-danger'
                    icon={<IconDoorExit />}
                    onClick={() => handleLeave}
                ></Button>

        }
    </div>
}

export default ChecklistActions;