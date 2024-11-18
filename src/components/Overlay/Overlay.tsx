import { ReactNode } from 'react';
import './Overlay.css'

interface Props {
    children?: ReactNode;
    isActive?: boolean;
}

const Overlay = (props: Props) => {
    return props.isActive ?
        <div className='overlay overlay-center'>
            {props.children}
        </div>
        : null;
}

export default Overlay;