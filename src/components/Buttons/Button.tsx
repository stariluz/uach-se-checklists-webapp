import { Fragment, MouseEventHandler, ReactNode } from "react";

type IconPosition="left"|"right";

interface Props {
    onClick?: MouseEventHandler,
    icon?: ReactNode,
    iconPos?: IconPosition,
    children?: ReactNode
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
}
const Button = (props: Props) => {
    return <button onClick={props.onClick} className="text-3xl font-bold underline">
        <ButtonContent {...props}>
            {props.children}
        </ButtonContent>
    </button>
}

export default Button;