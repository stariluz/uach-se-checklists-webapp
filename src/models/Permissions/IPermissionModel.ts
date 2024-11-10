import IBaseModel from "../IBaseModel";

interface IPermissionModel extends IBaseModel{
    operation?: string;
    model?: string;
}
export default IPermissionModel;