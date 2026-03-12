import Header from './components/Header';
import UserSelector from './components/UserSelector';
import NotificationList from './components/NotificationList';
import EmptyState from './components/EmptyState';
import RefreshButton from './components/RefreshButton';
import { useNotifications } from './hooks/useNotifications';
import errorIcon from './assets/error.svg';
import './App.css';

function App() {
  const {notifications,isLoading,error,userId,setUserId,loadNotifications,markAsRead,} 
  = useNotifications();

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const hasSearched = userId.trim().length > 0 && !isLoading && error === null;

  return (
    <div className="app">
      <Header unreadCount={unreadCount} />

      <main className="app__main">
        <UserSelector
          userId={userId}
          onUserIdChange={setUserId}
          onFetch={loadNotifications}
          isLoading={isLoading}
        />

        {/* Felmeddelande */}
        {error && (
          <div className="app__error">
            <img src={errorIcon} alt="fel" className='app__error-icon'/>
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
      </main>
    </div>
  );
}
export default App;