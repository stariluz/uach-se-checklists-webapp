import ProfilePicture from "src/components/UserImage/ProfilePicture";
import { UserModel } from "src/models/Users";
import './ChecklistOwnership.css'

interface Ownership {
    userId?: string
    user?: UserModel
}
const ChecklistOwnership = (props: Ownership) => {
    return props.userId ?
        <span>de: {props?.user?.email || "User or email missing"}
            <ProfilePicture
                picture_url={props?.user?.picture_url}
            />
        </span>
        :
        <span className='ownership'>Compartido</span>
}
export default ChecklistOwnership;