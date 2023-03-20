import user from '../components/data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from '../components/data/data.json';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        padding: '100px',
        color: '#010101',
        backgroundColor: 'rgb(216, 222, 228)',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
