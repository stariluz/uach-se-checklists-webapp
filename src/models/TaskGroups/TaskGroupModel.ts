import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import ITaskGroupModel from "./ITaskGroupModel";

class TaskGroupModel extends BaseModel implements ITaskGroupModel {
    checklist_id: number = 0;
    title: string = "";
    due_date: Date = new Date();
    completed_at: Date = new Date();
    constructor(data: ITaskGroupModel = {}) {
        super({ ...data });
        this.checklist_id = data.checklist_id ?? this.checklist_id;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default TaskGroupModel;