import useAuth from 'src/hooks/useAuth';
import Button from '../Buttons/Button';
import { IconDoorExit, IconUserCircle } from '../Icons';
import './Header.css'

interface Props {
    onLogout?: () => void
}

const Header = (props: Props) => {
    const { auth } = useAuth();
    return <header className='header'>
        <section className='navbar-left'></section>
        <section className='navbar-right'>
            <Button
                className='btn-secondary btn-ghost'
                icon={<IconDoorExit />}
                onClick={props.onLogout}
            />
            <div className="account">
                {
                    auth?.user?.picture_url ?
                        <img
                            className='account-picture'
                            src={auth?.user?.picture_url}
                            alt="Profile picture"
                        />
                        :
                        <IconUserCircle />
                }
            </div>
        </section>
    </header>
}

export default Header;