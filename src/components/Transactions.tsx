import React, { useState, SetStateAction, useEffect } from "react";
import { Dispatch } from "react";
import TransactionDetails from "./TransactionDetails";
import useFetch from "../hooks/useFetch";

const TRANSACTION_URL = "rawtx/";

function Transactions() {
  const [input, setInput]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [invalidInput, setInvalidInput] = useState<boolean>(true);

  const [transaction, loading, error] = useFetch(
    TRANSACTION_URL + input + "/",
    invalidInput
  );

  useEffect(() => {
    if (input.length === 64) {
      setInvalidInput(false);
    } else setInvalidInput(true);
  }, [input]);
  console.log({transaction, loading, error})
  return (
    <div>
      <input
        placeholder="Type a valid hash"
        onChange={({ target: { value } }) => setInput(value)}
      />
      {invalidInput && input.length ? (
        <p className="warning">Transaction hash must be 64 char long</p>
      ) : (
        ""
      )}
      {loading ? <p>Loading Transaction</p> : ""}
      {transaction && !loading ? (
        <TransactionDetails transaction={transaction} />
      ) : (
        ""
      )}
      {error && !loading ? <p className="warning">Error</p> : ""}
    </div>
  );
}

export default Transactions;
