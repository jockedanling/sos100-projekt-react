/*
------------------------------------------------------------------------------------------------
Sidhuvudet som visas längst upp på sidan. Tar emot en unreadCount som prop och visar
         en badge med antal olästa notifikationer
------------------------------------------------------------------------------------------------
*/

import '../styles/Header.css';
import bibliotekIcon from '../assets/bibliotek-ikon.png';

function Header({ unreadCount }) { /* destrukturering av props, plockar ut just unreadCount */
    return (
        <header className="header">
            <div className="header__brand">
                <img src={bibliotekIcon} alt='Bibliotek' className='header__icon' />
                <h1 className='header__title'>Biblioteksnotifikationer</h1>
            </div>
            {unreadCount > 0 && ( /* villkorlig rendering, visas bara om det finns olästa */
                <div className='header__badge'>
                    {unreadCount} olästa
                </div>
            )}
        </header>
    );
}
export default Header; /* exporterar komponenten så andra filer kan importera den */
