import IIconProps from "./IIconProps";
import "./Icons.css";

const BaseIcon = (props: IIconProps) => {
    return <i className="icon">
        {props.children ?? 'Ic'}
    </i>
}
export default BaseIcon;