import { randomUUID, UUID } from "crypto";
import BaseModel from "../BaseModel";
import ITaskGroupModel from "./ITaskGroupModel";

class CreateTaskGroupModel extends BaseModel implements ITaskGroupModel {
    checklist_id?: UUID = randomUUID();
    title?: string = "";
    due_date?: Date = new Date();
    completed_at?: Date = new Date();
    constructor(data: ITaskGroupModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default CreateTaskGroupModel;