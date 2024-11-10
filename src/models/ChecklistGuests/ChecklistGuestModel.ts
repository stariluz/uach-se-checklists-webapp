import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import IChecklistGuestModelModel from "./IChecklistGuestModel";

class ChecklistGuestModelModel extends BaseModel implements IChecklistGuestModelModel {
    checklist_id: UUID = uuidv4() as UUID;
    user_id: UUID = uuidv4() as UUID;
    role_id: UUID = uuidv4() as UUID;
    completed_at: Date = new Date();
    constructor(data: IChecklistGuestModelModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.user_id = data.user_id ?? this.user_id;
        this.role_id = data.role_id ?? this.role_id;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default ChecklistGuestModelModel;