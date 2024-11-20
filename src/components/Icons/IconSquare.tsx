import BaseIcon from "./BaseIcon";
import IIconProps from "./IIconProps";

const IconSquare = (props: IIconProps) => {
    return (
        <BaseIcon className={props.boxClassName}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-square ${props.className??''}`}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-square ${props.className??''}`}>
                <g clipPath="url(#clip0_70_544)">
                    <rect y="0.186157" width="24" height="24" rx="4" />
                    <path d="M1 3.6306C1 2.98229 1.25754 2.36054 1.71596 1.90212C2.17438 1.4437 2.79614 1.18616 3.44444 1.18616H20.5556C21.2039 1.18616 21.8256 1.4437 22.284 1.90212C22.7425 2.36054 23 2.98229 23 3.6306V20.7417C23 21.39 22.7425 22.0118 22.284 22.4702C21.8256 22.9286 21.2039 23.1862 20.5556 23.1862H3.44444C2.79614 23.1862 2.17438 22.9286 1.71596 22.4702C1.25754 22.0118 1 21.39 1 20.7417V3.6306Z" />
                </g>
                <defs>
                    <clipPath id="clip0_70_544">
                        <rect y="0.186157" width="24" height="24" rx="4" />
                    </clipPath>
                </defs>
            </svg>

        </BaseIcon >
    );
}
export default IconSquare;