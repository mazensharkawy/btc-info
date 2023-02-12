import React from "react";
import { Address } from "../Types";
import ResultDetail from "./ResultDetails";

type Props = {
  address: Address;
};
function AdressDetails({ address }: Props) {
  return (
    <div className="result-card">
      <ResultDetail name="Address Hash" value={address?.address} />
      <ResultDetail name="No. of Transactions" value={address?.n_tx} />
      <ResultDetail name="Total Received" value={address?.total_received} />
      <ResultDetail name="Total Sent" value={address?.total_sent} />
      <ResultDetail name="Balance: " value={address?.final_balance} />
    </div>
  );
}

export default AdressDetails;
