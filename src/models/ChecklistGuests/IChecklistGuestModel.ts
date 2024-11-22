import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";
import { RoleType } from '../Roles';

interface IChecklistGuestModel extends IBaseModel {
    checklist_id?: number;
    user_id?: number;
    role?: RoleType;
}
export default IChecklistGuestModel;