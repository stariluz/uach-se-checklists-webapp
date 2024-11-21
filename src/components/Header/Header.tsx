import Button from '../Buttons/Button';
import { IconDoorExit, IconUserCircle } from '../Icons';
import './Header.css'

interface Props {
    onLogout?: () => void
}

const Header = (props: Props) => {
    return <header className='header'>
        <section className='navbar-left'></section>
        <section className='navbar-right'>
            <Button
                className='btn-secondary btn-ghost'
                icon={<IconDoorExit />}
                onClick={props.onLogout}
            />
            <IconUserCircle />
        </section>
    </header>
}

export default Header;