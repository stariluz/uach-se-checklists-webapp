import BaseModel from "../BaseModel";
import IChecklistGuestModel from "./IChecklistGuestModel";
import { RoleType } from '../Roles';

class ChecklistGuestModel extends BaseModel implements IChecklistGuestModel {
    checklistId: number = 0;
    userId: number = 0;
    role: RoleType='SPECTATOR';
    constructor(data: IChecklistGuestModel = {}) {
        super({ ...data });
        this.checklistId = data.checklistId ?? this.checklistId;
        this.userId = data.userId ?? this.userId;
        this.role = data.role ?? this.role;
    }
}
export default ChecklistGuestModel;