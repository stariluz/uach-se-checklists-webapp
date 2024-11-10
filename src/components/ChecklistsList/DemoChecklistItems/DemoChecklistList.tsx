
import ChecklistItem from 'src/components/ChecklistItem/ChecklistItem';
import '../ChecklistsList.css'
import { useDemoChecklistItems } from 'src/services/Checklists';
import ChecklistsList from '../ChecklistsList';

interface Props {
    className?: string;
}

const DemoChecklistsList = (props: Props) => {
    const checklists = useDemoChecklistItems(5);
    console.warn("Displaying demo checklist items");
    return (<ChecklistsList checklist_items={checklists} />);
}

export default DemoChecklistsList;