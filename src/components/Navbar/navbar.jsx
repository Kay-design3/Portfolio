import './navbar.css'

function Navbar() {
    return(
        <>
            <nav className='header'>
                <div className='logo'>
                    <h2><a href="">Kay</a></h2>
                </div>

                <ul className='navbar'>
                    <li><a href=''>Home</a></li>
                    <li><a href='#skill'>Skillset</a></li>
                    <li><a href='#projects'>Projects</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;