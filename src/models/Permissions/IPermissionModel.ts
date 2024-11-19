import IBaseModel from "../IBaseModel";

/**
 * @deprecated stariluz-November 18, 2024
 */
interface IPermissionModel extends IBaseModel{
    operation?: string;
    model?: string;
}
export default IPermissionModel;