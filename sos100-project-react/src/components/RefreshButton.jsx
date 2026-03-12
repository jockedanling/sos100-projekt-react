/*
Knapp som låter användaren uppdatera notifikationerna manuellt. 
Ikonen roterar när data laddas för visuell feedback.
*/
import '../styles/RefreshButton.css';

function RefreshButton({ onRefresh, isLoading }) {
  return (
    <button
      className={`refresh-button ${isLoading ? 'refresh-button--loading' : ''}`}
      onClick={onRefresh}
      disabled={isLoading}
      title="Uppdatera notifikationer"
    >
      <span className="refresh-button__icon">↻</span>
      {isLoading ? 'Uppdaterar...' : 'Uppdatera'}
    </button>
  );
}

export default RefreshButton;
