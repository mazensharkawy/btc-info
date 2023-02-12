import React, { useState, SetStateAction, useEffect } from "react";
import { Dispatch } from "react";
import AddressDetails from "./AddressDetails";
import useFetch from "../hooks/useFetch";

const ADDRESS_URL = "rawaddr/";

function Address() {
  const [input, setInput]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [invalidInput, setInvalidInput] = useState<boolean>(true);

  const [address, loading, error] = useFetch(
    ADDRESS_URL + input + "/",
    invalidInput
  );

  useEffect(() => {
    if (input.length === 34) {
      setInvalidInput(false);
    } else setInvalidInput(true);
  }, [input]);
  return (
    <div>
      <input
      className="search-bar"
        placeholder="Type a valid hash"
        onChange={({ target: { value } }) => setInput(value)}
      />
      {invalidInput && input.length ? (
        <p className="warning">Address hash must be 34 char long</p>
      ) : (
        ""
      )}
      {loading ? <p>Loading Transaction</p> : ""}
      {address && !loading ? (
        <AddressDetails address={address} />
      ) : (
        ""
      )}
      {error && !loading ? <p className="warning">Error</p> : ""}
    </div>
  );
}

export default Address;
