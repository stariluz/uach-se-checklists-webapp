import './ProfilePicture.css'

interface Props {
    picture_url?: string;
    className?: string;
}

const ProfilePicture = (props: Props) => {
    console.log(props.picture_url)
    return props.picture_url ?
        <img src={props.picture_url} alt="Profile picture" className={props.className} />
        :
        <IconUserCircle className={props.className} />
}
export default ProfilePicture;