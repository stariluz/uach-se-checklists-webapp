import BaseModel from "../BaseModel";
import IChecklistModel from "./IChecklistModel";

class ChecklistModel extends BaseModel implements IChecklistModel {
    userId: number = 0;
    title: string = "";
    due_date?: Date = undefined;
    completed_at: Date = new Date();
    completeness: boolean = false;
    url: string = '';
    constructor(data: IChecklistModel = {}) {
        super({ ...data });
        this.userId = data.userId ?? this.userId;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ? new Date(data.due_date) : this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
        this.completeness = data.completeness ?? this.completeness;
        this.url = data.url ?? this.url;
    }
}
export default ChecklistModel;