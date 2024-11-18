import '../ChecklistsList.css'
import { useDemoChecklistItems } from 'src/services/Checklists';
import ChecklistsList from '../ChecklistsList';
import { useEffect } from 'react';

interface Props {
    className?: string;
}

const DemoChecklistsList = (props: Props) => {
    const checklists = useDemoChecklistItems(5);
    useEffect(() => {
        console.warn("@dev Displaying demo checklist items");
    }, []);
    return (
        <ChecklistsList className={props.className} checklist_items={checklists} />
    );
}

export default DemoChecklistsList;