import user from '../components/data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from '../components/data/data.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        fontSize: 40,
        padding: '100px',
        color: '#010101',
        backgroundColor: '#F0FFF0',
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
