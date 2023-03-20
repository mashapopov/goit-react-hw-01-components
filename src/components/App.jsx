import user from '../components/data/user.json';
import Profile from './Profile/Profile';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        padding: '100px',
        color: '#010101',
        // backgroundColor: 'rgb(216, 222, 228',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
