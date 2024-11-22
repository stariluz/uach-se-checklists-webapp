import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import IChecklistModel from "./IChecklistModel";

class ChecklistModel extends BaseModel implements IChecklistModel {
    userId: number = 0;
    title: string = "";
    due_date: Date = new Date();
    completed_at: Date = new Date();
    completeness: Boolean = false;
    url: string = '';
    constructor(data: IChecklistModel = {}) {
        super({ ...data });
        this.userId = data.userId ?? this.userId;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
        this.completeness = data.completeness ?? this.completeness;
        this.url = data.url ?? this.url;
    }
}
export default ChecklistModel;