import ChecklistActions from '../ChecklistActions/ChecklistActions';
import './ChecklistItem.css'
import ChecklistInfo from '../ChecklistInfo/ChecklistInfo';
import { NavLink } from 'react-router-dom';
import { ChecklistWithGuestModel } from 'src/models/Checklists';

interface Props {
    className?: string
    checklist?: ChecklistWithGuestModel
    onShare?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onLeave?: () => void;
}
const ChecklistItem = (props: Props) => {
    const url=`${props.checklist?.user_id}/${props.checklist?.id}`;
    return <article className={`item ${props.className ?? ''}`}>
        <NavLink className={`item-link`} to={url} />
        <div className="item-content">
            <ChecklistInfo checklist={props.checklist} />
        </div>
        <ChecklistActions
            onShare={props.onShare}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            onLeave={props.onLeave}
            className='item-actions'
            role={props.checklist?.guest?.role}
        />
    </article>
}
export default ChecklistItem;