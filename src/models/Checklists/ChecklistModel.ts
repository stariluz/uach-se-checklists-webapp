import { randomUUID, UUID } from "crypto";
import BaseModel from "../BaseModel";
import IChecklistModel from "./IChecklistModel";

class ChecklistModel extends BaseModel implements IChecklistModel {
    user_id: UUID = randomUUID();
    title: string = "";
    due_date: Date = new Date();
    completed_at: Date = new Date();
    completeness: Boolean = false;
    url: string = '';
    constructor(data: IChecklistModel = {}) {
        super({ ...data });
        this.user_id = data.user_id ?? this.user_id;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
        this.completeness = data.completeness ?? this.completeness;
        this.url = data.url ?? this.url;
    }
}
export default ChecklistModel;