import PropTypes from 'prop-types';
import css from './Transaction.module.css';

function TransactionHistoryList({ type, amount, currency }) {
  return (
    <>
      <td className={css.transaction__bodyTitle}>{type}</td>
      <td className={css.transaction__bodyTitle}>{amount}</td>
      <td className={css.transaction__bodyTitle}>{currency}</td>
    </>
  );
}

TransactionHistoryList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryList;
