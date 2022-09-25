import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 871px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TransactionsThead = styled.thead`
  width: 250px;
  height: 45px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  color: #ffffff;
  border-color: #ffffff;
  background: #07aecc;
`;

export const TransactionsTd = styled.td`
  width: 250px;
  height: 45px;
  padding: 10px 20px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  color: #4d4d4df1;
`;

export const TransactionsTbody = styled.tbody`
  :nth-of-type(odd) {
    background: #f2f2f2;
  }
`;
