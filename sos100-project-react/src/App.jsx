import Header from './components/Header';
import UserSelector from './components/UserSelector';
import NotificationList from './components/NotificationList';
import EmptyState from './components/EmptyState';
import RefreshButton from './components/RefreshButton';
import { useNotifications } from './hooks/useNotifications';
import errorIcon from './assets/error.svg';
import './App.css';

function App() {
  const {notifications,isLoading,error,userId,setUserId,loadNotifications,markAsRead, hasFetched } 
  = useNotifications();

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const hasSearched = hasFetched && userId.trim().length > 0 && !isLoading && error === null;

  return (
    <div className="app">
      <Header unreadCount={unreadCount} />

      <main className="app__main">
        <section className="app__content">
          <h2 className="app__content-title">Sök efter användarens notiser!</h2>
          {!hasFetched && !isLoading && (
            <div className='app__welcome'>
              <p>Ange ett användar-ID i sökfältet för att se notifikationer tillhörande användaren.</p>
            </div>
          )}

          {/* Felmeddelande */}
          {error && (
            <div className="app__error">
              <img src={errorIcon} alt="fel" className="app__error-icon" />
              <span>{error}</span>
            </div>
          )}

          {/* Laddningsindikator */}
          {isLoading && (
            <div className="app__loading">
              <span>Hämtar notifikationer...</span>
            </div>
          )}

          {/* Refresh-knapp och lista */}
          {!isLoading && notifications.length > 0 && (
            <div className="app__toolbar">
              <RefreshButton onRefresh={loadNotifications} isLoading={isLoading} />
            </div>
          )}

          {!isLoading && notifications.length > 0 && (
            <NotificationList
              notifications={notifications}
              onMarkAsRead={markAsRead}
            />
          )}

          {/* Tom lista */}
          {hasSearched && notifications.length === 0 && (
            <EmptyState userId={userId} />
          )}
        </section>

        <aside className="app__sidebar">
          <UserSelector
            userId={userId}
            onUserIdChange={setUserId}
            onFetch={loadNotifications}
            isLoading={isLoading}
          />
        </aside>
      </main>
    </div>
  );
}
export default App;