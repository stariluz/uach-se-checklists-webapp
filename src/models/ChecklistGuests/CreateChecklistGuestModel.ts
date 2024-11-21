import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import IChecklistGuestModel from "./IChecklistGuestModel";
import { RoleType } from '../Roles';

class CreateChecklistGuestModel extends BaseModel implements IChecklistGuestModel {
    checklist_id?: UUID = uuidv4() as UUID;
    user_id?: UUID = uuidv4() as UUID;
    role?: RoleType='SPECTATOR';
    completed_at?: Date = new Date();
    constructor(data: IChecklistGuestModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.user_id = data.user_id ?? this.user_id;
        this.role = data.role ?? this.role;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default CreateChecklistGuestModel;