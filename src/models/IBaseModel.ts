import { UUID } from "crypto";

interface IBaseModel{
    id?: UUID;
    created_at?: Date;
    updated_at?: Date;
}
export default IBaseModel;