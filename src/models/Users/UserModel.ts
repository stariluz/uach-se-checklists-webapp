import BaseModel from "../BaseModel";
import IUserModel from "./IUserModel";

class UserModel extends BaseModel implements IUserModel {
    google_token: string = '';
    email: string = '';
    picture_url: string = '';
    constructor(data: IUserModel = {}) {
        super({ ...data });
        this.google_token = data.google_token ?? this.google_token;
        this.email = data.email ?? this.email;
        this.picture_url = data.picture_url ?? this.picture_url;
    }
}
export default UserModel;