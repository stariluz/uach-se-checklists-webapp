import { v4 as uuidv4 } from 'uuid';
import UUID from 'src/types/uuid.type';
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
        this.id = id ?? uuidv4() as UUID;
        this.created_at = created_at ?? new Date();
        this.updated_at = updated_at ?? new Date();
    }
}
export default BaseModel;