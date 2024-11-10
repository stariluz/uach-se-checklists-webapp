import ChecklistItem from '../ChecklistItem/ChecklistItem';
import './ChecklistsList.css'
import DemoChecklistsList from './DemoChecklistItems/DemoChecklistList';

interface Props {
    checklist_items?: Array<any>;
    className?: string;
}

const ChecklistsList = (props: Props) => {
    if (props.checklist_items) {
        return <ul className={`${props.className||''} checklists-list`}>
            {props.checklist_items.map((checklist_item) =>
                <li className='checklists-list-item'>
                    <ChecklistItem  {...checklist_item} />
                </li>
            )}
        </ul>
    } else {
        // console.error("Missing checklist items");
        // return <div>Missing checklist items</div>
        return <DemoChecklistsList/>
    }
}

export default ChecklistsList;