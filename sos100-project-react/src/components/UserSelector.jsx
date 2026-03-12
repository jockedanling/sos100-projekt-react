/*
------------------------------------------------------------------------------------------------
Denna komponent visar ett textfält där användaren skriver in ett userId och en knapp för att hämta notifikationer.
Skickar tillbaka värden via props till hooken useNotifications
------------------------------------------------------------------------------------------------
*/
import '../styles/UserSelector.css';

function UserSelector({ userId, onUserIdChange, onFetch, isLoading}) {
    //Hanterar enter-tangenten i inputfältet
    function handleKeyDown(event) {
        if(event.key=== 'Enter') {
            onFetch();
        }
    }

    return (
        <div className='user-selector'>
            <label className='user-selector__label' htmlFor='userId'>
                Användar-ID
            </label>
            <div className='user-selector__row'>
                <input id="userId" className='user-selector__input' type='text' placeholder='Ange ett användar-ID...'
                value={userId} onChange={(e) => onUserIdChange(e.target.value)}
                onKeyDown={handleKeyDown} />
                <button className='user-selector__button' onClick={onFetch} disabled={!userId.trim() || isLoading}
                >
                    {isLoading ? 'Hämtar...' : 'Hämta notifikationer'}
                </button>
            </div>
        </div>
    );
}
export default UserSelector;