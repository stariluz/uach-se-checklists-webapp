import { randomUUID, UUID } from "crypto";
import BaseModel from "../BaseModel";
import IChecklistGuestModelModel from "./IChecklistGuestModel";

class CreateChecklistGuestModelModel extends BaseModel implements IChecklistGuestModelModel {
    checklist_id?: UUID = randomUUID();
    user_id?: UUID = randomUUID();
    role_id?: UUID = randomUUID();
    completed_at?: Date = new Date();
    constructor(data: IChecklistGuestModelModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.user_id = data.user_id ?? this.user_id;
        this.role_id = data.role_id ?? this.role_id;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default CreateChecklistGuestModelModel;