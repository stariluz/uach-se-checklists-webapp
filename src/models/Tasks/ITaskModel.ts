import { UUID } from "crypto";
import IBaseModel from "../IBaseModel";

interface ITaskModel extends IBaseModel{
    checklist_id?:UUID;
    task_group_id?: UUID;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
}
export default ITaskModel;