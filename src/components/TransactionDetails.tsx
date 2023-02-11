import React from "react";
import { Transaction } from "../Types";

type Props = {
  transaction: Transaction;
};
function Transactions({ transaction }: Props) {
  return (
    <div>
      <p>{JSON.stringify(transaction)}</p>
    </div>
  );
}

export default Transactions;
