import { ChecklistItemModel } from 'src/models/Checklists/ChecklistItemModel';
import ChecklistActions from '../ChecklistActions/ChecklistActions';
import './ChecklistItem.css'
import ChecklistInfo from '../ChecklistInfo/ChecklistInfo';
import { NavLink } from 'react-router-dom';

interface Props {
    className?: string
    checklist?: ChecklistItemModel
}
const ChecklistItem = (props: Props) => {
    return <article className={`item ${props.className??''}`}>
        <NavLink className={`item-link`} to={`/${props.checklist?.url??'url'}`} >

        </NavLink>
        <div className="item-content">
            <ChecklistInfo checklist={props.checklist}/>
        </div>
        <ChecklistActions className='item-actions' checklist={props.checklist}/>
    </article>
}
export default ChecklistItem;