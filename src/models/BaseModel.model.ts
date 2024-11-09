import { randomUUID, UUID } from "crypto";

class BaseModel{
    id?: UUID;
    created_at?: Date;
    updated_at?: Date;
    constructor(){
        this.id=randomUUID();
    }
}
export default BaseModel;