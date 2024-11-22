import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";

interface IChecklistModel extends IBaseModel {
    user_id?: number;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
    completeness?: Boolean;
    url?: string;
}
export default IChecklistModel;