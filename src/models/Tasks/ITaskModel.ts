import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";

interface ITaskModel extends IBaseModel{
    checklistId?:UUID;
    task_groupId?: number;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
}
export default ITaskModel;