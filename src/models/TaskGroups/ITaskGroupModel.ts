import { UUID } from "crypto";
import IBaseModel from "../IBaseModel";

interface ITaskGroupModel extends IBaseModel{
    checklist_id?:UUID;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
}
export default ITaskGroupModel;