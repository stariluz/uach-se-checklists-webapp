import BaseModel from "../BaseModel";
import IPermissionModel from "./IChecklistModel";

class CreatePermissionModel extends BaseModel implements IPermissionModel {
    userId?: number =0;
    title?: string = "";
    due_date?: Date = new Date();
    completed_at?: Date = new Date();
    completeness?: boolean = false;
    url?: string = '';
    constructor(data: IPermissionModel = {}) {
        super({ ...data });
        this.userId = data.userId ?? this.userId;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
        this.completeness = data.completeness ?? this.completeness;
        this.url = data.url ?? this.url;
    }
}
export default CreatePermissionModel;