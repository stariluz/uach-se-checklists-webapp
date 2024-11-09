import BaseModel from "../BaseModel";
import IUserModel from "./IUserModel";

class UserModel extends BaseModel implements IUserModel {
    google_token: string = '';
    email: string = '';
    picture_url: string = '';
    constructor(task: IUserModel = {}) {
        super({ ...task });
        this.google_token = task.google_token ?? this.google_token;
        this.email = task.email ?? this.email;
        this.picture_url = task.picture_url ?? this.picture_url;
    }
}
export default UserModel;