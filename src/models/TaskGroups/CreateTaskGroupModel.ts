import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
import BaseModel from "../BaseModel";
import ITaskGroupModel from "./ITaskGroupModel";

class CreateTaskGroupModel extends BaseModel implements ITaskGroupModel {
    checklistId?: number =0;
    title?: string = "";
    due_date?: Date = new Date();
    completed_at?: Date = new Date();
    constructor(data: ITaskGroupModel = {}) {
        super({ ...data });
        this.checklistId = data.checklistId ?? this.checklistId;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ?? this.due_date;
        this.completed_at = data.completed_at ?? this.completed_at;
    }
}
export default CreateTaskGroupModel;