import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import IChecklistGuestModel from "./IChecklistGuestModel";
import { RoleType } from '../Roles';

class CreateChecklistGuestModel extends BaseModel implements IChecklistGuestModel {
    checklistId?: number =0;
    userId?: number =0;
    role?: RoleType='SPECTATOR';
    constructor(data: IChecklistGuestModel = {}) {
        super({ ...data });
        this.checklistId = data.checklistId ?? this.checklistId;
        this.userId = data.userId ?? this.userId;
        this.role = data.role ?? this.role;
    }
}
export default CreateChecklistGuestModel;