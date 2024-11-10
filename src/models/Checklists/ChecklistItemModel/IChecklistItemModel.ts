import { UserModel } from "../../Users";
import IChecklistModel from "../IChecklistModel";

interface IChecklistItemModel extends IChecklistModel {
    user?: UserModel;
}
export default IChecklistItemModel;