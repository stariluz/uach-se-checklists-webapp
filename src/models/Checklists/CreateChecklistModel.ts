import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import IPermissionModel from "./IChecklistModel";

class CreatePermissionModel extends BaseModel implements IPermissionModel {
    user_id?: UUID = uuidv4() as UUID;
    title?: string = "";
    due_date?: Date = new Date();
    completed_at?: Date = new Date();
    completeness?: Boolean = false;
    url?: string = '';
    constructor(data: IPermissionModel = {}) {
        super({ ...data });
        this.user_id = data.user_id ?? this.user_id;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
        this.completeness = data.completeness ?? this.completeness;
        this.url = data.url ?? this.url;
    }
}
export default CreatePermissionModel;