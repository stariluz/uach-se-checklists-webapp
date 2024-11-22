import IBaseModel from "./IBaseModel";
import ITaskModel from "./Tasks/ITaskModel";

class BaseModel implements IBaseModel {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    constructor({
        id,
        createdAt,
        updatedAt
    }: IBaseModel = {}) {
        this.id = id ?? 0;
        this.createdAt = createdAt ?? new Date();
        this.updatedAt = updatedAt ?? new Date();
    }
}
export default BaseModel;