import PropTypes from 'prop-types';
import { firstLetterUpperCase } from 'utils';
import {
  TransactionsTable,
  TransactionsThead,
  TransactionsTd,
  TransactionsTbody,
} from './TransactionsHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TransactionsThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionsThead>
      {items.map(item => (
        <TransactionsTbody key={item.id}>
          <tr>
            <TransactionsTd>{firstLetterUpperCase(item.type)}</TransactionsTd>
            <TransactionsTd>{item.amount}</TransactionsTd>
            <TransactionsTd>{item.currency}</TransactionsTd>
          </tr>
        </TransactionsTbody>
      ))}
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
