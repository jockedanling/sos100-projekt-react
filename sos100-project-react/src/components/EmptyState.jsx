/*
Denna komponent visar när sökningen inte returnerar några notifikationer. 
Ett tydligt meddelande istället för en tom sida.
*/

import '../styles/EmptyState.css';
import emptyImage from '../assets/ringklocka-ikon.svg';

function EmptyState({ userId }) {
    return (
        <div className='empty-state'>
            <img src={emptyImage} alt='Inga notifikationer' className='empty-state__icon'/>
            <h2 className='empty-state__title'>Inga notifikationer hittades</h2>
            <p className='empty-state__message'>
                Det finns inga notifikationer för användare <strong>{userId}</strong>.
            </p>
        </div>
    );
}
export default EmptyState;