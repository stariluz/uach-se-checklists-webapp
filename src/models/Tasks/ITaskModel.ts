import IBaseModel from "../IBaseModel";

interface ITaskModel extends IBaseModel{
    checklistId?:number;
    task_groupId?: number;
    title?: string;
    due_date?: Date;
    is_complete?:boolean;
    completed_at?: Date;
}
export default ITaskModel;