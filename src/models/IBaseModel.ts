import UUID from 'src/types/uuid.type';

interface IBaseModel{
    id?: number;
    created_at?: Date;
    updated_at?: Date;
}
export default IBaseModel;