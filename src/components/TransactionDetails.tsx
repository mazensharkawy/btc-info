import React from "react";
import { Transaction } from "../Types";
import ResultDetail from "./ResultDetails";

type Props = {
  transaction: Transaction;
};
function TransactionsDetails({ transaction }: Props) {
  const time = new Date(transaction?.time).toLocaleTimeString("en-US");
  const tx_value = transaction?.inputs[0]?.prev_out?.value;
  return (
    <div className="result-card">
      <ResultDetail name="Transaction Hash" value={transaction?.hash} />
      <ResultDetail name="Time" value={time} />
      <ResultDetail name="Raw Value: " value={tx_value} />
    </div>
  );
}

export default TransactionsDetails;
