import IBaseModel from "../IBaseModel";

interface IChecklistModel extends IBaseModel {
    userId?: number;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
    completeness?: boolean;
    url?: string;
}
export default IChecklistModel;