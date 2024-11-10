import { UUID } from "crypto";
import IBaseModel from "../IBaseModel";

interface IChecklistGuestModelModel extends IBaseModel {
    checklist_id?: UUID;
    user_id?: UUID;
    role_id?: UUID;
    completed_at?: Date;
}
export default IChecklistGuestModelModel;