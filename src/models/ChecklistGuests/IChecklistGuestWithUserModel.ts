import { UserModel } from "../Users";
import IChecklistGuestModel from "./IChecklistGuestModel";

interface IChecklistGuestWithUserModel extends IChecklistGuestModel {
    user?: UserModel;
}

export default IChecklistGuestWithUserModel;