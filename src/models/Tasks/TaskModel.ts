import BaseModel from "../BaseModel";
import ITaskModel from "./ITaskModel";

class TaskModel extends BaseModel implements ITaskModel {
    checklistId: number = 0;
    task_groupId: number = 0;
    title: string = "";
    due_date?: Date = undefined;
    is_complete?: boolean;
    completed_at?: Date = undefined;
    constructor(data: ITaskModel = {}) {
        super({ ...data });
        this.checklistId = data.checklistId ?? this.checklistId;
        this.task_groupId = data.task_groupId ?? this.task_groupId;
        this.title = data.title ?? this.title;
        this.due_date = data.due_date ? new Date(data.due_date) : this.due_date;
        this.is_complete = data.is_complete ?? this.is_complete;
        this.completed_at = data.completed_at ? new Date(data.completed_at) : this.completed_at;
    }
}
export default TaskModel;