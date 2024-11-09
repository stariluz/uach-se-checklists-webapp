import BaseModel from "../BaseModel";
import IRoleModel from "./IRoleModel";

class CreateRoleModel extends BaseModel implements IRoleModel {
    title?: string = "";
    constructor(data: IRoleModel = {}) {
        super({ ...data });
        this.title = data.title ?? this.title;
    }
}
export default CreateRoleModel;