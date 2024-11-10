import { randomUUID, UUID } from "crypto";
import BaseModel from "../BaseModel";
import ITaskModel from "./ITaskModel";

class CreateTaskModel extends BaseModel implements ITaskModel {
    checklist_id?: UUID = randomUUID();
    task_group_id?: UUID = randomUUID();
    title?: string = "";
    due_date?: Date = new Date();
    completed_at?: Date = new Date();
    constructor(data: ITaskModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.task_group_id = data.task_group_id ?? this.task_group_id;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default CreateTaskModel;