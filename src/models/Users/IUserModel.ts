import IBaseModel from "../IBaseModel";

interface IUserModel extends IBaseModel{
    google_token?:string;
    email?: string;
    picture_url?: string;
}
export default IUserModel;