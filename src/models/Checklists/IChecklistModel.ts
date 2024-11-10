import { UUID } from "crypto";
import IBaseModel from "../IBaseModel";

interface IChecklistModel extends IBaseModel {
    user_id?: UUID;
    title?: string;
    due_date?: Date;
    completeness?: Boolean;
    url?: string;
    completed_at?: Date;
}
export default IChecklistModel;