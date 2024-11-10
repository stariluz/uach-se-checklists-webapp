import { randomUUID, UUID } from "crypto";
import IBaseModel from "./IBaseModel";
import ITaskModel from "./Tasks/ITaskModel";

class BaseModel implements IBaseModel {
    id?: UUID;
    created_at?: Date;
    updated_at?: Date;
    constructor({
        id,
        created_at,
        updated_at
    }: ITaskModel = {}) {
        this.id = id ?? randomUUID();
        this.created_at = created_at ?? new Date();
        this.updated_at = updated_at ?? new Date();
    }
}
export default BaseModel;