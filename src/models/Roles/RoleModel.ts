import BaseModel from "../BaseModel";
import IRoleModel from "./IRoleModel";
import RoleType from "./Role.type";

/**
 * @deprecated stariluz-November 18, 2024
 */
class RoleModel extends BaseModel implements IRoleModel {
    title: RoleType = 'OWNER';
    constructor(data: IRoleModel = {}) {
        super({ ...data });
        this.title = data.title ?? this.title;
    }
}
export default RoleModel;