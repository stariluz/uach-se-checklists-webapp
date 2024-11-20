import ChecklistItem from '../ChecklistItem/ChecklistItem';
import './ChecklistsList.css'
import DemoChecklistsList from './DemoChecklistItems/DemoChecklistList';
import { ChecklistItemModel } from 'src/models/Checklists/ChecklistItemModel';

interface Props {
    checklist_items?: Array<ChecklistItemModel>;
    className?: string;
}

const ChecklistsList = (props: Props) => {
    if (props.checklist_items) {
        return <ul className={`${props.className||''} checklists-list`}>
            {props.checklist_items.map((checklist_item) =>
                <li className='checklists-list-item' key={checklist_item.id}>
                    <ChecklistItem  checklist={checklist_item} />
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