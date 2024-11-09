import { randomUUID, UUID } from "crypto";
import BaseModel from "../BaseModel.model";

class TaskModel extends BaseModel{
    checklist_id:UUID=randomUUID();
    task_group_id: UUID=randomUUID();
    title: string="";
    due_date: Date=new Date();
    completed_at: Date=new Date();
}
export default TaskModel;