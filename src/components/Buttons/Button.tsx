import { Fragment, MouseEventHandler, MouseEvent, ReactNode } from "react";
import './Button.css'

type IconPosition = "left" | "right";

interface Props {
    onClick?: MouseEventHandler,
    icon?: ReactNode,
    iconPos?: IconPosition,
    children?: ReactNode,
    className?: string,
    type?: "button" | "reset" | "submit";
    name?: string;
    id?: string;
}
const ButtonContent = (props: Props) => {
    if (props.icon) {
        if (props.iconPos && props.iconPos == "right")
            return <Fragment>
                {props.children}
                {props.icon}
            </Fragment>
        else
            return <Fragment>
                {props.icon}
                {props.children}
            </Fragment>
    }
    else
        return <Fragment>
            {props.children}
        </Fragment>

}
const Button = (props: Props) => {
    const onClick: MouseEventHandler = (event: MouseEvent) => {
        if (props.onClick) {
            props.onClick(event);
        }
    }
    return <button
        id={props.name ?? ''}
        name={props.name ?? ''}
        type={props.type ?? 'button'}
        onClick={onClick} className={
            `btn ${props.className ?? ''} ${!props.children && "btn-icon"}`
        }>
        <ButtonContent {...props}>
            {props.children}
        </ButtonContent>
    </button>
}

export default Button;