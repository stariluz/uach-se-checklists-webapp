import BaseIcon from "./BaseIcon";
import IIconProps from "./IIconProps";

const IconCheckbox = (props: IIconProps) => {
    return (
        <BaseIcon className={props.boxClassName}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${props.className} icon icon-tabler icons-tabler-outline icon-tabler-checkbox`}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11l3 3l8 -8" />
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
        </BaseIcon >
    );
}
export default IconCheckbox;