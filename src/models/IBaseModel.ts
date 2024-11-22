import UUID from 'src/types/uuid.type';

interface IBaseModel{
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default IBaseModel;