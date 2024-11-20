import IIconProps from "./IIconProps";
import "./Icons.css";

const BaseIcon = (props: IIconProps) => {
    return <i className={`icon-box ${props.boxClassName??''}`}>
        {props.children ?? 'Ic'}
    </i>
}
export default BaseIcon;