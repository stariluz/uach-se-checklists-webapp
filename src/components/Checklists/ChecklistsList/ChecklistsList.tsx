import EditChecklistDialog from 'src/components/Dialogs/Checklists/EditChecklistDialog';
import ChecklistItem from '../ChecklistItem/ChecklistItem';
import './ChecklistsList.css'
import DemoChecklistsList from './DemoChecklistItems/DemoChecklistList';
import { ChecklistWithGuestModel } from 'src/models/Checklists';
import useDialog from 'src/hooks/useDialog';
import DeleteChecklistDialog from 'src/components/Dialogs/Checklists/DeleteChecklistDialog';
import LeaveChecklistDialog from 'src/components/Dialogs/Checklists/LeaveChecklistDialog';
import ShareChecklistDialog from 'src/components/Dialogs/Checklists/ShareChecklistDialog';

interface Props {
    checklist_items?: Array<ChecklistWithGuestModel>;
    className?: string;
    isDemo?: boolean;
}

const ChecklistsList = (props: Props) => {
    const { showDialog } = useDialog();
    const openDialogEditChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<EditChecklistDialog checklist={checklist_item} />);
    }
    
    const openDialogDeleteChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<DeleteChecklistDialog checklist={checklist_item} />);
    }
    
    const openDialogLeaveChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<LeaveChecklistDialog checklist={checklist_item} />);
    }

    const openDialogShareChecklist = (checklist_item: ChecklistWithGuestModel) => {
        showDialog(<ShareChecklistDialog checklist_id={checklist_item.id} />);
    }

    if (props.checklist_items) {
        return <ul className={`${props.className || ''} checklists-list`}>
            {props.checklist_items.map((checklist_item) =>
                <li className='checklists-list-item' key={checklist_item.id}>
                    <ChecklistItem
                        onShare={()=>openDialogShareChecklist(checklist_item)}
                        onEdit={()=>openDialogEditChecklist(checklist_item)}
                        onDelete={()=>openDialogDeleteChecklist(checklist_item)}
                        onLeave={()=>openDialogLeaveChecklist(checklist_item)}
                        checklist={checklist_item} />
                </li>
            )}
        </ul>
    } else if (props.isDemo) {
        // console.error("Missing checklist items");
        // return <div>Missing checklist items</div>
        return <DemoChecklistsList />
    } else {
        // @todo Show no results message
        return null;
    }
}

export default ChecklistsList;