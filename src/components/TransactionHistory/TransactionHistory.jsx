import TransactionHistoryList from './TransactionHistoryList';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction__history}>
      <thead className={css.transaction__head}>
        <tr>
          <th className={css.transaction__headTitle}>Type</th>
          <th className={css.transaction__headTitle}>Amount</th>
          <th className={css.transaction__headTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction__body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.transaction__tr}>
              <TransactionHistoryList
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
