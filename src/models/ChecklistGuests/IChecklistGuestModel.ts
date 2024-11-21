import UUID from 'src/types/uuid.type';
import IBaseModel from "../IBaseModel";
import { RoleType } from '../Roles';

interface IChecklistGuestModel extends IBaseModel {
    checklist_id?: UUID;
    user_id?: UUID;
    role?: RoleType;
}
export default IChecklistGuestModel;