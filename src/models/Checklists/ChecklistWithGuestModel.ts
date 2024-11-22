import { ChecklistGuestModel } from "../ChecklistGuests";
import { UserModel } from "../Users";
import ChecklistModel from "./ChecklistModel"
import IChecklistWithGuestModel from "./IChecklistWithGuestModel";

class ChecklistWithGuestModel extends ChecklistModel {
    guest?: ChecklistGuestModel = new ChecklistGuestModel();
    user: UserModel = new UserModel();
    constructor(data: IChecklistWithGuestModel = {}) {
        super({ ...data });
        this.guest = data.guest ? new ChecklistGuestModel(data.guest) : this.guest;
        this.user = data.user ?? this.user;
    }
}
export default ChecklistWithGuestModel;