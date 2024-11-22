import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";

interface ITaskGroupModel extends IBaseModel{
    checklistId?:number;;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
}
export default ITaskGroupModel;