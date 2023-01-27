import logo from '../images/dailybugle.png';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm'>
                <img className='logo' src={logo} alt="Logo" width="100" align='left' />
                <h1 className='title'>Daily Bugle News</h1>
            </nav>
        </header >
    );
}

export default Header;