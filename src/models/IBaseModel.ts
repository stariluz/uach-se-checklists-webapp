import UUID from 'src/types/uuid.type';

interface IBaseModel{
    id?: UUID;
    created_at?: Date;
    updated_at?: Date;
}
export default IBaseModel;