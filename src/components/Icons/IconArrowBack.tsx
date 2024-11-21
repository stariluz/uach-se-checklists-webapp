import BaseIcon from "./BaseIcon";
import IIconProps from "./IIconProps";

const IconArrowBack = (props: IIconProps) => {
    return (
        <BaseIcon className={props.boxClassName}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-back ${props.className??''}`}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
            </svg>
        </BaseIcon >
    );
}
export default IconArrowBack;