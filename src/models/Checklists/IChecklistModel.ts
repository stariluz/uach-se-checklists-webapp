import { UUID } from "crypto";
import IBaseModel from "../IBaseModel";

interface IChecklistModel extends IBaseModel {
    user_id?: UUID;
    title?: string;
    due_date?: Date;
    completed_at?: Date;
    completeness?: Boolean;
    url?: string;
}
export default IChecklistModel;