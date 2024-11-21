import { UserModel } from '../Users';
import ChecklistGuestModel from './ChecklistGuestModel';
import IChecklistGuestWithUserModel from "./IChecklistGuestWithUserModel";

class ChecklistGuestWithUserModel extends ChecklistGuestModel implements IChecklistGuestWithUserModel {
    user?: UserModel;
    constructor(data: IChecklistGuestWithUserModel = {}) {
        super({ ...data });
        this.user = data.user ?? this.user;
    }
}
export default ChecklistGuestWithUserModel;