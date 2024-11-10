import { UserModel } from "../../Users";
import ChecklistModel from "../ChecklistModel";
import IChecklistItemModel from "./IChecklistItemModel";

class ChecklistItemModel extends ChecklistModel {
    user: UserModel=new UserModel();
    constructor(data: IChecklistItemModel = {}) {
        super({ ...data });
        this.user = data.user ?? this.user;
    }
}
export default ChecklistItemModel;