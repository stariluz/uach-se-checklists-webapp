import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";

interface ITaskModel extends IBaseModel{
    checklist_id?:UUID;
    task_group_id?: number;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
}
export default ITaskModel;