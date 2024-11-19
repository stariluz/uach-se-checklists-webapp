import { ChecklistGuestModel } from "../ChecklistGuests";
import { UserModel } from "../Users";
import IChecklistModel from "./IChecklistModel";

interface IChecklistWithGuestModel extends IChecklistModel {
    guest?: ChecklistGuestModel;
    user?: UserModel;
}
export default IChecklistWithGuestModel;