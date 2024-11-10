import BaseModel from "../BaseModel";
import IPermissionModel from "./IPermissionModel";

class PermissionModel extends BaseModel implements IPermissionModel {
    operation: string = "";
    model: string = "";
    constructor(data: IPermissionModel = {}) {
        super({ ...data });
        this.operation = data.operation ?? this.operation;
        this.model = data.model ?? this.model;
    }
}
export default PermissionModel;