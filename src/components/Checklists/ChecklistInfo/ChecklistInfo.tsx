import { ChecklistItemModel } from "src/models/Checklists/ChecklistItemModel";
import ChecklistOwnership from "./ChecklistOwnership/ChecklistOwnership";
import './ChecklistInfo.css'
interface Props {
    checklist?: ChecklistItemModel
}

const ChecklistInfo = (props: Props) => {
    return (
        <div className="checklist-info">
            <h2 className='checklist-title'>{props.checklist?.title || "Title is missing"}</h2>
            <div className='checklist-data'>
                <ChecklistOwnership />
                <span>Creado el {props.checklist?.created_at?.toString() || "dd de mmmm del yyyy"}</span>
                <span>Ult. Modificación el {props.checklist?.updated_at?.toString() || "dd de mmmm del yyyy"}</span>
            </div>
        </div>
    );
}

export default ChecklistInfo;