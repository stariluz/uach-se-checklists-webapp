import ChecklistActions from '../ChecklistActions/ChecklistActions';
import ProfilePicture from '../UserImage/ProfilePicture';
import './ChecklistItem.css'

class ChecklistItemModel {
    title?: string
    user_id?: string
    user?: any
    created_at?: Date = new Date()
    updated_at?: Date = new Date()
    url?: string
}
interface Props {
    className?: string
    checklist?: ChecklistItemModel
}
interface Ownership {
    user_id?: string
    user?: any
}
const ChecklistOwnership = (props: Ownership) => {
    return props.user_id ?
        <span>de: {props.user.full_name || "User or fullname missing"}
            <ProfilePicture
                picture_url={props.user.picture_url}
            />
        </span>
        :
        <span className='ownership'>Compartido</span>
}
const ChecklistItem = (props: Props) => {
    return <article className='item'>
        <a className='item-link' href={props.checklist?.url || "#"}></a>
        <div className="item-content">
            <h2 className='item-header'>{props.checklist?.title || "Title is missing"}</h2>
            <div className='item-subheader'>
                <ChecklistOwnership />
                <span>Creado el {props.checklist?.created_at?.toString() || "dd de mmmm del yyyy"}</span>
                <span>Ult. Modificación el {props.checklist?.updated_at?.toString() || "dd de mmmm del yyyy"}</span>
            </div>
        </div>
        <ChecklistActions className='item-actions'/>
    </article>
}
export default ChecklistItem;