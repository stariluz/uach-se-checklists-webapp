import { IconDoorExit, IconUserCircle } from '@tabler/icons-react'
import './Header.css'

const Header=()=>{
    return <header className='header'>
        <section className='navbar-left'></section>
        <section className='navbar-right'>
            <a href="#">
                <IconDoorExit/>
            </a>
            <a className='account' href="#">
                <IconUserCircle/>
            </a>
        </section>
    </header>
}

export default Header;