import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";

interface IChecklistModel extends IBaseModel {
    userId?: number;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
    completeness?: Boolean;
    url?: string;
}
export default IChecklistModel;