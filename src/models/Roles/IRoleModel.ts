import IBaseModel from "../IBaseModel";
import RoleType from "./Role.type";

/**
 * @deprecated stariluz-November 18, 2024
 */
interface IRoleModel extends IBaseModel {
    title?: RoleType;
}
export default IRoleModel;