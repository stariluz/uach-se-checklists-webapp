import IBaseModel from "../IBaseModel";
import { RoleType } from '../Roles';

interface IChecklistGuestModel extends IBaseModel {
    checklistId?: number;
    userId?: number;
    role?: RoleType;
}
export default IChecklistGuestModel;