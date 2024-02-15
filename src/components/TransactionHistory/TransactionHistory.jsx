import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headLine}>Type</th>
          <th className={css.headLine}>Amount</th>
          <th className={css.headLine}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr className={css.oneLine} key={transaction.id}>
            <td className={css.Line}>{transaction.type}</td>
            <td className={css.Line}>{transaction.amount}</td>
            <td className={css.Line}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
